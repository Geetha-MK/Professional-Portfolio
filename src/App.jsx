import Rail from './components/Rail.jsx';
import Hero from './components/Hero.jsx';
import StackLayers from './components/StackLayers.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Rail />
      <main id="main" className="main">
        <Hero />
        <StackLayers />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
        <footer className="footer">Designed and built with React and Vite.</footer>
      </main>
    </>
  );
}
