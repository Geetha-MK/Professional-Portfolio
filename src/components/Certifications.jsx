import { certifications } from '../data/portfolio.js';

// Add certificates in data/certifications.js. The section is hidden if the list is empty.
export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certs" className="section" aria-labelledby="certs-title">
      <h2 id="certs-title" className="section__title">
        Certifications
      </h2>

      <ul className="certs__list">
        {certifications.map((cert) => (
          <li key={`${cert.name}-${cert.issuer}`} className="cert">
            <p className="cert__name">{cert.name}</p>
            <p className="cert__issuer">
              {cert.issuer}
              {cert.date && <> &middot; {cert.date}</>}
              {cert.detail && <>. {cert.detail}</>}
            </p>
            {cert.href && (
              <a className="link" href={cert.href} target="_blank" rel="noreferrer">
                View certificate
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
