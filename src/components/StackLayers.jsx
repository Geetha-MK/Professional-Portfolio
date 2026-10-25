import { layers } from '../data/portfolio.js';

export default function StackLayers() {
  const last = layers.length - 1;

  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <h2 id="stack-title" className="section__title">
        Skills
      </h2>
      <p className="section__intro">
        Listed from the interface a person sees down to the electronics underneath. The bar on the left
        shifts from blue (software) to gold (hardware), and the highlighted rows are my C and hardware work.
      </p>

      <ul className="layers">
        {layers.map((layer, i) => (
          <li
            key={layer.name}
            className={`layer${layer.mark ? ' layer--seam' : ''}`}
            style={{ '--t': i / last }}
          >
            <h3 className="layer__name">{layer.name}</h3>
            <p className="layer__tools">{layer.tools.join(', ')}</p>
            {layer.note && <p className="layer__note">{layer.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
