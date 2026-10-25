// ─────────────────────────────────────────────────────────────
// Your details, experience and education live here.
//
// Skills, projects and certifications live in skills.js, projects.js and certifications.js.
// Everything below comes from the resume. Anything optional
// (links, resume file, certificate link) is left out of the page
// until you fill it in, so nothing shows up broken.
// ─────────────────────────────────────────────────────────────

export const profile = {
  fullName: 'Geetha M K',
  // Drawn as a serial waveform in the hero. Keep it ASCII, 3 to 10 characters.
  name: 'Geetha',
  // One entry per line of the hero headline.
  headline: ['I build software.', 'I understand the hardware under it.'],
  role: 'Software and hardware engineer, 2026 Electronics and Communication graduate',
  intro:
    'I am an Electronics and Communication graduate who also completed a six-month Full Stack Java program at Tap Academy. On the software side I build Spring Boot and React applications; on the hardware side I write C and have built a machine-learning rescue robot with IoT sensors. I am looking for my first role in software development or in hardware and embedded work.',
  location: 'Bengaluru, Karnataka',
  email: 'geetha.mk562@gmail.com',
  // Put an exported resume in public/ and set this to '/resume.pdf' to show a download button.
  resume: '',
  links: [
    { label: 'GitHub', href: 'https://github.com/Geetha-MK' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/geethamk/' },
  ],
};

export const sections = [
  { id: 'top', label: 'Intro' },
  { id: 'stack', label: 'Skills' },
  { id: 'work', label: 'Projects' },
  { id: 'certs', label: 'Certifications' },
  { id: 'path', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

// Listed the way the resume lists them. `lead: true` lights up the first timeline node.
export const jobs = [
  {
    role: 'Full Stack Java Development and Generative AI Intern',
    org: 'Tap Academy, Bengaluru',
    when: 'Jan 2025 to Jun 2025',
    lead: true,
    points: [
      'Built product-management and order-processing modules in Java with JSP, Servlets, JDBC and MySQL, covering product search, edit, delete and order placement.',
      'Debugged SQL and application defects that left product and order data inconsistent, and verified the fixes against MySQL.',
      'Troubleshot payment gateway integration issues together with the design and learning teams.',
      'Applied OOP, debugging and SDLC practices across development and maintenance.',
    ],
  },
  {
    role: 'Bachelor of Engineering, Electronics and Communication Engineering',
    org: 'MVJ College of Engineering, Bengaluru',
    when: '2022 to 2026',
    points: ['CGPA 8.03 out of 10.'],
  },
];

// Skills, projects and certifications each have their own file, so adding one is a one-file edit.
export { layers } from './skills.js';
export { projects, categories } from './projects.js';
export { certifications } from './certifications.js';
