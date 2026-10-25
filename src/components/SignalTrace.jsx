import { useMemo, useState } from 'react';

// The hero's one orchestrated moment: the name drawn as the bytes a UART
// would send. Each character is one frame: a low start bit, eight data
// bits (least significant first), and a high stop bit.

const BIT_W = 10; // viewBox units per bit
const FRAME_BITS = 10;
const FRAME_W = BIT_W * FRAME_BITS;
const H = 56;
const HIGH = 8;
const LOW = 48;

function frameBits(code) {
  const bits = [0];
  for (let i = 0; i < 8; i += 1) bits.push((code >> i) & 1);
  bits.push(1);
  return bits;
}

const toHex = (code) => `0x${code.toString(16).toUpperCase().padStart(2, '0')}`;

export default function SignalTrace({ text }) {
  const [hovered, setHovered] = useState(null);

  const chars = useMemo(
    () => [...text].slice(0, 10).map((char) => ({ char, code: char.charCodeAt(0) & 0xff })),
    [text],
  );

  const { path, width } = useMemo(() => {
    const bits = chars.flatMap(({ code }) => frameBits(code));
    let x = 0;
    let level = 1; // the line idles high
    let d = `M0 ${HIGH}`;
    for (const bit of bits) {
      if (bit !== level) {
        d += ` V${bit ? HIGH : LOW}`;
        level = bit;
      }
      x += BIT_W;
      d += ` H${x}`;
    }
    return { path: d, width: bits.length * BIT_W };
  }, [chars]);

  return (
    <figure className="signal">
      <div className="signal__stage">
        <div className="signal__scope">
          <svg
            className="signal__svg"
            viewBox={`0 0 ${width} ${H}`}
            preserveAspectRatio="none"
            role="img"
            aria-label={`${text} drawn as UART bytes`}
          >
            {chars.map((_, i) => (
              <rect
                key={`frame-${i}`}
                className={`signal__frame${hovered === i ? ' is-active' : ''}`}
                x={i * FRAME_W}
                y="0"
                width={FRAME_W}
                height={H}
              />
            ))}
            {chars.slice(1).map((_, i) => (
              <line
                key={`sep-${i}`}
                className="signal__sep"
                x1={(i + 1) * FRAME_W}
                x2={(i + 1) * FRAME_W}
                y1="0"
                y2={H}
                vectorEffect="non-scaling-stroke"
              />
            ))}
            <path className="signal__wave" d={path} vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <span className="signal__scan" aria-hidden="true" />
      </div>

      <ol className="signal__chars" style={{ '--n': chars.length }}>
        {chars.map(({ char, code }, i) => (
          <li
            key={`char-${i}`}
            className="signal__item"
            style={{ '--i': i }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="signal__glyph">{char}</span>
            <span className="signal__hex">{toHex(code)}</span>
          </li>
        ))}
      </ol>

      <figcaption className="signal__caption">
        {text} as serial bytes, from my electronics degree: a start bit, eight data bits, a stop bit.
      </figcaption>
    </figure>
  );
}
