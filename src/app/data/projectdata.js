export const projectsDetailsData = {
  "bazar-dor": {
    id: "bazar-dor",
    title: "Bazar Dor (বাজার দর)",
    subtitle: "Real-Time Essential Commodity Price Tracker",
    category: "Full-Stack Web App",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    description: "Bazar Dor is a real-time market price monitoring system tailored for regional markets across Bangladesh. It enables consumers and local merchants to transparently track, compare, and monitor essential commodity prices.",
    features: [
      "Dynamic search and real-time commodity filtering",
      "BetterAuth authentication with role-aware access controls",
      "Mobile-first responsive layout with fast render cycles"
    ],
    techStack: ["Next.js 14 App Router", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "BetterAuth"],
    liveLink: "https://amar-bazar-dor-website.vercel.app/",
    clientGithub: "https://github.com/mdaburayhan/bazar-dor-client",
    challenges: [
      "Optimizing real-time search queries over regional pricing datasets without UI lag.",
      "Implementing resilient client-side authentication states across dynamic server components."
    ],
    futurePlans: [
      "Add interactive 30-day commodity price trajectory charts.",
      "Integrate automated regional district pricing alert notifications."
    ]
  },
  "fitlog": {
    id: "fitlog",
    title: "FitLog",
    subtitle: "Workout & Daily Fitness Progress Tracker",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    description: "A sleek, distraction-free workout logger designed to help users structure training sessions, record workout sets, and track strength progression over time.",
    features: [
      "Custom routine logging with set, rep, and weight counters",
      "Persistent state management for seamless progress retention",
      "Interactive toast notifications for activity feedback"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "Lucide Icons"],
    liveLink: "https://fitlog-six-alpha.vercel.app",
    clientGithub: "https://github.com/mdaburayhan/fitlog",
    challenges: [
      "Managing persistent local state for custom workout routines and sets.",
      "Optimizing responsive layouts for seamless tracking across mobile and desktop viewports."
    ],
    futurePlans: [
      "Add graphical analytics for tracking weekly workout volume and progress.",
      "Implement user authentication to sync custom training routines across devices."
    ]
  },
  "devstack": {
    id: "devstack",
    title: "DevStack Tech Hub",
    subtitle: "Interactive Tech Stack & Utility Builder",
    category: "Developer Tool",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    description: "DevStack is a curated platform that enables frontend developers to discover, assemble, and preview modern tech stacks, component libraries, and essential utility tools.",
    features: [
      "Instant multi-category technology filter engine",
      "Interactive bookmarking and stack configuration collections",
      "Clean UI component showcase with direct developer links"
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://devstack-eta.vercel.app/",
    clientGithub: "https://github.com/mdaburayhan/devstack",
    challenges: [
      "Managing instantaneous state updates across client bookmark collections and tech selections.",
      "Ensuring zero layout shifts during fast dynamic component filtering."
    ],
    futurePlans: [
      "Support community tech stack sharing and upvoting features.",
      "Allow one-click export of custom stack lists into formatted Markdown README files."
    ]
  }
};