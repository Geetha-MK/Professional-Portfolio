// ─────────────────────────────────────────────────────────────
// PROJECTS. To add one, copy a block below, paste it at the TOP of
// the `projects` list, and fill it in. Nothing else needs to change.
// The filter chips on the page are built from `categories`, so a new
// category appears on its own.
//
//   id          unique, lowercase, no spaces
//   lane        colour marker: 'software' (blue) | 'hardware' (gold) | 'both' (split)
//   categories  which filters it shows under. Any of the ids in `categories` below.
//   title       project name
//   summary     one line, shown in the closed row
//   story       what you built and how, 2 to 4 sentences
//   result      optional, one line in bold (only add a real figure or outcome)
//   stack       list of tools
//   links       optional, [{ label: 'Source on GitHub', href: '...' }]
// ─────────────────────────────────────────────────────────────

// The filter chips. `lane` only picks the colour of the small square.
export const categories = [
  { id: 'software', label: 'Software', lane: 'software' },
  { id: 'hardware', label: 'Hardware', lane: 'hardware' },
  { id: 'c', label: 'C projects', lane: 'both' },
];

export const projects = [
  {
    id: 'lsb-steganography',
    lane: 'hardware',
    categories: ['hardware', 'c'],
    title: 'LSB image steganography',
    summary: 'A C program that hides a secret file inside a BMP image and extracts it again.',
    story:
      'The encoder replaces the least significant bit of each pixel byte with a bit of the secret file, so the image looks unchanged. It first checks that the image is large enough, then stores a magic string, the file extension, the file size and the data. The decoder looks for the magic string before extracting, so an image with nothing hidden in it is rejected. It is a command-line tool (-e to encode, -d to decode) written as separate C modules with header files, using bitwise operations and binary file handling.',
    result: 'About 1,000 lines of C that hide and recover any text, CSV or source file in a BMP.',
    stack: ['C', 'Bitwise operations', 'File handling', 'BMP format', 'GCC'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Geetha-MK/LSB-IMAGE-STEGANOGRAPHY' }],
  },
  {
    id: 'amr-rescue-robot',
    lane: 'both',
    categories: ['hardware', 'software'],
    title: 'Autonomous multitasking rescue robot',
    summary: 'A robot that uses machine learning and IoT sensors to monitor vital signs and send alerts.',
    story:
      'This was my final-year major project, built for unmanned and hazardous zones. The system monitors vital signs with IoT sensors, predicts health status with a machine learning model, sends alerts, and supports rescue operations.',
    stack: ['Machine learning', 'IoT sensors', 'Python'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Geetha-MK/AMR-Robot-ML-System' }],
  },
  {
    id: 'skillbridge',
    lane: 'software',
    categories: ['software'],
    title: 'SkillBridge',
    summary: 'A skill-sharing platform with a Spring Boot REST API and a React front end.',
    story:
      'People list the skills they can teach, learners find teachers for a skill, send learning requests and make connections, and leave reviews. The API has controllers, services, repositories and DTOs for users, skills, requests, connections and reviews, with global exception handling. Spring Security handles login with BCrypt-hashed passwords, and admin-only actions are locked with role checks. Data is stored in MySQL through JPA and Hibernate, and I checked every endpoint in Postman.',
    result: 'A Spring Security-protected REST API on MySQL with a React and Vite front end.',
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA and Hibernate', 'MySQL', 'React', 'React Router', 'Postman'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Geetha-MK/skillbridge' }],
  },
  {
    id: 'wayfarer',
    lane: 'software',
    categories: ['software'],
    title: 'Wayfarer',
    summary: 'A React travel explorer that combines an AI model with weather and photos.',
    story:
      'Visitors explore destinations, see live weather for the place and for their own location, browse famous places with photos, chat with a Gemini assistant, and generate a day-by-day itinerary shown as cards. It handles loading, empty and error states, including denied location access and missing API keys, and keeps API keys in environment variables instead of the code.',
    result: 'Three external APIs combined in one React app, with error handling for each.',
    stack: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'Gemini API', 'OpenWeather', 'Pexels'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Geetha-MK/wayfarer-Travel' }],
  },
  {
    id: 'food-delivery',
    lane: 'software',
    categories: ['software'],
    title: 'Food Delivery System',
    summary: 'A food ordering web app on Java Servlets, JSP and MySQL.',
    story:
      'Users register and log in, browse food items and restaurants, and manage a shopping cart. Servlets handle registration, login, adding and removing cart items, viewing the cart and placing an order, with JDBC prepared statements writing to MySQL. The front end is a responsive HTML, CSS and JavaScript interface, and the app runs on Apache Tomcat.',
    stack: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Apache Tomcat', 'HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/Geetha-MK/Food-Delivery-System' },
      { label: 'Live demo', href: 'https://geetha-mk.github.io/Food-Delivery-System/' },
    ],
  },
  {
    id: 'gift-store',
    lane: 'software',
    categories: ['software'],
    title: 'Gift Store',
    summary: 'A full-stack e-commerce application with a cart and online payments.',
    story:
      'Registration, login, product listing, the shopping cart and order placement all run on four MySQL tables: users, products, orders and order items. I integrated Razorpay for payments and tested the shopping flows end to end, troubleshooting application, database and payment issues along the way.',
    result: 'A complete shopping flow with Razorpay checkout, tested end to end.',
    stack: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Razorpay'],
    links: [],
  },
];
