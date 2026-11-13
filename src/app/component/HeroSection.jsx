"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Mail, ArrowUpRight, Code, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Reveal from "@/components/reveal";

export default function HeroSection() {
    const handleGlowMove = (e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--gx", `${e.clientX - r.left - r.width / 2}px`);
        el.style.setProperty("--gy", `${e.clientY - r.top - r.height / 2}px`);
    };

    return (
        <section
            id="hero"
            onMouseMove={handleGlowMove}
            className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-linear-to-b from-primary/5 via-background to-background"
        >
            <div className="cursor-glow absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Hero Content */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available for Full-Stack Roles & Projects
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                                Building Clean, Scalable <br className="hidden sm:inline" />
                                <span className="gradient-shimmer bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                                    Web Experiences
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={200}>
                        <div className="space-y-3 text-left">
                            <div className="space-y-2">
                                <span className="inline-block px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
                                    OPEN TO WORK · FULL-STACK DEVELOPER (MERN)
                                </span>
                                <h1 className="text-2xl sm:text-2xl font-extrabold tracking-tight text-foreground">
                                    Hi, I&apos;m <span className="text-primary">Md Abu Rayhan</span>
                                </h1>
                            </div>

                            <p className="text-lg sm:text-xl font-medium text-muted-foreground">
                                A full-stack developer specializing in the MERN stack — MongoDB, Express.js, React, and Node.js — building complete, production-ready products from database schema to pixel-perfect UI.
                            </p>

                            <p className="max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
                                I design and ship full web applications: React and Next.js frontends with Tailwind CSS and ShadCN, REST APIs built with Express.js and Node.js, and MongoDB data layers secured with BetterAuth. Every project I deliver focuses on speed, reliability, usability, and the details that make the experience feel effortless.
                            </p>
                        </div>
                        </Reveal>

                        {/* Action Buttons */}
                        <Reveal delay={300}>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                            {/* Primary CTA: logo gradient pill, sheen sweep, lift on hover */}
                            <a
                                href="https://drive.google.com/file/d/19cm1pYKH0JUWtvzf6uDws8plAYE2qgIY/view"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-primary to-accent px-7 text-sm font-semibold text-white shadow-lg shadow-primary/30 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
                            >
                                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full" />
                                <Eye className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                                View Resume
                            </a>

                            {/* Secondary CTA: quiet pill that tints primary on hover */}
                            <Link
                                href="#projects"
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-7 text-sm font-semibold text-foreground backdrop-blur outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:shadow-lg hover:shadow-primary/10 focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
                            >
                                View Projects
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                        </Reveal>

                        {/* Social Links */}
                        <Reveal delay={400}>
                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">Connect:</span>
                            {[
                                { label: "GitHub", href: "https://github.com/rayhan612007", icon: FaGithub },
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/rayhan612007/", icon: FaLinkedin },
                                { label: "Email", href: "mailto:mdaburayhan612007@gmail.com", icon: Mail },

                                {
                                    label: "Facebook",
                                    href: "https://www.facebook.com/mdrayhan612007",
                                    icon: FaFacebook,
                                },
                            ].map((soc) => {
                                const IconComponent = soc.icon;
                                return (
                                    <a
                                        key={soc.label}
                                        href={soc.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={soc.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                    >
                                        <IconComponent className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                        </Reveal>
                    </div>

                    {/* Right Hero Image */}
                    <Reveal delay={250} className="lg:col-span-5 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-secondary via-primary to-accent opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />

                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-border/80 bg-card shadow-2xl">
                                <Image
                                    src="/heroimage.png"
                                    alt="Md Abu Rayhan - Full-Stack Web Developer"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-md border border-border/80 p-3 rounded-xl shadow-xl flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Code className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-foreground">Full-Stack MERN</p>
                                    <p className="text-[10px] text-muted-foreground">MongoDB · Express · React · Node</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}