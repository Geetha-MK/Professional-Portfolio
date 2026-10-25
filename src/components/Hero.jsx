import SignalTrace from './SignalTrace.jsx';
import { profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section id="top" className="section hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        {profile.headline.map((line) => (
          <span key={line} className="hero__line">
            {line}
          </span>
        ))}
      </h1>

      <SignalTrace text={profile.name} />

      <div className="hero__about">
        <p className="hero__role">{profile.role}</p>
        <p className="hero__lede">{profile.intro}</p>
      </div>

      <div className="hero__actions">
        <a className="btn btn--solid" href="#work">
          See the projects
        </a>
        <a className="btn" href="#contact">
          Contact me
        </a>
      </div>
    </section>
  );
}
