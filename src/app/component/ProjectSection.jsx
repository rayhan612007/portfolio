"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

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

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-muted/20 border-y border-border/40">
            <div className="container mx-auto px-4 max-w-6xl space-y-12">

                {/* Header */}
                <div className="text-center space-y-3">
                    <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1.5 text-xs uppercase tracking-widest font-semibold rounded-full bg-primary/5">
                        Featured Works
                    </Badge>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Projects I Have Built
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Explore some of my recent web development applications showcasing clean architecture, modern tech stacks, and live deployments.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden flex flex-col h-full border-border/60 bg-card hover:shadow-xl hover:border-primary/40 transition-all duration-300 group"
                        >
                            {/* Project Thumbnail with Hover Zoom */}
                            <div className="relative h-52 w-full bg-muted overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <CardHeader className="pb-3 space-y-3">
                                <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs font-medium rounded-md px-2.5 py-0.5">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {project.shortDescription}
                                </p>
                            </CardContent>

                            <CardFooter className="pt-3 pb-5 flex flex-col gap-2.5 border-t border-border/40">
                                <div className="grid grid-cols-2 gap-2 w-full">
                                    {/* Live Demo Button */}
                                    <Button variant="outline" size="sm" className="rounded-xl w-full border-border/80 hover:bg-muted">
                                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 text-xs">
                                            <span>Live Demo</span> <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>

                                    {/* GitHub Client Button */}
                                    <Button variant="outline" size="sm" className="rounded-xl w-full border-border/80 hover:bg-black/50 dark:hover:bg-white/50">
                                        <a href={project.clientGithub} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 text-xs">
                                            <span>Code</span> <Github className="h-3.5 w-3.5" />
                                        </a>
                                    </Button>
                                </div>

                                {/* Full Details Page Button */}
                                <Button size="sm" className="rounded-xl w-full gap-1.5 shadow-sm">
                                    <Link href={`/projects/${project.id}`} className="flex items-center justify-center gap-1.5 text-md font-medium">
                                        <span>View Case Study & Details</span> <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}