"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { projects } from "@/app/data/projects";
import Reveal from "@/components/reveal";

export default function ProjectsSection() {
    const handleSpotlight = (e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mouse-x", `${e.clientX - r.left}px`);
        el.style.setProperty("--mouse-y", `${e.clientY - r.top}px`);
    };

    return (
        <section id="projects" className="py-20 md:py-24 bg-muted/20 border-y border-border/40">
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
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, i) => (
                        <Reveal key={project.id} delay={i * 100} className="h-full">
                        <Card
                            onMouseMove={handleSpotlight}
                            className="spotlight overflow-hidden flex flex-col h-full border-border/60 bg-card hover:shadow-xl hover:border-primary/40 transition-all duration-300 group"
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
                                        <Badge key={tag} variant="outline" className="text-xs font-medium rounded-md px-2.5 py-0.5">
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
                                    {/* Live Demo — same style as hero "View Projects" */}
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-border bg-background/60 px-4 text-xs font-semibold text-foreground outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
                                    >
                                        Live Demo <ExternalLink className="h-3.5 w-3.5" />
                                    </a>

                                    {/* Code — same style as hero "View Projects" */}
                                    <a
                                        href={project.clientGithub}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-border bg-background/60 px-4 text-xs font-semibold text-foreground outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
                                    >
                                        Code <Github className="h-3.5 w-3.5" />
                                    </a>
                                </div>

                                {/* Full Details — same style as hero "Download Resume" */}
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-primary to-accent px-4 text-sm font-semibold text-white shadow-md shadow-primary/25 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/35 focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
                                >
                                    <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full" />
                                    View Case Study & Details
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </Link>
                            </CardFooter>
                        </Card>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}