// Shared project data for the home grid and the /resume page.
// Plain module (no "use client") so both server and client components can import it.

export const projects = [
    {
        id: "bazar-dor",
        title: "Bazar Dor (বাজার দর)",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
        shortDescription: "Real-time web application for tracking essential commodity prices across regional markets in Bangladesh.",
        tags: ["Next.js", "Tailwind CSS", "daisyUI", "HeroUI", "BetterAuth"],
        liveLink: "https://amar-bazar-dor-website.vercel.app/",
        clientGithub: "https://github.com/rayhan612007/amar_bazar_dor_website",
    },
    {
        id: "fitlog",
        title: "FitLog - Workout & Fitness Tracker",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
        shortDescription: "A responsive fitness and workout tracking web application to log daily routines and track training progress.",
        tags: ["Next.js", "React", "Tailwind CSS", "DaisyUI"],
        liveLink: "https://fitlog-six-alpha.vercel.app",
        clientGithub: "https://github.com/rayhan612007/fitlog",
    },
    {
        id: "devstack",
        title: "DevStack - Interactive Technology Stack Builder",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        shortDescription: "An interactive technology stack builder web application to assemble and preview modern development stacks.",
        tags: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
        liveLink: "https://devstack-eta.vercel.app",
        clientGithub: "https://github.com/rayhan612007/DevStack",
    }
];
