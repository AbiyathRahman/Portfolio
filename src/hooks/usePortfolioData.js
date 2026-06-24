import { useMemo } from 'react';

const fallbackProfile = {
  name: 'Abiyath Rahman',
  headline: 'Full-Stack Software Engineer | Backend & Distributed Systems',
  subheadline:
    'I build scalable, production-ready applications with Node.js, TypeScript, Redis, MongoDB, and Docker, with a focus on backend architecture and distributed systems.',
  intro:
    'I\'m a Computer Science student at Weber State University (graduating August 2026), specializing in backend architecture, distributed systems, and cloud deployment. I build production-ready applications using Node.js, TypeScript, Redis, MongoDB, and Docker, with experience designing real-time systems with WebSocket-based synchronization, fault-tolerant job queues, and AI-integrated pipelines.',
  skills: [
    'Java • Spring Boot • JUnit',
    'Python • Flask • FastAPI',
    'C/C++ • C#',
    'JavaScript • Node.js • React',
    'SQL (Postgres/MySQL) • MongoDB/Mongoose',
    'Tailwind CSS • Material UI',
    'AWS • Docker • CI/CD pipelines',
    'Git • Agile/Scrum collaboration',
    'pandas • NumPy • Matplotlib',
    'Auth & security (JWT, Swagger)',
  ],
  education: [
    {
      school: 'Weber State University',
      program: 'B.S. Computer Science',
      year: '2022 - Present',
    },
  ],
  coursework: [
    'Formal Languages and Automata Theory',
    'DevOps and Software Delivery',
    'Discrete Mathematics',
    'Data Structures and Algorithms',
    'Database Systems',
    'Software Engineering',
    'Software Testing',
    'Capstone Project',
    'Web Development',
    'Scripting Languages',
  ],
  experience: [
    {
      company: 'Weber State University Housing',
      role: 'Resident Assistant',
      period: 'Aug 2022 - Present',
      summary:
        'Collaborate with 15 Resident Assistants to improve team response time by 20%, streamlining communication and operations. Resolve 90% of incidents addressing 10+ personal and academic challenges per semester using conflict resolution strategies. Manage a community of 200+ students, increasing resident satisfaction by 15% through inclusive programming.',
    },
  ],
  links: {
    github: 'https://github.com/AbiyathRahman',
    linkedin: 'https://www.linkedin.com/in/abiyath-rahman-94b4662b0',
    resume: '/resume/AbiyathRahman-Resume.pdf',
  },
};

