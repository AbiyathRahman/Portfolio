import { useEffect, useMemo, useState } from 'react';

const fallbackProfile = {
  name: 'Abiyath Rahman',
  headline: 'Software Engineering Student & Backend Developer',
  subheadline:
    'I ship resilient backend services, data pipelines, and React frontends that showcase the results.',
  intro:
    'Currently pursuing a B.S. in Computer Science at Weber State University, I gravitate toward backend-heavy projects: modeling databases, building REST APIs in Java/Python/Node, and hardening deployments with Docker and AWS. I still love polishing the UI layer in React, but my goal is always to align clean architecture with the end-user experience.',
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
  experience: [
    {
      company: 'Weber State University Housing',
      role: 'Resident Assistant',
      period: 'Aug 2022 - Present',
      summary:
        'Lead a 200+ resident community by coordinating programs, triaging emergencies, and documenting incidents. Partner with 15 RAs to streamline on-call communication (20% faster response) and resolve 10+ personal or academic challenges each semester using conflict-resolution frameworks.',
    },
    {
      company: 'Freelance',
      role: 'Software Developer',
      period: '2023 - Present',
      summary:
        'Owns full-stack builds from API design through React delivery: Firebase-backed prototypes, FastAPI services, and Tailwind-first interfaces deployed to Render/Vercel.',
    },
  ],
  links: {
    github: 'https://github.com/AbiyathRahman',
    linkedin: 'https://www.linkedin.com/in/abiyath-rahman-94b4662b0',
    resume: '#',
  },
};

const fallbackProjects = [
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
      'An AI-assisted dashboard that summarizes Google Calendar workload using Spring Boot, React, and AWS Bedrock.',
    stack: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS Bedrock', 'Tailwind'],
    role: 'Backend + AI workflow engineer.',
    problem:
      'Busy students and professionals needed proactive insights about their calendars instead of reactive reminders.',
    solution:
      'Implemented Google OAuth, persistent token storage, and Bedrock-powered prompt pipelines that convert calendar events into focus recommendations.',
    outcome:
      'Delivers weekly summaries, overload alerts, and action items through a responsive bento dashboard deployed on Render (API) and Vercel (UI).',
    highlights: [
      'Containerized backend with Docker and automated Render deploys.',
      'Parsed Claude responses into structured insight cards with persistent client state.',
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

const defaultState = {
  profile: fallbackProfile,
  projects: fallbackProjects,
  loading: true,
  error: null,
  source: 'fallback',
};

const LINKS_ENDPOINT =
  'https://portfolio-aab7f-default-rtdb.firebaseio.com/Links.json';

function ensureHttps(url) {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url.replace(/^\/+/, '')}`;
}

function mergeProjectLinks(projects, payload) {
  return projects.map((project) => {
    if (project.id === 'weather-app' && payload?.weatherApp) {
      return {
        ...project,
        links: {
          ...project.links,
          demo: ensureHttps(payload.weatherApp),
        },
      };
    }
    if (project.id === 'food-ordering-app' && payload?.foodOrderingApp) {
      return {
        ...project,
        links: {
          ...project.links,
          demo: ensureHttps(payload.foodOrderingApp),
        },
      };
    }
    if (project.id === 'recipe-app' && payload?.recipeApp) {
      return {
        ...project,
        links: {
          ...project.links,
          demo: ensureHttps(payload.recipeApp),
        },
      };
    }
    if (project.id === 'appointment-system' && payload?.appointmentSystem) {
      return {
        ...project,
        links: {
          ...project.links,
          repo: ensureHttps(payload.appointmentSystem),
        },
      };
    }
    if (project.id === 'insightpulse' && payload?.aiTaskManager) {
      return {
        ...project,
        links: {
          ...project.links,
          repo: ensureHttps(payload.aiTaskManager),
        },
      };
    }
    if (project.id === 'carebridge-lite' && payload?.carebridge) {
      return {
        ...project,
        links: {
          ...project.links,
          repo: ensureHttps(payload.carebridge),
        },
      };
    }
    return project;
  });
}

export function usePortfolioDataSource() {
  const [{ profile, projects, loading, error, source }, setState] =
    useState(defaultState);

  useEffect(() => {
    let active = true;

    async function loadLinks() {
      try {
        const response = await fetch(LINKS_ENDPOINT);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        if (!active) return;

        const profileLinks = {
          ...fallbackProfile.links,
          github: ensureHttps(payload?.github) ?? fallbackProfile.links.github,
        };

        setState({
          profile: { ...fallbackProfile, links: profileLinks },
          projects: mergeProjectLinks(fallbackProjects, payload),
          loading: false,
          error: null,
          source: 'remote',
        });
      } catch (err) {
        console.error('Error loading portfolio links', err);
        if (!active) return;
        setState({
          profile: fallbackProfile,
          projects: fallbackProjects,
          loading: false,
          error:
            err instanceof Error ? err.message : 'Unexpected error loading data',
          source: 'fallback',
        });
      }
    }

    loadLinks();
    return () => {
      active = false;
    };
  }, []);

  const featuredProject = useMemo(() => projects[0], [projects]);

  return {
    profile,
    projects,
    featuredProject,
    loading,
    error,
    source,
  };
}

export function getProjectById(projects, projectId) {
  return projects.find(
    (project) => project.id === projectId || project.slug === projectId,
  );
}
