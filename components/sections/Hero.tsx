"use client";

import { useHeroAnimation } from "@/lib/animations";
import AvailabilityIndicator from "@/components/ui/AvailabilityIndicator";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const ref = useHeroAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex items-center pt-20 pb-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl">
          {/* Status & Identity Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8" data-hero-line>
            <AvailabilityIndicator />
            <span className="hidden sm:inline text-gray-300">/</span>
            <p className="text-sm font-medium tracking-tight text-gray-500">
              Software Engineer · Founder · Technology Architect
            </p>
          </div>

          {/* Name */}
          <div data-hero-line className="mb-4">
            <span className="text-sm font-mono uppercase tracking-widest text-accent font-semibold">
              PORTFOLIO // 2026
            </span>
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-1">
              Eduardo Fajardo-Marcial
            </p>
          </div>

          {/* Oversized Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.05]"
            data-hero-line
          >
            I build systems,
            <br />
            lead engineering,
            <br />
            <span className="text-accent">and turn ideas</span>
            <br />
            <span className="text-accent">into products.</span>
          </h1>

          {/* Professional Narrative */}
          <p
            className="mt-8 max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed font-normal"
            data-hero-fade
          >
            A hybrid technical leader combining enterprise software engineering with entrepreneurial product execution.
            Architecting robust distributed systems, backend infrastructure, and AI-powered platforms built for enterprise scale.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4" data-hero-cta>
            <Link
              href="/#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors shadow-xs"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-sm font-semibold text-foreground hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle architectural background accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
