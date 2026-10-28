'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    RiReactjsLine,
    RiNextjsFill,
    RiTailwindCssFill,
    RiNodejsLine,
    RiGitMergeLine
} from 'react-icons/ri';
import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoPython,
    BiLogoPostgresql,
    BiLogoMongodb,
    BiLogoFigma
} from 'react-icons/bi';
import {
    SiDaisyui,
    SiExpress,
    SiVercel,
    SiReactquery,
    SiRedux,
    SiAxios,
    SiZod
} from 'react-icons/si';
import { FaShieldAlt } from 'react-icons/fa';

const skills = [
    // Frontend
    { name: 'Next.js', category: 'Frontend', icon: <RiNextjsFill className="w-9 h-9" />, brandColor: 'text-foreground' },
    { name: 'React', category: 'Frontend', icon: <RiReactjsLine className="w-9 h-9" />, brandColor: 'text-[#61DAFB]' },
    { name: 'TypeScript', category: 'Frontend', icon: <BiLogoTypescript className="w-9 h-9" />, brandColor: 'text-[#3178C6]' },
    { name: 'JavaScript', category: 'Frontend', icon: <BiLogoJavascript className="w-9 h-9" />, brandColor: 'text-[#F7DF1E]' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: <RiTailwindCssFill className="w-9 h-9" />, brandColor: 'text-[#06B6D4]' },
    { name: 'daisyUI', category: 'Frontend', icon: <SiDaisyui className="w-9 h-9" />, brandColor: 'text-[#5A0EFE]' },

    // Backend
    { name: 'Node.js', category: 'Backend', icon: <RiNodejsLine className="w-9 h-9" />, brandColor: 'text-[#339933]' },
    { name: 'Express.js', category: 'Backend', icon: <SiExpress className="w-8 h-8" />, brandColor: 'text-foreground' },
    { name: 'BetterAuth', category: 'Backend', icon: <FaShieldAlt className="w-7 h-7" />, brandColor: 'text-purple-500' },
    { name: 'MongoDB', category: 'Backend', icon: <BiLogoMongodb className="w-9 h-9" />, brandColor: 'text-[#47A248]' },
    { name: 'Python', category: 'Backend', icon: <BiLogoPython className="w-9 h-9" />, brandColor: 'text-[#3776AB]' },

    // Tools
    { name: 'Git & GitHub', category: 'Tools', icon: <RiGitMergeLine className="w-9 h-9" />, brandColor: 'text-[#F05032]' },
    { name: 'Vercel', category: 'Tools', icon: <SiVercel className="w-7 h-7" />, brandColor: 'text-foreground' },
    { name: 'Figma', category: 'Tools', icon: <BiLogoFigma className="w-9 h-9" />, brandColor: 'text-[#F24E1E]' },

];

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredSkills = activeCategory === 'All'
        ? skills
        : skills.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="space-y-3 text-center">
                    <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1.5 text-xs uppercase tracking-widest font-semibold rounded-full bg-primary/5">
                        Skills & Stack
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Technologies I Build With
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-center mx-auto text-sm sm:text-base leading-relaxed">
                        The tools, languages, and packages I reach for in production across the front end, back end, and workflow.
                    </p>
                </div>

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-muted/40 backdrop-blur-md rounded-2xl border border-border/60 shadow-sm w-fit mx-auto">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            variant={activeCategory === category ? 'default' : 'ghost'}
                            size="sm"
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? 'shadow-md scale-[1.02]'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                                }`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Grid Display */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filteredSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group relative flex flex-col items-center justify-center p-5 h-32 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer overflow-hidden"
                        >
                            {/* Subtle background glow effect on hover */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Icon */}
                            <div className={`mb-3 transition-transform duration-300 group-hover:scale-110 relative z-10 ${skill.brandColor}`}>
                                {skill.icon}
                            </div>

                            {/* Name */}
                            <span className="text-xs sm:text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors text-center relative z-10">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}