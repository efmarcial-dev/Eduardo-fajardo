"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if the user prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Hook to animate elements into view on scroll with guaranteed visibility.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: {
    y?: number;
    x?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    childSelector?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const {
    y = 30,
    x = 0,
    duration = 0.7,
    delay = 0,
    stagger = 0.08,
    childSelector,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion is preferred, ensure visible immediately
    if (prefersReducedMotion()) {
      const targets = childSelector ? el.querySelectorAll(childSelector) : el;
      gsap.set(targets, { opacity: 1, y: 0, x: 0, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      const targets = childSelector ? el.querySelectorAll(childSelector) : el;

      gsap.fromTo(
        targets,
        { opacity: 0, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          stagger: childSelector ? stagger : 0,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [y, x, duration, delay, stagger, childSelector]);

  return ref;
}

/**
 * Hook for the hero entrance animation.
 * Uses gsap.context and gsap.fromTo with clearProps to eliminate blank/invisible states.
 */
export function useHeroAnimation<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(
      "[data-hero-line], [data-hero-fade], [data-hero-cta]"
    );

    // If user prefers reduced motion, ensure full visibility immediately
    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      const heroLines = el.querySelectorAll("[data-hero-line]");
      const heroFades = el.querySelectorAll("[data-hero-fade]");
      const heroCtas = el.querySelectorAll("[data-hero-cta]");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(targets, { clearProps: "all" });
        },
      });

      tl.fromTo(
        heroLines,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          clearProps: "transform",
        }
      )
        .fromTo(
          heroFades,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            clearProps: "transform",
          },
          "-=0.3"
        )
        .fromTo(
          heroCtas,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            clearProps: "all",
          },
          "-=0.2"
        );
    }, el);

    return () => {
      ctx.revert();
      // Ensure elements remain visible even on fast unmount/remount
      gsap.set(targets, { opacity: 1, y: 0, clearProps: "all" });
    };
  }, []);

  return ref;
}

/**
 * Hook for staggered text line reveals on scroll.
 */
export function useTextReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lines = el.querySelectorAll("[data-reveal]");
    if (lines.length === 0) return;

    if (prefersReducedMotion()) {
      gsap.set(lines, { opacity: 1, y: 0, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, []);

  return ref;
}
