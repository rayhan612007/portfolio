import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { projects } from "@/app/data/projects";
import PrintButton from "./print-button";

export const metadata = {
    title: "Resume | Md Abu Rayhan — Full-Stack Developer (MERN)",
    description:
        "Resume of Md Abu Rayhan, Full-Stack Developer (MERN): MongoDB, Express.js, React, Node.js, Next.js.",
};

const skillGroups = [
    {
        label: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "daisyUI", "ShadCN"],
    },
    {
        label: "Backend",
        items: ["Node.js", "Express.js", "MongoDB", "BetterAuth", "REST APIs", "Python"],
    },
    {
        label: "Tools & Platform",
        items: ["Git & GitHub", "Vercel", "Figma"],
    },
];

const contact = [
    { icon: Mail, text: "mdaburayhan612007@gmail.com", href: "mailto:mdaburayhan612007@gmail.com" },
    { icon: Phone, text: "+880 1772-800576", href: "tel:+8801772800576" },
    { icon: FaGithub, text: "github.com/rayhan612007", href: "https://github.com/rayhan612007" },
    { icon: FaLinkedin, text: "linkedin.com/in/rayhan612007", href: "https://www.linkedin.com/in/rayhan612007/" },
    { icon: MapPin, text: "Bogura, Bangladesh" },
    { icon: Globe, text: "rayhan.dev" },
];

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-slate-100 py-10 print:bg-white print:py-0">
            <PrintButton />

            <article className="mx-auto max-w-3xl bg-white text-slate-900 shadow-xl print:shadow-none">
                <div className="p-8 sm:p-12 space-y-8">
                    {/* Header */}
                    <header className="space-y-3 border-b-2 border-blue-600 pb-6">
                        <h1 className="text-4xl font-black tracking-tight">Md Abu Rayhan</h1>
                        <p className="text-lg font-semibold text-blue-700">
                            Full-Stack Developer (MERN)
                        </p>
                        <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-600">
                            {contact.map((c) => {
                                const Icon = c.icon;
                                const item = (
                                    <span className="inline-flex items-center gap-1.5">
                                        <Icon className="h-3.5 w-3.5" />
                                        {c.text}
                                    </span>
                                );
                                return (
                                    <li key={c.text}>
                                        {c.href ? (
                                            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-blue-700 hover:underline print:no-underline">
                                                {item}
                                            </a>
                                        ) : (
                                            item
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </header>

                    {/* Summary */}
                    <section className="space-y-2">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700">Summary</h2>
                        <p className="text-sm leading-relaxed text-slate-700">
                            Full-stack developer specializing in the MERN stack — MongoDB, Express.js, React, and
                            Node.js. I design and ship complete web applications: React and Next.js frontends with
                            Tailwind CSS and ShadCN, REST APIs built with Express.js and Node.js, and MongoDB data
                            layers secured with BetterAuth. Diploma in Computer Science &amp; Technology from Faridpur
                            Polytechnic Institute. Focused on speed, reliability, usability, and details that make the
                            experience feel effortless.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="space-y-3">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700">Skills</h2>
                        <div className="space-y-2">
                            {skillGroups.map((group) => (
                                <div key={group.label} className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
                                    <span className="font-semibold text-slate-900 w-32 shrink-0">{group.label}</span>
                                    <span className="text-slate-700">{group.items.join(" · ")}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="space-y-4">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700">Projects</h2>
                        {projects.map((project) => (
                            <div key={project.id} className="space-y-1">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="font-bold">{project.title}</h3>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs text-blue-700 hover:underline print:text-xs"
                                    >
                                        {project.liveLink}
                                    </a>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-700">{project.shortDescription}</p>
                                <p className="text-xs text-slate-500">Tech: {project.tags.join(", ")}</p>
                            </div>
                        ))}
                    </section>

                    {/* Education */}
                    <section className="space-y-2">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700">Education</h2>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="font-bold">Diploma in Computer Science &amp; Technology</h3>
                            <span className="text-xs text-slate-500">Faridpur Polytechnic Institute</span>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
}