const fallbackProjects = [
  {
    id: 'realtime-code-editor',
    title: 'Real-Time Collaborative Code Editor',
    summary:
      'A multi-user code editor with conflict-free real-time synchronization, built on Socket.io and Operational Transformation.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'React'],
    role: 'Full-stack architect: real-time sync, persistence layer, editor integration.',
    problem:
      'Multiple people editing the same document at once need their changes merged instantly and consistently, without overwriting each other or drifting out of sync as more users join.',
    solution:
      'Architected a WebSocket-based synchronization system using Socket.io with Operational Transformation for conflict-free text merges, plus Redis Pub/Sub for distributed presence and cursor tracking so the system scales horizontally across server instances without session affinity. Document state persists to MongoDB as incremental operation logs, enabling full revision history and time-travel debugging.',
    outcome:
      'Supports 10+ simultaneous editors with sub-100ms edit propagation latency under 50 concurrent connections in load testing, integrating Monaco Editor with syntax highlighting for 15+ languages.',
    highlights: [
      'Conflict-free merging for 10+ simultaneous users via Operational Transformation.',
      'Redis Pub/Sub powers distributed presence and cursor sync across multiple server instances.',
      'MongoDB-backed operation logs support full revision history and time-travel debugging.',
    ],
    links: {
      repo: 'https://github.com/AbiyathRahman/Real-Time-Collaborative-Code-Editor',
      demo: 'https://real-time-collaborative-code-editor-azure.vercel.app',
    },
  },
  {
    id: 'distributed-task-queue',
    title: 'Distributed Task Queue System',
    summary:
      'A fault-tolerant distributed job processing system with priority queues, retry logic, and a live monitoring dashboard.',
    stack: ['Node.js', 'MongoDB', 'Redis', 'Docker', 'React'],
    role: 'Backend architect: job processing, fault tolerance, containerized deployment.',
    problem:
      'Background job systems need to survive failures gracefully, prioritize urgent work, and give visibility into queue health, without losing jobs or needing manual intervention when workers crash.',
    solution:
      'Architected a distributed job processing system using Redis priority queues with MongoDB-backed state via Mongoose, supporting concurrent worker pools. Implemented a dead-letter collection and exponential backoff retry logic (2s/4s/8s) to handle failures gracefully, and built a React dashboard polling the REST API for job monitoring and queue depth visualization.',
    outcome:
      'Processes 500+ simulated jobs/minute across concurrent worker pools, reducing unhandled job failure rate by 35% against 1,000-job batches. Fully containerized with Docker Compose orchestrating the API server, 3 worker replicas, Redis, and MongoDB.',
    highlights: [
      'Redis priority queues with MongoDB-backed state handle 500+ jobs/minute.',
      'Dead-letter queue and exponential backoff cut unhandled failure rate by 35%.',
      'Docker Compose orchestrates API server, 3 worker replicas, Redis, and MongoDB.',
    ],
    links: {
      repo: 'https://github.com/AbiyathRahman/Distributed-Task-Queue',
      demo: 'https://distributed-task-queue-vgzo.vercel.app/',
    },
  },
  {
    id: 'weather-app',
    title: 'Realtime Weather Tracker',
    summary:
      'A Vite + React interface that consumes the OpenWeatherMap API, normalizes responses, and visualizes hourly + daily forecasts.',
    stack: ['React', 'Vite', 'OpenWeather API', 'Tailwind CSS'],
    role: 'API orchestration, caching strategy, responsive UI.',
    problem:
      'Weather APIs return verbose payloads that are hard to parse quickly. I wanted a fast, mobile-friendly dashboard that surfaces the essentials without rate-limit surprises.',
    solution:
      'Built a reusable weather service layer that memoizes API calls, converts units, and exposes the data through React context hooks for any widget to consume.',
    outcome:
      'Users can toggle between saved locations and geolocation with sub-second updates while staying under API quotas.',
    highlights: [
      'Combines browser geolocation with manual search, surfacing user-friendly errors for throttled or invalid requests.',
      'Wraps fetch logic inside a reusable weather service hook so additional widgets can share memoized results.',
    ],
    links: {
      repo: 'https://github.com/AbiyathRahman/weather-app',
      demo: 'https://deft-faloodeh-13ce88.netlify.app/',
    },
  },
  {
    id: 'food-ordering-app',
    title: 'Food Ordering Platform',
    summary:
      'A React ordering flow with menu browsing, cart state, and Firebase persistence for submitted orders.',
    stack: ['React', 'Context API', 'Firebase Realtime DB', 'Material UI'],
    role: 'State management, API integration, user flows.',
    problem:
      'Local restaurants needed a lightweight ordering portal without investing in heavy SaaS platforms.',
    solution:
      'Modeled the menu + pricing data in Firebase, then created a React experience with optimistic cart updates, checkout validation, and admin-friendly order storage.',
    outcome:
      'Completed orders stream directly to Firebase for fulfillment, while customers see real-time status updates and email confirmations.',
    highlights: [
      'Implements optimistic cart updates with local storage hydration for repeat visitors.',
      'Persists checkout requests to Firebase via fetch-based services with retry logic and status messaging.',
      'Provides a dedicated case-study view that dives into architecture, data model, and operational lessons.',
    ],
    links: {
      repo: 'https://github.com/AbiyathRahman/food-ordering-app',
      demo: 'https://delicate-rugelach-f35cc1.netlify.app/',
    },
  },
  {
    id: 'recipe-app',
    title: 'Smart Recipe Library',
    summary:
      'A Firebase-backed recipe list with tagging, search, and favorite tracking built in React.',
    stack: ['React', 'Firebase', 'FastAPI helpers'],
    role: 'Data modeling, API glue code, and UI polish.',
    problem:
      'Managing dozens of personal recipes in documents or screenshots made it impossible to search by ingredient or nutrition goals.',
    solution:
      'Designed a structured Firestore schema and React interface that supports filtering, tagging, nutrition callouts, and cooking timers.',
    outcome:
      'Saved 30+ recipes with instant search and cross-device syncing; friends can fork the database for their own collections.',
    highlights: [
      'Syncs recipe metadata from Firebase and caches the payload for snappy navigation.',
      'Adds nutrition callouts and timers so each step stays actionable mid-cook.',
    ],
    links: {
      repo: 'https://github.com/AbiyathRahman/recipe-app',
      demo: 'https://luxury-chaja-fd7e18.netlify.app/',
    },
  },
  {
    id: 'appointment-system',
    title: 'Healthcare Appointment Management System',
    summary:
      'Spring Boot + React platform that secures patient onboarding, profile management, and scheduling workflows.',
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Material UI'],
    role: 'Full-stack lead across backend architecture and UI implementation.',
    problem:
      'Clinics struggled to keep patient data in sync across spreadsheets and email threads, creating scheduling errors and privacy risks.',
    solution:
      'Designed a role-based system with JWT auth, patient profile CRUD, emergency contact tracking, and responsive Material UI components backed by PostgreSQL.',
    outcome:
      'Laid the groundwork for a HIPAA-ready system with clear separation between providers and patients while surfacing validation feedback in real time.',
    highlights: [
      'Structured Spring Boot modules for auth, profiles, and appointment workflows with integration tests.',
      'Crafted gradient-driven UI layouts with avatar components and inline validation states.',
    ],
    links: {
      repo: 'https://github.com/AbiyathRahman/appointment-system',
    },
  },
  {
    id: 'insightpulse',
    title: 'InsightPulse AI Productivity Dashboard',
    summary:
      'A full-stack AI productivity dashboard generating real-time task and calendar insights using Claude v2.1 via AWS Bedrock and the Google Calendar API.',
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS Bedrock', 'Tailwind'],
    role: 'Backend + AI workflow engineer.',
    problem:
      'Busy students and professionals needed proactive insights about their calendars instead of reactive reminders.',
    solution:
      'Implemented Google OAuth 2.0 with refresh token support and persistent user-specific token storage for seamless reauthentication. Engineered NLP prompt pipelines and response parsing to summarize calendar workload, detect overload patterns, and surface weekly focus recommendations using Claude v2.1 via AWS Bedrock.',
    outcome:
      'Delivers weekly summaries, overload alerts, and action items through a responsive bento dashboard. Backend containerized with Docker and deployed to Render; frontend hosted on Vercel with JWT auth and CORS protection.',
    highlights: [
      'Google OAuth 2.0 with refresh tokens for seamless reauthentication.',
      'NLP prompt pipelines via Claude v2.1 on AWS Bedrock detect overload patterns and surface focus recommendations.',
      'Dockerized backend on Render; Vercel frontend with JWT auth and CORS protection.',
    ],
    links: {
      repo: 'https://github.com/AbiyathRahman/AI-Task-Manager',
    },
  },
  {
    id: 'carebridge-lite',
    title: 'CareBridge Lite',
    summary:
      'Node.js + AWS Bedrock application that surfaces real-time health insights and emergency alerts for remote care teams.',
    stack: ['Node.js', 'Express', 'AWS Bedrock', 'Tailwind CSS'],
    role: 'API designer and frontend developer.',
    problem:
      'Remote caregivers lacked a simple interface to monitor vitals and receive triage recommendations without hospital-grade systems.',
    solution:
      'Built Tailwind dashboards backed by Express APIs that validate incoming vitals, call Bedrock for analysis, and push emergency alerts.',
    outcome:
      'Demonstrated a scalable telehealth prototype hosted across Render/Vercel with environment-driven configs and CORS protections.',
    highlights: [
      'Implemented middleware for payload validation and error handling.',
      'Integrated Bedrock to classify anomaly thresholds and recommend next steps.',
    ],
    links: {
      repo: 'https://github.com/AbiyathRahman/carebridge-lite',
    },
  },
];


export function usePortfolioDataSource() {
  const featuredProject = useMemo(() => fallbackProjects[0], []);

  return {
    profile: fallbackProfile,
    projects: fallbackProjects,
    featuredProject,
    loading: false,
    error: null,
    source: 'static',
  };
}

export function getProjectById(projects, projectId) {
  return projects.find(
    (project) => project.id === projectId || project.slug === projectId,
  );
}
