import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
    FaFacebook,
    FaLinkedinIn,
    FaXTwitter,
    FaGithub as Github,
} from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/rayhan612007",
            icon: Github,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/rayhan612007/",
            icon: FaLinkedinIn,
        },
        {
            name: "Email",
            href: "mailto:mdaburayhan612007@gmail.com",
            icon: Mail,
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/mdrayhan612007",
            icon: FaFacebook,
        },
    ];

    return (
        <footer className="border-t border-slate-200 bg-white/80 text-slate-900 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-white/10 dark:text-white">
            <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 items-center">
                    {/* Brand */}
                    <div className="space-y-3">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                        >
                            <Image
                                src="/logo.png"
                                alt="Rayhan.dev logo"
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain"
                            />

                            <span className="text-3xl font-bold tracking-tight">
                                Rayhan
                                <span className="text-blue-600 dark:text-blue-500">.dev</span>
                            </span>
                        </Link>

                        <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
                            Building modern, responsive, and user-friendly
                            web experiences. Turning ideas into real web
                            applications.
                        </p>
                    </div>

                    {/* Connect */}
                    <div className="md:justify-self-end md:w-full md:max-w-md">
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                            Connect With Me
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target={
                                            social.name === "Email"
                                                ? undefined
                                                : "_blank"
                                        }
                                        rel={
                                            social.name === "Email"
                                                ? undefined
                                                : "noopener noreferrer"
                                        }
                                        aria-label={social.name}
                                        className="flex p-2.5 items-center justify-center
                                        rounded-full border border-slate-200 bg-slate-50
                                        text-slate-600 transition-all duration-300
                                        hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600
                                        dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300
                                        dark:hover:text-blue-400"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">
                    <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
                        <p>
                            © {currentYear}{" "}
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                                Rayhan.dev
                            </span>
                            . All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}