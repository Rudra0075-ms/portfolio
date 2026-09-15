import { ProfileData, Project, SkillCategory, Certification, LearningItem, GoalItem } from '../types';

export const profileData: ProfileData = {
  name: 'Rudra Madhab Sahoo',
  preferredName: 'Rudra',
  roleTitle: 'Python Developer · AI/ML Learner · Practical Builder',
  tagline: '2nd Year B.Tech CSE (AI & ML) | GITA Autonomous College',
  positioningStatement: 'I build practical software and web applications with Python while growing into AI agents, LangChain, LangGraph, and backend engineering. A developer who learns by building.',
  degree: 'B.Tech in Computer Science & Engineering (AI & ML Specialization)',
  institution: 'GITA Autonomous College, Bhubaneswar',
  location: 'Odisha, India',
  email: 'sahoorudramadhab2007@gmail.com',
  secondaryEmail: 'msrudra0075@gmail.com',
  socials: {
    github: 'https://github.com/Rudra0075-ms',
    linkedin: 'https://www.linkedin.com/in/rudra-madhab-sahoo-b4b097367/',
    codolio: 'https://codolio.com/profile/Rms_007',
    googleDev: 'https://me.developers.google.com/u/rudramadhabsahoogita',
  },
  approachValues: [
    {
      title: 'Build',
      subtitle: 'Hands-on Execution',
      description: 'Turn theoretical concepts into working software. From CLI tools to multi-page interactive web applications.'
    },
    {
      title: 'Understand',
      subtitle: 'First-Principles Logic',
      description: 'Break things down to know exactly why they fail and how to engineer resilient solutions instead of copying code.'
    },
    {
      title: 'Improve',
      subtitle: 'Iterative Refinement',
      description: 'Refactor logic, optimize performance, streamline UX, and expand capabilities with modern toolchains.'
    }
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
    description: 'Core languages used for problem solving, software logic, and systems programming.',
    skills: [
      { name: 'Python', level: 'Intermediate', note: 'Primary language for automation, algorithms & AI workflows', category: 'languages' },
      { name: 'Java', level: 'Intermediate', note: 'Object-oriented programming & core computer science', category: 'languages' },
      { name: 'C', level: 'Intermediate', note: 'Procedural fundamentals & memory concepts', category: 'languages' },
      { name: 'C++', level: 'Basic', note: 'Syntax & algorithmic fundamentals', category: 'languages' },
    ]
  },
  {
    id: 'ai_ml',
    title: 'AI / ML & Agentic Systems',
    description: 'Current technical focus in artificial intelligence, intelligent workflows, and vector architectures.',
    skills: [
      { name: 'LangChain', level: 'Active Learning', note: 'LLM orchestration, prompt chains & pipelines', category: 'ai_ml' },
      { name: 'LangGraph', level: 'Active Learning', note: 'Stateful, cyclic multi-agent graph architectures', category: 'ai_ml' },
      { name: 'AI Agents', level: 'Active Learning', note: 'Autonomous decision loops, tool usage & agentic execution', category: 'ai_ml' },
      { name: 'CrewAI', level: 'Exploring', note: 'Multi-agent collaboration frameworks', category: 'ai_ml' },
      { name: 'RAG Architecture', level: 'Exploring', note: 'Retrieval-augmented generation for external knowledge', category: 'ai_ml' },
      { name: 'Vector Databases', level: 'Exploring', note: 'Vector indexing, similarity search & embeddings', category: 'ai_ml' },
      { name: 'Machine Learning', level: 'Fundamentals', note: 'Model training paradigms, metrics & evaluation', category: 'ai_ml' },
    ]
  },
  {
    id: 'web',
    title: 'Web Technologies',
    description: 'Client-side frontend development delivering responsive, accessible web interfaces.',
    skills: [
      { name: 'HTML5', level: 'Proficient', note: 'Semantic page structuring & accessibility', category: 'web' },
      { name: 'CSS3', level: 'Proficient', note: 'Modern layout grids, flexbox, transitions & dark mode', category: 'web' },
      { name: 'JavaScript', level: 'Competent', note: 'DOM manipulation, async data handling & event architecture', category: 'web' },
      { name: 'Responsive UI', level: 'Proficient', note: 'Mobile-first and cross-device optimization', category: 'web' },
    ]
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    description: 'Relational data modeling and structured query execution.',
    skills: [
      { name: 'MySQL', level: 'Foundational', note: 'Relational schemas, queries & table management', category: 'database' },
    ]
  },
  {
    id: 'tools',
    title: 'Developer Tools & Platforms',
    description: 'Day-to-day development environments, version control, and cloud notebooks.',
    skills: [
      { name: 'Git', level: 'Workflow', note: 'Version control, commits, branching & workflow management', category: 'tools' },
      { name: 'GitHub', level: 'Workflow', note: 'Repository hosting, open-source projects & collaboration', category: 'tools' },
      { name: 'VS Code', level: 'Primary Editor', note: 'Extensible IDE setup for Python & Web Dev', category: 'tools' },
      { name: 'Google Colab', level: 'Cloud Notebook', note: 'Jupyter-based experimentation for Python & ML', category: 'tools' },
      { name: 'Antigravity IDE', level: 'Development IDE', note: 'Integrated developer workspace', category: 'tools' },
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 'real-world-ai-agent',
    name: 'Real-World AI Agent',
    category: 'ai',
    categoryLabel: 'AI / Agentic Systems',
    shortDescription: 'Autonomous agent exploring retrieval, memory persistence, and dynamic tool orchestration with LangGraph.',
    fullDescription: 'An active flagship exploration into stateful agentic architectures. The system implements cyclic decision loops where the agent receives objectives, queries vector stores for context (RAG), decides when to execute external tool calls, and preserves conversational and procedural memory across multi-turn exchanges.',
    technologies: ['Python', 'LangChain', 'LangGraph', 'RAG', 'VectorDB', 'CrewAI'],
    githubUrl: 'https://github.com/Rudra0075-ms/portfolio',
    liveUrl: null,
    status: 'in-progress',
    highlights: 'Currently Building · Autonomous decision-making & tool execution',
    features: [
      'Multi-agent graph workflow defined with LangGraph state machines',
      'Retrieval-Augmented Generation (RAG) querying vector databases',
      'Dynamic tool invocation for calculation and real-time external querying',
      'Persistent memory architecture across agent loops'
    ],
    statsOrConcepts: [
      { label: 'Architecture', value: 'LangGraph State Machine' },
      { label: 'Memory', value: 'Persistent Vector Store' },
      { label: 'Status', value: 'Active Development' }
    ]
  },
  {
    id: 'portfolio-website',
    name: 'Personal Portfolio Website',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription: 'Modern developer portfolio showcasing projects, verified credentials, and real-time learning journey.',
    fullDescription: 'The central hub representing Rudra Madhab Sahoo’s developer identity. Engineered with accessible semantic structure, dark/light theme switching with local persistence, responsive typography, and dedicated showcases for Python scripts, web applications, and AI certifications.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/Rudra0075-ms/portfolio',
    liveUrl: 'https://rudra0075-ms.github.io/portfolio/',
    status: 'completed',
    highlights: 'Production live on GitHub Pages with custom domain support',
    features: [
      'Engineered with clean dark/light theme toggle and persistent state',
      'Accessible navigation with keyboard support and responsive drawer',
      'Categorized tech stack without misleading proficiency percentages',
      'Direct certificate verification and link to verified internship document'
    ],
    statsOrConcepts: [
      { label: 'Deployment', value: 'GitHub Pages & CNAME' },
      { label: 'Theme', value: 'Dark/Light Local Storage' },
      { label: 'Responsive', value: 'Mobile / Tablet / Desktop' }
    ]
  },
  {
    id: 'fitness-guide',
    name: 'Fitness Guide Web Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription: 'Comprehensive lifestyle guide helping users organize balanced nutritional diets and daily workout habits.',
    fullDescription: 'A structured, interactive health resource designed to assist users in establishing healthy daily habits. Features categorized sections for nutrition, daily calorie understanding, workout routines, and hydration tracking in a clean, visual layout.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Rudra0075-ms/fitness_guide',
    liveUrl: 'https://rudra0075-ms.github.io/fitness_guide/',
    status: 'completed',
    highlights: 'Interactive nutrition & habit tracking guides',
    features: [
      'Curated dietary guides and workout recommendations',
      'Interactive health calculators and lifestyle habit tips',
      'Responsive multi-category content navigation',
      'Clean typography and distraction-free aesthetic'
    ],
    statsOrConcepts: [
      { label: 'Type', value: 'Health & Wellness App' },
      { label: 'Layout', value: 'Categorized Guide' }
    ]
  },
  {
    id: 'currency-converter',
    name: 'Real-Time Currency Converter',
    category: 'python',
    categoryLabel: 'Python / API Integration',
    shortDescription: 'Python application querying live foreign exchange rates via CurrencyAPI for accurate global currency conversions.',
    fullDescription: 'A practical Python project demonstrating API integration, JSON response parsing, and error-resilient calculation. It interfaces directly with CurrencyAPI endpoints to fetch live market exchange rates and dynamically compute conversions between global currency pairs.',
    technologies: ['Python', 'CurrencyAPI', 'REST APIs', 'JSON'],
    githubUrl: 'https://github.com/Rudra0075-ms/currency_converter',
    liveUrl: null,
    status: 'completed',
    highlights: 'Live market rate consumption via REST API',
    features: [
      'Live exchange rate retrieval from CurrencyAPI REST endpoints',
      'Dynamic currency selection with automatic rate calculation',
      'Robust input validation and API error handling',
      'Clean console output formatting for transaction clarity'
    ],
    statsOrConcepts: [
      { label: 'API Provider', value: 'CurrencyAPI' },
      { label: 'Language', value: 'Python 3' },
      { label: 'Type', value: 'Live Financial Tool' }
    ]
  },
  {
    id: 'all-in-one-calculator',
    name: 'All-in-One Scientific Calculator',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription: 'Interactive calculator supporting standard arithmetic, percentages, and scientific operations in a sleek UI.',
    fullDescription: 'A versatile web-based calculation suite engineered to handle everyday arithmetic alongside advanced mathematical expressions. Designed with keypad feedback, clear operator order-of-operations handling, and instant calculation rendering.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/Rudra0075-ms/All-in-one-Calculator',
    liveUrl: 'https://rudra0075-ms.github.io/All-in-one-Calculator/',
    status: 'completed',
    highlights: 'Dual standard & scientific computational modes',
    features: [
      'Arithmetic evaluation with precedence ordering',
      'Scientific functions for roots, powers, and trigonometry',
      'Backspace, clear, and calculation history retention',
      'Responsive keypad adapted for both mobile touch and keyboard inputs'
    ],
    statsOrConcepts: [
      { label: 'Mode', value: 'Standard & Scientific' },
      { label: 'Input', value: 'Click, Touch & Keyboard' }
    ]
  },
  {
    id: 'age-calculator',
    name: 'Exact Chronological Age Calculator',
    category: 'python',
    categoryLabel: 'Python / Utility',
    shortDescription: 'Python utility computing exact age breakdown in years, months, and days from any calendar date of birth.',
    fullDescription: 'A Python date-handling algorithm that processes birthdates against current system dates, accounting for varying calendar month day counts, leap years, and edge date cases to output an exact chronological lifespan breakdown.',
    technologies: ['Python', 'datetime module', 'Algorithms'],
    githubUrl: 'https://github.com/Rudra0075-ms/age_calculator',
    liveUrl: null,
    status: 'completed',
    highlights: 'Leap year aware and precision date-delta computation',
    features: [
      'Computes age in exact years, months, and days',
      'Leap year and month-end date validation logic',
      'Interactive command-line prompt with input format validation',
      'Instantaneous output rendering'
    ],
    statsOrConcepts: [
      { label: 'Core Module', value: 'datetime' },
      { label: 'Precision', value: 'Days, Months, Years' }
    ]
  },
  {
    id: 'analog-watch',
    name: 'Real-Time IST Analog Watch',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription: 'Dynamic analog watch displaying Indian Standard Time (IST) with synchronized hour, minute, and second hands.',
    fullDescription: 'A clean front-end clock built with CSS rotational transforms synchronized through JavaScript interval timers. Calculates exact rotational degrees per second for fluid, continuous clock dial movement.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'CSS Transforms'],
    githubUrl: 'https://github.com/Rudra0075-ms/analog_watch',
    liveUrl: 'https://rudra0075-ms.github.io/analog_watch/',
    status: 'completed',
    highlights: 'Continuous mathematical degree rotation for IST time',
    features: [
      'Real-time Indian Standard Time (IST) synchronization',
      'Trigonometric rotational angles applied to hour, minute, and second indicators',
      'Clean dial aesthetics with high legibility numbers and ticks',
      'Zero external dependencies'
    ],
    statsOrConcepts: [
      { label: 'Timezone', value: 'Indian Standard Time' },
      { label: 'Animation', value: 'CSS Rotations' }
    ]
  },
  {
    id: 'memory-card-game',
    name: 'Interactive Memory Card Game',
    category: 'web',
    categoryLabel: 'Web Development / Game',
    shortDescription: 'Card matching memory game featuring multiple difficulty levels, move tracking, and win-state animations.',
    fullDescription: 'An engaging web application demonstrating state management, array shuffling algorithms (Fisher-Yates), timer intervals, and CSS 3D card-flip animations. Players test their visual memory by matching hidden symbol pairs.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Game Logic'],
    githubUrl: 'https://github.com/Rudra0075-ms/memory_card_game',
    liveUrl: 'https://rudra0075-ms.github.io/memory_card_game/',
    status: 'completed',
    highlights: 'State machine for card flips, moves counter & win detection',
    features: [
      'Fisher-Yates array shuffling for fresh board layouts every round',
      'Smooth 3D flip card animations with match validation',
      'Real-time moves counter, timer, and score calculation',
      'Interactive victory screen with replay option'
    ],
    statsOrConcepts: [
      { label: 'Logic', value: 'Array Shuffling & Matching' },
      { label: 'Animation', value: '3D CSS Flip' }
    ]
  },
  {
    id: 'to-do-list',
    name: 'Task Flow To-Do List Web App',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription: 'Productivity application for organizing, prioritizing, and tracking daily task completion.',
    fullDescription: 'A clean task management tool allowing users to quickly capture action items, mark tasks as completed, delete finished chores, and filter active vs completed tasks with an intuitive interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
    githubUrl: 'https://github.com/Rudra0075-ms/to-do-list___web',
    liveUrl: 'https://rudra0075-ms.github.io/to-do-list___web/',
    status: 'completed',
    highlights: 'Interactive task lifecycle management',
    features: [
      'Add, toggle, filter, and remove task items effortlessly',
      'Immediate visual feedback on completed states',
      'Responsive design with optimized mobile interaction',
      'Lightweight vanilla JavaScript architecture'
    ],
    statsOrConcepts: [
      { label: 'Type', value: 'Productivity Tool' },
      { label: 'Persistence', value: 'Client State' }
    ]
  },
  {
    id: 'pounds-to-kg',
    name: 'Pounds to Kilogram Conversion Program',
    category: 'python',
    categoryLabel: 'Python / Utility',
    shortDescription: 'Python precision weight calculation program converting imperial pounds (lbs) to metric kilograms (kg).',
    fullDescription: 'A focused Python calculation script providing instant, mathematically accurate weight conversion between imperial and metric systems with clean input verification.',
    technologies: ['Python', 'Mathematical Modeling'],
    githubUrl: 'https://github.com/Rudra0075-ms/pounds_to_kg_converter',
    liveUrl: null,
    status: 'completed',
    highlights: 'Precision float conversion formula (1 lb = 0.453592 kg)',
    features: [
      'Instant imperial to metric mass computation',
      'Input validation rejecting non-numerical values',
      'Clear, clean terminal output formatting'
    ],
    statsOrConcepts: [
      { label: 'Formula', value: 'lbs × 0.453592' },
      { label: 'Language', value: 'Python 3' }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'ai-ml-virtual-internship',
    title: 'AI-ML Virtual Internship Certificate',
    issuer: 'EduSkills (Supported by Google for Developers / AICTE)',
    type: 'Virtual Internship & Certification',
    description: 'Intensive internship program covering Artificial Intelligence fundamentals, Machine Learning workflows, algorithm applications, and industry practices.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'EduSkills', 'Google for Developers Ecosystem'],
    documentUrl: '/AI-ML-Virtual-Internship.pdf',
    isPdf: true,
    highlight: 'Official EduSkills AI/ML Virtual Internship completed during B.Tech studies',
    skillsLearned: [
      'Foundational Machine Learning pipelines & data preprocessing',
      'Model evaluation concepts & real-world AI applications',
      'Structured technical problem solving in AI environments'
    ]
  }
];

export const learningItems: LearningItem[] = [
  {
    topic: 'Advanced Python',
    status: 'In Progress',
    category: 'Core Language',
    description: 'Deepening proficiency in functional constructs, OOP design patterns, decorators, generators, and async programming.'
  },
  {
    topic: 'Data Structures & Algorithms (DSA)',
    status: 'In Progress',
    category: 'Computer Science',
    description: 'Strengthening algorithmic intuition, time/space complexity analysis, and problem-solving practice on Codolio.'
  },
  {
    topic: 'Agentic AI & AI Agents',
    status: 'In Progress',
    category: 'Emerging Tech',
    description: 'Architecting autonomous reasoning loops, memory structures, dynamic tool usage, and deterministic agent flows.'
  },
  {
    topic: 'LangChain & LangGraph',
    status: 'In Progress',
    category: 'AI Frameworks',
    description: 'Constructing cyclic multi-agent graphs, stateful agent networks, and prompt chain orchestration.'
  },
  {
    topic: 'Machine Learning Fundamentals',
    status: 'In Progress',
    category: 'AI / ML',
    description: 'Core concepts of supervised and unsupervised learning, regression, classification, and statistical metrics.'
  }
];

export const goals2026: GoalItem[] = [
  {
    goal: 'Master Python Programming',
    area: 'Core Technical Foundation',
    targetYear: '2026',
    description: 'Attain deep fluency across backend Python, concurrency, and library internals.'
  },
  {
    goal: 'Strengthen DSA & Problem Solving',
    area: 'Algorithmic Competence',
    targetYear: '2026',
    description: 'Consistently solve algorithmic problems and sharpen optimization techniques.'
  },
  {
    goal: 'Build Multi-Agent Systems with LangGraph',
    area: 'Agentic Engineering',
    targetYear: '2026',
    description: 'Engineer and deploy autonomous agents with real-world tool execution and stateful memory.'
  },
  {
    goal: 'Ship Real-World Applied AI Projects',
    area: 'Portfolio & Impact',
    targetYear: '2026',
    description: 'Translate conceptual knowledge into deployed, production-quality AI software solutions.'
  }
];
