import { useEffect, useRef } from 'react';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { profile, sections } from '../data/portfolio.js';

const IDS = sections.map((s) => s.id);

// On wide screens: a vertical trace down the left edge. The gold segment
// runs to the section you are reading. On small screens: a sticky top bar.
export default function Rail() {
  const active = useActiveSection(IDS);
  const activeIndex = Math.max(0, IDS.indexOf(active));
  const listRef = useRef(null);

  // In the mobile top bar the list scrolls sideways, so keep the active item visible.
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector('[aria-current="true"]');
    if (!list || !link || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2, behavior: 'smooth' });
  }, [active]);

  return (
    <nav className="rail" aria-label="Sections">
      <a className="rail__home" href="#top">
        {profile.fullName}
      </a>

      <ul ref={listRef} className="rail__list" style={{ '--step': activeIndex, '--steps': IDS.length - 1 }}>
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              className="rail__link"
              href={`#${section.id}`}
              aria-current={active === section.id ? 'true' : undefined}
              data-passed={i <= activeIndex}
            >
              <span className="rail__node" aria-hidden="true" />
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
