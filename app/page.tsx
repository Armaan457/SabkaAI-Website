import React from "react";

import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ProblemStatements } from "@/components/problem-statements";
import { Timeline } from "@/components/timeline";
import { RegistrationForm } from "@/components/registration-form";
import { Prizes } from "@/components/prizes";
import { Organizers } from "@/components/organizers";
import { Judges } from "@/components/judges";
import { ContactSection } from "@/components/contact-section";
import { ViewGuidelines } from "@/components/view-guidelines";
import { EventHighlights } from "@/components/EventHighLights";
import { DeadlineAnnouncement } from "@/components/deadline-announcement";

export default function Page() {
  return (
    <main className="min-h-[100dvh]">
      <DeadlineAnnouncement />
      <NavBar />
      <Hero />
      <section
        id="about"
        aria-labelledby="about-title"
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>
      <EventHighlights />
      <section
        id="problems"
        aria-labelledby="problems-title"
        className="pt-6 pb-16 md:pb-24 bg-secondary/10"
      >
        <div className="container mx-auto px-4 ">
          <h2
            id="problems-title"
            className="text-3xl md:text-4xl font-semibold text-pretty my-8"
          >
            Problem Statements
          </h2>
          <ProblemStatements />
        </div>
      </section>
      <section
        id="timeline"
        aria-labelledby="timeline-title"
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <h2
            id="timeline-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-8"
          >
            Timeline
          </h2>
          <Timeline />
        </div>
      </section>
      <section
        id="prizes"
        aria-labelledby="prizes-title"
        className="py-16 md:py-24 bg-secondary/10"
      >
        <div className="container mx-auto px-4">
          <h2
            id="prizes-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-8 text-center"
          >
            Prizes & Recognition
          </h2>
          <Prizes />
        </div>
      </section>
      <section
        id="registration"
        aria-labelledby="registration-title"
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <h2
            id="registration-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-8 text-center"
          >
            Registration
          </h2>
          <RegistrationForm />
        </div>
      </section>
      <section
        id="guidelines"
        aria-labelledby="guidelines-title"
        className="pt-16 pb-10 md:py-24"
      >
        <div className="container mx-auto px-4">
          <h2
            id="guidelines-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-7"
          >
            Guidelines
          </h2>
          <ViewGuidelines />
        </div>
      </section>
      <section
        id="organizers"
        aria-labelledby="organizers-title"
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <Organizers />
        </div>
      </section>
      {/* <section
        id="judges"
        aria-labelledby="judges-title"
        className="py-16 md:py-24 bg-secondary/10"
      >
        <div className="container mx-auto px-4">
          <Judges />
        </div>
      </section> */}
      <ContactSection />
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-sm text-muted-foreground">
          © 2025 AI for Inclusion Hackathon. Built with a focus on accessibility
          and social impact.
        </div>
      </footer>
    </main>
  );
}
