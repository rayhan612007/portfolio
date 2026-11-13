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
        <footer className="border-t border-border/60 bg-card/60 text-foreground backdrop-blur-md transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
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
                                <span className="text-primary">.dev</span>
                            </span>
                        </Link>

                        <p className="max-w-md text-sm leading-6 text-muted-foreground">
                            Building modern, responsive, and user-friendly
                            web experiences. Turning ideas into real web
                            applications.
                        </p>
                    </div>

                    {/* Connect */}
                    <div className="md:justify-self-end md:w-full md:max-w-md">
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
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
                                        rounded-full border border-border/60 bg-background
                                        text-muted-foreground transition-all duration-300
                                        hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-border/60 pt-6">
                    <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {currentYear}{" "}
                            <span className="font-semibold text-primary">
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