// ─────────────────────────────────────────────────────────────
// SKILLS. Each row is a group, listed from what a person sees (top)
// down to the electronics (bottom). To add a skill, add it to a group's
// `tools` list. To add a group, copy a block and put it where it fits.
//
//   name   group heading
//   tools  list of skills
//   note   optional, one line shown under the group
//   mark   optional, true highlights the group
// ─────────────────────────────────────────────────────────────

export const layers = [
  {
    name: 'Interface',
    tools: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'JSP'],
  },
  {
    name: 'Backend',
    tools: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'Servlets', 'REST APIs'],
  },
  {
    name: 'Data',
    tools: ['MySQL', 'SQL', 'JDBC', 'JPA'],
  },
  {
    name: 'Integrations',
    tools: ['Gemini API', 'Razorpay', 'OpenWeather', 'Pexels'],
  },
  {
    name: 'Tools and testing',
    tools: ['Git and GitHub', 'Maven', 'Postman', 'Unit and integration tests', 'Eclipse', 'VS Code', 'Apache Tomcat'],
  },
  {
    name: 'C programming',
    tools: ['C', 'Bitwise operations', 'File handling', 'Modular programs with header files', 'Command-line tools', 'GCC'],
    mark: true,
    note: 'Used in the LSB steganography project.',
  },
  {
    name: 'Electronics and hardware',
    tools: ['B.E. in Electronics and Communication', 'IoT sensors', 'Machine learning on sensor data', 'Python'],
    mark: true,
  },
];
