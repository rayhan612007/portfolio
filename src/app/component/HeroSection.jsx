"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Mail, ArrowUpRight, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function HeroSection() {
    return (
        <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-linear-to-b from-primary/5 via-background to-background">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Hero Content */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
                            </span>
                            Available for New Projects & Roles
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                            Building Clean, Scalable <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-primary via-blue-500 to-teal-400 bg-clip-text text-transparent">
                                Web Experiences
                            </span>
                        </h1>

                        <div className="space-y-3 text-left">
                            <div className="space-y-2">
                                <span className="inline-block px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
                                    OPEN TO WORK · FRONTEND DEVELOPER
                                </span>
                                <h1 className="text-2xl sm:text-2xl font-extrabold tracking-tight text-foreground">
                                    Hi, I&apos;m <span className="text-primary">Md Abu Rayhan</span>
                                </h1>
                            </div>

                            <p className="text-lg sm:text-xl font-medium text-muted-foreground">
                                A frontend developer specializing in Next.js and React, creating fast, accessible interfaces that users enjoy and teams can maintain.
                            </p>

                            <p className="max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed">
                                I turn complex designs into clean, responsive, high-performance web applications. With Tailwind CSS, ShadCN, and HeroUI, I craft pixel-perfect interfaces, and with Express.js APIs and BetterAuth, I connect them to secure, reliable back ends. Every project I build focuses on speed, usability, and details that make the experience feel effortless.
                            </p>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                            <Button size="lg" className="relative overflow-hidden group rounded-full shadow-lg text-white dark:bg-blue-600 transition-all gap-2 px-6 border ">
                                {/* Sliding background fill layer */}
                                <span className="absolute inset-0 dark:bg-white bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>

                                <a className="relative z-10 flex gap-2 items-center text-white group-hover:text-black transition-colors duration-300">
                                    <Download className="h-4 w-4" /> Download Resume
                                </a>
                            </Button>

                            <Button variant="outline" size="lg" className="rounded-full gap-2 px-6 border-border/80 hover:bg-muted">
                                <Link href="#projects" className="flex gap-2 items-center">
                                    <span>View Projects</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Social Links */}
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
                                    <Button key={soc.label} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                                        <a href={soc.href} target="_blank" rel="noreferrer" aria-label={soc.label}>
                                            <IconComponent className="h-4 w-4" />
                                        </a>
                                    </Button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Hero Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-primary via-blue-500 to-teal-400 opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />

                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-border/80 bg-card shadow-2xl">
                                <Image
                                    src="/heroimage.png"
                                    alt="Md Abu Rayhan - Frontend Web Developer"
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
                                    <p className="text-xs font-bold text-foreground">Next.js & React</p>
                                    <p className="text-[10px] text-muted-foreground">Frontend Specialist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}