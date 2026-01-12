"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#problems", label: "Problem Statements" },
  { href: "#timeline", label: "Timeline" },
  { href: "#ai-horizons", label: "AI Horizons" },
  { href: "#ai-xclerate", label: "AI-xclerate" },
  { href: "#prizes", label: "Prizes" },
  { href: "#registration", label: "Registration" },
  { href: "#organizers", label: "Organizers" },
  // { href: "#judges", label: "Judges" },
  { href: "#contact", label: "Contact & FAQ" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const ids = useMemo(() => LINKS.map((l) => l.href.replace("#", "")), []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 font-semibold">
          <Image
            src="/codsai.png"
            alt="AI for Inclusion Logo"
            width={32}
            height={32}
            className="h-10 w-10 object-contain"
          />
          <span>AI for Inclusion</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              ref={(el) => {
                linkRefs.current[l.href] = el;
              }}
              href={l.href}
              className="relative text-sm hover:text-primary transition-colors"
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all ${
                  active === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
                aria-hidden
              />
            </a>
          ))}
          {/* {<DarkModeToggle />} */}
          <Button
            asChild
            className="bg-brand text-primary-foreground hover:bg-brand/90"
          >
            <a href="#registration">Register</a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border"
          aria-label="Open navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 border-b last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Button
                asChild
                className="bg-brand text-primary-foreground hover:bg-brand/90 w-full"
              >
                <a href="#registration">Register</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
