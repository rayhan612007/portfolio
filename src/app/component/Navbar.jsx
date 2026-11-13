"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Sparkles, ArrowRight, Moon, Sun } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { useTheme } from "next-themes";
import Image from "next/image";


const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkMode = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#" className="flex items-center gap-2.5 group">
          <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
            <Image
              src='/logo.png'
              height={20}
              width={20}
              alt="Logo"
            />
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight">
            Rayhan<span className="text-secondary font-mono">.dev</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 border-border/60 hover:bg-muted"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-4 w-4 text-secondary" /> : <Moon className="h-4 w-4 text-foreground" />}
            </Button>
          )}

          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "group relative h-9 overflow-hidden rounded-full px-5 shadow-md shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
            )}
          >
            {/* Shine sweep on hover */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative transition-colors duration-300 group-hover:text-primary-foreground">
              Hire Me
            </span>
            <Sparkles className="relative h-3.5 w-3.5 text-secondary transition-transform duration-300 group-hover:rotate-180 group-hover:scale-125" />
          </Link>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-4 w-4 text-secondary" /> : <Moon className="h-4 w-4 text-foreground" />}
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="rounded-full"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-linear-to-r from-secondary via-primary to-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden border-b bg-background/95 backdrop-blur-xl px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/40 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "group relative mt-2 w-full overflow-hidden rounded-full py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 active:scale-[0.97]"
            )}
          >
            {/* Shine sweep on hover */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative">Hire Me</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      )}
    </header>
  );
}