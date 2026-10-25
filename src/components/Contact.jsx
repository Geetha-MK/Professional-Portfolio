import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!status) return undefined;
    const timer = setTimeout(() => setStatus(''), 3500);
    return () => clearTimeout(timer);
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('Email copied');
    } catch {
      setStatus('Could not copy. Select the address and copy it yourself.');
    }
  }

  const links = profile.links.filter((link) => link.href);

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section__title">
        Open to software and hardware roles
      </h2>
      <p className="section__intro">
        I am a 2026 graduate looking for my first job in software development (Java, full stack) or in
        hardware and embedded work (C, electronics). Email is the quickest way to reach me.
      </p>

      <div className="contact__actions">
        <a className="btn btn--solid" href={`mailto:${profile.email}`}>
          Send an email
        </a>
        <button type="button" className="btn" onClick={copyEmail}>
          Copy email
        </button>
        {profile.resume && (
          <a className="btn" href={profile.resume} download>
            Download resume
          </a>
        )}
        <span className="contact__status" role="status">
          {status}
        </span>
      </div>

      <p className="contact__address">
        {profile.email}
        {profile.location && <> &middot; {profile.location}</>}
      </p>

      {links.length > 0 && (
        <ul className="contact__links">
          {links.map((link) => (
            <li key={link.href}>
              <a className="link" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
