import { ProfileData, Project, SkillCategory, Certification, LearningItem, GoalItem } from '../types';

export const profileData: ProfileData = {
  name: 'Rudra Madhab Sahoo',
  preferredName: 'Madhab',
  roleTitle: 'Python Developer · Django Backend Developer',
  tagline: 'Second-year B.Tech CSE (AI & ML) · GITA Autonomous College',
  positioningStatement: 'I am a second-year Computer Science student focused on Python development and backend engineering. I have built Django applications with authentication, CRUD workflows, search, sorting and pagination, alongside Python automation scripts and computer-vision learning projects. I am actively seeking internship opportunities in Python development, backend engineering, Django/full-stack development and AI/ML.',
  degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
  institution: 'GITA Autonomous College, Bhubaneswar',
  location: 'Bhubaneswar, Odisha, India',
  email: 'sahoorudramadhab2007@gmail.com',
  secondaryEmail: 'sahoorudramadhab2007@gmail.com',
  socials: {
    github: 'https://github.com/Rudra0075-ms',
    linkedin: 'https://www.linkedin.com/in/rudra-madhab-sahoo-rms007/',
    codolio: 'https://codolio.com/profile/Rms_007',
    googleDev: 'https://me.developers.google.com/u/rudramadhabsahoogita',
  },
  approachValues: [
    { title: 'Build', subtitle: 'Learn through projects', description: 'Turn programming concepts into useful Python scripts, web applications and practical tools.' },
    { title: 'Understand', subtitle: 'Work from fundamentals', description: 'Practice core programming, object-oriented concepts, file handling, databases and application logic.' },
    { title: 'Improve', subtitle: 'Iterate with feedback', description: 'Use Git, documentation and testing to refine projects and make them easier to use and maintain.' }
  ],
  funFact: 'I enjoy building projects, solving coding problems, and exploring new technologies. Every project teaches me something new and helps me grow as a programmer.',
  credits: {
    developer: 'Rudra Madhab Sahoo',
    specialThanks: '@Pinaki-Das2007 for their contribution and support'
  }
};

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Languages used in coursework, practice and personal projects.',
    skills: [
      { name: 'Python', level: 'Primary', note: 'Python scripts, automation, file handling and application development', category: 'languages' },
      { name: 'Java', level: 'Working knowledge', note: 'Core programming and object-oriented concepts', category: 'languages' },
      { name: 'C', level: 'Working knowledge', note: 'Programming fundamentals', category: 'languages' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Server-side development and database-backed application fundamentals.',
    skills: [
      { name: 'Django', level: 'Hands-on projects', note: 'Authentication, CRUD, Django ORM, search, sorting and pagination', category: 'tools' },
      { name: 'Flask', level: 'Familiarity', note: 'Python web framework', category: 'tools' },
      { name: 'SQL', level: 'Fundamentals', note: 'Relational database concepts and SQLite', category: 'database' },
      { name: 'REST APIs', level: 'Fundamentals', note: 'REST API concepts', category: 'tools' }
    ]
  },
  {
    id: 'web',
    title: 'Frontend Development',
    description: 'Frontend technologies used to build interfaces for web applications.',
    skills: [
      { name: 'HTML5', level: 'Hands-on', note: 'Web page structure', category: 'web' },
      { name: 'CSS3', level: 'Hands-on', note: 'Styling and layouts', category: 'web' },
      { name: 'JavaScript', level: 'Hands-on', note: 'Interactive frontend behaviour', category: 'web' },
      { name: 'Bootstrap', level: 'Used in projects', note: 'Frontend styling for Django applications', category: 'web' }
    ]
  },
  {
    id: 'ai_ml',
    title: 'AI, ML & Computer Vision',
    description: 'Foundational exposure through coursework, internship learning and projects.',
    skills: [
      { name: 'Machine Learning', level: 'Fundamentals', note: 'Supervised learning and model evaluation concepts', category: 'ai_ml' },
      { name: 'NumPy', level: 'Familiarity', note: 'Python numerical computing library', category: 'ai_ml' },
      { name: 'Pandas', level: 'Familiarity', note: 'Data handling and analysis', category: 'ai_ml' },
      { name: 'TensorFlow', level: 'Exposure', note: 'AI/ML internship learning', category: 'ai_ml' },
      { name: 'OpenCV', level: 'Hands-on project', note: 'Webcam-based face detection and recognition prototype', category: 'ai_ml' }
    ]
  },
  {
    id: 'database',
    title: 'Databases',
    description: 'Relational database concepts used in projects.',
    skills: [
      { name: 'SQLite', level: 'Hands-on', note: 'Used with Django ORM and Python projects', category: 'database' },
      { name: 'Relational Database Concepts', level: 'Fundamentals', note: 'Tables, records and ORM-backed data management', category: 'database' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    description: 'Tools used to write, manage and publish code.',
    skills: [
      { name: 'Git', level: 'Hands-on', note: 'Version control and project history', category: 'tools' },
      { name: 'GitHub', level: 'Hands-on', note: 'Repository hosting and project documentation', category: 'tools' },
      { name: 'VS Code', level: 'Daily use', note: 'Development environment', category: 'tools' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'student-management-system',
    name: 'Student Management System',
    category: 'python',
    categoryLabel: 'Python · Django Backend',
    shortDescription: 'A Django web application for managing student records with authentication and common record-management workflows.',
    fullDescription: 'Built a full-stack student management application using Django, SQLite and frontend technologies. The application includes session-based user authentication, student CRUD operations, search, sorting, pagination, server-side validation and CSRF protection.',
    technologies: ['Python', 'Django', 'SQLite', 'Django ORM', 'HTML5', 'CSS3', 'Bootstrap'],
    githubUrl: 'https://github.com/Rudra0075-ms/Student_Management_System',
    liveUrl: 'https://student-management-system-inky.vercel.app/',
    status: 'completed',
    highlights: 'Backend-focused project with authentication and database operations',
    features: ['User signup, login and logout', 'Protected application pages and session-based authentication', 'Create, view, update and delete student records', 'Search, sorting and pagination', 'Django ORM, server-side validation and CSRF protection']
  },
  {
    id: 'face-recognition-attendance',
    name: 'Face Recognition Attendance System',
    category: 'python',
    categoryLabel: 'Python · Computer Vision',
    shortDescription: 'A learning prototype that registers faces, recognizes them through a webcam and stores attendance in SQLite.',
    fullDescription: 'Developed a local attendance-tracking prototype with Python, OpenCV, face_recognition and SQLite. It supports face registration, webcam-based recognition and attendance logging. This is an educational prototype, not a production identity-verification system.',
    technologies: ['Python', 'OpenCV', 'face_recognition', 'SQLite'],
    githubUrl: 'https://github.com/Rudra0075-ms/Python_Mini_Projects/tree/main/Face%20Recognition%20Attendance%20System',
    liveUrl: null,
    status: 'completed',
    highlights: 'Webcam-based recognition and local attendance logging',
    features: ['Register a student using a face image', 'Recognize registered faces through a webcam', 'Record attendance in a local SQLite database', 'Learning prototype with local data storage']
  },
  {
    id: 'email-extractor',
    name: 'Email Extractor',
    category: 'python',
    categoryLabel: 'Python · Automation',
    shortDescription: 'A Python script that extracts email addresses from text files, removes duplicates and saves the results.',
    fullDescription: 'Created a small text-processing automation tool that reads a text file, identifies email addresses with regular expressions, deduplicates the matches and writes the output to another file.',
    technologies: ['Python', 'Regular Expressions', 'File Handling'],
    githubUrl: 'https://github.com/Rudra0075-ms/CodeAlpha_EmailExtractor',
    liveUrl: null,
    status: 'completed',
    highlights: 'CodeAlpha Python Programming Internship project',
    features: ['Read text from an input file', 'Extract email addresses using Python regex', 'Remove duplicate email addresses', 'Write extracted addresses to an output file']
  },
  {
    id: 'hangman-game',
    name: 'Hangman Game',
    category: 'python',
    categoryLabel: 'Python · Console Application',
    shortDescription: 'A console-based word guessing game with random word selection and a limited number of incorrect guesses.',
    fullDescription: 'Built a text-based Hangman game as part of the CodeAlpha Python Programming Internship. The game selects from predefined words, accepts one-letter guesses, tracks incorrect attempts and handles invalid or repeated input.',
    technologies: ['Python', 'random module', 'Lists', 'Loops'],
    githubUrl: 'https://github.com/Rudra0075-ms/CodeAlpha_HangmanGame',
    liveUrl: null,
    status: 'completed',
    highlights: 'CodeAlpha Python Programming Internship project',
    features: ['Random word selection', 'One-letter-at-a-time guessing', 'Six incorrect guesses allowed', 'Guessed-letter tracking and input validation']
  },
  {
    id: 'python-mini-projects',
    name: 'Python Mini Projects Collection',
    category: 'python',
    categoryLabel: 'Python · Learning Projects',
    shortDescription: 'A collection of Python exercises and utilities, including a chess game, image-to-PDF converter and face-recognition attendance prototype.',
    fullDescription: 'A growing repository of Python learning projects and mini programs. It includes GUI and command-line practice, image-to-PDF conversion, a desktop chess game and a computer-vision attendance prototype.',
    technologies: ['Python', 'Tkinter', 'OpenCV', 'SQLite', 'FPDF'],
    githubUrl: 'https://github.com/Rudra0075-ms/Python_Mini_Projects',
    liveUrl: null,
    status: 'completed',
    highlights: 'Multiple small projects in one documented repository',
    features: ['Chess game with graphical interface', 'Image-to-PDF conversion utility', 'Python mini programs for logic practice', 'Face-recognition attendance learning prototype']
  },
  {
    id: 'python-daily',
    name: 'Python Daily Practice',
    category: 'python',
    categoryLabel: 'Python · Learning Repository',
    shortDescription: 'A repository of regular Python practice covering fundamentals, OOP, libraries, file handling and CSV exercises.',
    fullDescription: 'A learning repository built while practising Python programming. The contents include beginner-friendly exercises around input, variables, operators, conditionals, loops, functions, object-oriented programming, library usage, file handling and CSV work.',
    technologies: ['Python', 'OOP', 'File Handling', 'CSV', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/Rudra0075-ms/PYTHON_DAILY',
    liveUrl: null,
    status: 'completed',
    highlights: 'Consistent practice of core Python concepts',
    features: ['Python syntax and programming fundamentals', 'Object-oriented programming exercises', 'File handling and CSV practice', 'Notebook-based learning exercises']
  },
  {
    id: 'portfolio-website',
    name: 'Developer Portfolio Website',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription: 'A responsive portfolio built to present development projects, skills and professional experience.',
    fullDescription: 'Personal portfolio website built with React, TypeScript and Vite, with a component-based structure and project, skills, learning and contact sections.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Rudra0075-ms/portfolio',
    liveUrl: 'https://madhab.dpdns.org/',
    status: 'completed',
    highlights: 'Personal portfolio and project showcase',
    features: ['Component-based React application', 'Project and skills sections', 'Contact and professional profile links']
  },
  {
    id: 'fitness-guide',
    name: 'Fitness Guide Website',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription: 'A frontend website presenting fitness, nutrition and healthy-lifestyle information.',
    fullDescription: 'A web project built with HTML, CSS and JavaScript to organize fitness and lifestyle information in a browsable interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Rudra0075-ms/fitness_guide',
    liveUrl: 'https://rudra0075-ms.github.io/fitness_guide/',
    status: 'completed',
    highlights: 'Frontend web project',
    features: ['Organized fitness and lifestyle content', 'Interactive frontend experience']
  },
  {
    id: 'web-tools',
    name: 'Frontend Mini Projects',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription: 'Small interactive web projects including a calculator, analog watch, memory game and to-do list.',
    fullDescription: 'A set of small frontend projects built using HTML, CSS and JavaScript to practise interface development and browser-side interactions.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Rudra0075-ms',
    liveUrl: null,
    status: 'completed',
    highlights: 'Multiple frontend practice projects',
    features: [
      'All-in-One Calculator: https://github.com/Rudra0075-ms/All-in-one-Calculator',
      'Analog Watch: https://github.com/Rudra0075-ms/analog_watch',
      'Memory Card Game: https://github.com/Rudra0075-ms/memory_card_game',
      'To-Do List: https://github.com/Rudra0075-ms/to-do-list___web'
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'python-fullstack-internship',
    title: 'Python Full Stack Development Virtual Internship',
    issuer: 'EduSkills Foundation',
    type: 'Virtual Internship · Aug 2026 – Oct 2026',
    description: 'Completed an 8-week structured virtual internship covering full-stack Python web development. Built a Django Student Management System using authentication, CRUD operations, search, sorting, pagination, Django ORM and SQLite.',
    tags: ['Python', 'Django', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    documentUrl: 'https://github.com/Rudra0075-ms/Student_Management_System',
    isPdf: false,
    highlight: '8-week remote virtual internship completed',
    skillsLearned: ['Django application development and MVT fundamentals', 'Authentication, CRUD workflows and ORM-backed data management', 'Frontend integration with HTML, CSS, JavaScript and Bootstrap']
  },
  {
    id: 'codealpha-python-internship',
    title: 'Python Programming Virtual Internship',
    issuer: 'CodeAlpha',
    type: 'Virtual Internship · Sep 2026',
    description: 'Completed Python programming internship tasks by developing a Hangman game and an Email Extractor. Received a Letter of Recommendation.',
    tags: ['Python', 'Loops', 'Conditional Logic', 'Regular Expressions', 'File Handling'],
    documentUrl: 'https://github.com/Rudra0075-ms/CodeAlpha_HangmanGame',
    isPdf: false,
    highlight: 'Completed internship projects and received a Letter of Recommendation',
    skillsLearned: ['Built a console-based Hangman game', 'Developed an email extraction script using regex and file handling', 'Documented and published project source code on GitHub']
  },
  {
    id: 'ai-ml-virtual-internship',
    title: 'AI & ML Virtual Internship',
    issuer: 'Google AI-ML Virtual Internship · EduSkills Foundation',
    type: 'Virtual Internship · Jun 2026 – Aug 2026',
    description: 'Completed an 8-week virtual internship exploring foundational Artificial Intelligence and Machine Learning concepts, including supervised learning and model evaluation.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Supervised Learning', 'Model Evaluation'],
    documentUrl: '/AI-ML-Virtual-Internship.pdf',
    isPdf: true,
    highlight: '8-week AI and machine learning virtual internship completed',
    skillsLearned: ['Foundational AI and machine learning concepts', 'Supervised learning workflows', 'Model evaluation and practical AI applications']
  },
  {
    id: 'programming-c',
    title: 'Programming with C',
    issuer: 'Simplilearn via Coursera',
    type: 'Certificate · Jan 2026',
    description: 'Completed the Programming with C course.',
    tags: ['C', 'Programming Fundamentals'],
    documentUrl: 'https://www.coursera.org/',
    isPdf: false,
    highlight: 'Course completion certificate',
    skillsLearned: ['C programming fundamentals']
  },
  {
    id: 'campuscrew',
    title: 'CampusCrew Priority Member',
    issuer: 'Unstop',
    type: 'Recognition · Aug 2026',
    description: 'Selected as a CampusCrew Priority Member.',
    tags: ['Campus Community', 'Recognition'],
    documentUrl: 'https://unstop.com/',
    isPdf: false,
    highlight: 'CampusCrew Priority Member selection',
    skillsLearned: ['Student community participation']
  }
];

export const learningItems: LearningItem[] = [
  {
    topic: 'Python & Backend Development',
    status: 'In Progress',
    category: 'Core Development',
    description: 'Continuing to strengthen Python programming and Django-based backend application development.'
  },
  {
    topic: 'Data Structures & Algorithms',
    status: 'In Progress',
    category: 'Computer Science',
    description: 'Practising data structures and problem solving through dedicated DSA repositories.'
  },
  {
    topic: 'Machine Learning Fundamentals',
    status: 'In Progress',
    category: 'AI / ML',
    description: 'Building on internship exposure to foundational machine learning concepts and model evaluation.'
  },
  {
    topic: 'AI Agents & Agentic AI',
    status: 'In Progress',
    category: 'Emerging Technology',
    description: 'Exploring agentic AI concepts as part of an ongoing learning journey.'
  }
];

export const goals2026: GoalItem[] = [
  {
    goal: 'Build stronger Python backend applications',
    area: 'Backend Engineering',
    targetYear: '2026',
    description: 'Develop practical Django and Python applications with reliable data handling and clean project structure.'
  },
  {
    goal: 'Improve data structures and problem solving',
    area: 'Computer Science Fundamentals',
    targetYear: '2026',
    description: 'Build consistency with DSA practice and strengthen algorithmic fundamentals.'
  },
  {
    goal: 'Apply machine learning fundamentals',
    area: 'AI & Machine Learning',
    targetYear: '2026',
    description: 'Continue learning core ML concepts and use them in focused, well-documented projects.'
  },
  {
    goal: 'Contribute to practical software projects',
    area: 'Professional Development',
    targetYear: '2026',
    description: 'Keep building, documenting and improving projects while preparing for software development internships.'
  }
];
