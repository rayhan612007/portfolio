"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ShieldAlert, Rocket, CheckCircle2, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGithub as Github } from "react-icons/fa";

const projectsDetailsData = {
    "bazar-dor": {
        title: "Bazar Dor (বাজার দর)",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
        description: "Bazar Dor is a real-time market price monitoring system tailored for regional markets across Bangladesh. It lets consumers and merchants check and track prices for essential commodities.",
        techStack: ["Next.js 14 App Router", "React", "TypeScript", "Tailwind CSS", "daisyUI", "HeroUI", "BetterAuth"],
        liveLink: "https://amar-bazar-dor-website.vercel.app/",
        clientGithub: "https://github.com/rayhan612007/amar_bazar_dor_website",
        challenges: [
            "Optimizing real-time search queries over regional pricing datasets without lag.",
            "Implementing resilient client-side authentication states across dynamic server components.",
        ],
        futurePlans: [
            "Add interactive 30-day commodity price trajectory charts.",
            "Integrate automated regional district pricing alert notifications.",
        ],
    },
    "fitlog": {
        title: "FitLog - Workout & Fitness Tracker",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
        description: "A responsive fitness and workout tracking web application to log daily routines, monitor exercises, and seamlessly track personal training progress.",
        techStack: ["Next.js", "React", "Tailwind CSS", "DaisyUI"],
        liveLink: "https://fitlog-six-alpha.vercel.app",
        clientGithub: "https://github.com/rayhan612007/fitlog",
        challenges: [
            "Managing persistent local state for custom workout routines and sets.",
            "Optimizing responsive layouts for seamless tracking across mobile and desktop viewports.",
        ],
        futurePlans: [
            "Add graphical analytics for tracking weekly workout volume and progress.",
            "Implement user authentication to sync custom training routines across devices.",
        ],
    },
    "devstack": {
        title: "DevStack Tech Hub",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        description: "DevStack is an interactive technology stack builder web application created to assemble, curate, and preview modern development stacks and UI tools.",
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "DaisyUI"],
        liveLink: "https://devstack-eta.vercel.app/",
        clientGithub: "https://github.com/rayhan612007/DevStack",
        challenges: [
            "Managing instantaneous state updates across client bookmark collections and tech selections.",
            "Ensuring zero layout shifts during fast dynamic component filtering.",
        ],
        futurePlans: [
            "Support community tech stack sharing and upvoting features.",
            "Allow one-click export of custom stack lists into formatted Markdown README files.",
        ],
    },
};

export default function ProjectDetailsPage({ params }) {
    const resolvedParams = use(params);
    const project = projectsDetailsData[resolvedParams.id];

    if (!project) {
        return (
            <div className="container mx-auto px-4 py-32 text-center space-y-4">
                <h1 className="text-3xl font-bold">Project Details Not Found</h1>
                <Link
                    href="/#projects"
                    className="group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-primary to-accent px-6 text-sm font-semibold text-white shadow-md shadow-primary/25 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/35 focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
                >
                    <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    Return to Projects Grid
                </Link>
            </div>
        );
    }

    return (
        <div className="py-20 md:py-24 bg-background min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">

                {/* Navigation Back */}
                <Link
                    href="/#projects"
                    className="inline-flex h-8 w-fit items-center gap-1.5 rounded-full px-3 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to Projects
                </Link>

                {/* Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-black">{project.title}</h1>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {project.techStack.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs font-semibold">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        {/* Live Demo — same style as hero "Download Resume" */}
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative inline-flex h-9 items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-primary to-accent px-5 text-sm font-semibold text-white shadow-md shadow-primary/25 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/35 focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
                        >
                            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full" />
                            <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>

                        {/* GitHub Client — same style as hero "View Projects" */}
                        <a
                            href={project.clientGithub}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-border bg-background/60 px-5 text-sm font-semibold text-foreground outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
                        >
                            <Github className="h-4 w-4" /> GitHub Client
                        </a>
                    </div>
                </div>

                {/* Image Card */}
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-border/60 shadow-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Project Description */}
                <Card className="border border-border/60 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Layers className="h-5 w-5 text-primary" /> Project Overview & Scope
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            {project.description}
                        </p>
                    </CardContent>
                </Card>

                {/* Technical Analysis Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                    <Card className="border border-border/60 shadow-sm">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <ShieldAlert className="h-5 w-5 text-secondary" />
                            <CardTitle className="text-base font-bold">Challenges & Solutions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {project.challenges.map((challenge, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-border/60 shadow-sm">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <Rocket className="h-5 w-5 text-accent" />
                            <CardTitle className="text-base font-bold">Future Enhancements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {project.futurePlans.map((plan, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span>{plan}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                </div>

            </div>
        </div>
    );
}