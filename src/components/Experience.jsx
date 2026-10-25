import { jobs } from '../data/portfolio.js';

// The work history really is a sequence, so it is drawn as a timeline.
export default function Experience() {
  return (
    <section id="path" className="section" aria-labelledby="path-title">
      <h2 id="path-title" className="section__title">
        Experience and education
      </h2>

      <ol className="timeline">
        {jobs.map((job) => (
          <li key={`${job.role}-${job.when}`} className={`job${job.lead ? ' job--lead' : ''}`}>
            <p className="job__when">{job.when}</p>
            <div className="job__body">
              <h3 className="job__role">{job.role}</h3>
              <p className="job__org">{job.org}</p>
              {job.points.length > 0 && (
                <ul className="job__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
