import { useId, useState } from 'react';
import { projects, categories } from '../data/portfolio.js';

// The filters come from data/projects.js, so a new category shows up by itself.
// Only categories that have at least one project are listed.
const FILTERS = [
  { id: 'all', label: 'All', lane: 'both' },
  ...categories.filter((c) => projects.some((p) => p.categories?.includes(c.id))),
];

const LANE_LABEL = {
  software: 'Software',
  hardware: 'Hardware',
  both: 'Software and hardware',
};

const matches = (project, filter) => filter === 'all' || project.categories?.includes(filter);

function Project({ project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="project">
      <h3 className="project__heading">
        <button
          type="button"
          className="project__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="project__title">
            <span className="swatch" data-lane={project.lane} aria-hidden="true" />
            {project.title}
            <span className="project__lane">{LANE_LABEL[project.lane]}</span>
          </span>
          <span className="project__summary">{project.summary}</span>
          <span className="project__chev" aria-hidden="true" />
        </button>
      </h3>

      <div id={panelId} className="project__panel" data-open={open} inert={!open}>
        <div className="project__panel-inner">
          <div className="project__body">
            <p>{project.story}</p>
            {project.result && <p className="project__result">{project.result}</p>}
            <p className="project__stack">{project.stack.join(', ')}</p>

            {project.snippet && (
              <pre className="code" tabIndex={0}>
                <code>{project.snippet}</code>
              </pre>
            )}

            {project.links?.length > 0 && (
              <p className="project__links">
                {project.links.map((link) => (
                  <a key={link.href} className="link" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = projects.filter((project) => matches(project, filter));

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <h2 id="work-title" className="section__title">
        Projects
      </h2>
      <p className="section__intro">
        Open a project to see what I built. Blue marks software, gold marks hardware, and a split
        marker means both. Filter by software, hardware or C.
      </p>

      <div className="filters" role="group" aria-label="Filter projects by category">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="filter"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            <span className="swatch" data-lane={item.lane} aria-hidden="true" />
            {item.label}
          </button>
        ))}
      </div>

      <ul className="projects">
        {visible.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
