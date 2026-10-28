"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  GraduationCap,
  Sparkles,
  Gamepad2,
  Palette,
  Terminal,
  Layout,
  CheckCircle2,
  MapPin,
  Briefcase
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1 text-xs uppercase tracking-widest font-semibold">
            About Me
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Passionate Web Developer Crafting Modern Digital Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Get to know my journey, the technologies I specialize in, my engineering values, and what keeps me creative outside of coding.
          </p>
        </div>

        {/* 1. Programming Journey & Quick Specs */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Detailed Journey */}
          <Card className="md:col-span-2 shadow-sm border-border/60">
            <CardContent className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-primary font-semibold text-lg sm:text-xl">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="h-5 w-5" />
                </div>
                <h3>My Web Development Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                My passion for programming started with a deep curiosity for how web experiences come to life. As a Computer Science and Technology student at Faridpur Polytechnic Institute, I dove deep into web development—building a rock-solid foundation in HTML, CSS, and modern JavaScript before advancing to complex frontend ecosystems with React, Next.js, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I specialize in transforming complex UI/UX designs into fast, clean, and intuitive digital interfaces. I thrive on architecting responsive web applications, managing dynamic states, and optimizing client-side performance.
              </p>
            </CardContent>
          </Card>

          {/* Key Credentials & Information */}
          <Card className="shadow-sm border-border/60">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-2.5 text-primary font-semibold text-lg">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3>Quick Profile</h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <GraduationCap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-medium block">Education</strong>
                    Diploma in Computer Science & Tech
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-medium block">Focus Area</strong>
                    Frontend Web Development
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-medium block">Location</strong>
                    Bangladesh
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 2. The Type of Work I Enjoy */}
        <Card className="shadow-sm border-border/60">
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 text-primary font-semibold text-lg sm:text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3>The Type of Work I Enjoy</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-muted/40 border border-border/40 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground text-base">
                  <Layout className="h-4 w-4 text-amber-500" /> Dynamic & Responsive UIs
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Building pixel-perfect, mobile-first web applications with accessible components, smooth micro-interactions, and visual polish.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-muted/40 border border-border/40 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground text-base">
                  <Terminal className="h-4 w-4 text-blue-500" /> Modern Frontend Architecture
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Structuring scalable codebases in Next.js/React, integrating REST APIs, managing global states, and keeping performance high.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Clean & Modular Code</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> UI Accessibility</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Fast Load Optimization</span>
            </div>
          </CardContent>
        </Card>

        {/* 3. Personal Interests & Hobbies */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Beyond The Code Editor</h3>
          <div className="grid sm:grid-cols-2 gap-6">

            <Card className="shadow-sm border-border/60 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <Gamepad2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Arcade & Multiplayer Gaming</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    When I step away from my laptop, I love playing retro couch co-op arcade games and multiplayer racing games with friends to unwind and reset.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-border/60 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <Palette className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Sketching & Visual Art</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    I practice traditional drawing and digital illustration. It sharpens my artistic eye for visual hierarchy, composition, and spacing when building UI layouts.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </section>
  );
}