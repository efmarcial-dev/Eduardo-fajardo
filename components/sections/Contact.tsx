"use client";

import { useScrollReveal } from "@/lib/animations";
import { ArrowUpRight, Mail, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const contactLinks = [
  {
    label: "Email",
    value: "efmarcial1060@gmail.com",
    href: "mailto:efmarcial1060@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/eduardo-marcial",
    href: "https://linkedin.com/in/eduardo-marcial",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/efmarcial-dev",
    href: "https://github.com/efmarcial-dev",
    icon: GithubIcon,
  },
  {
    label: "Calendar",
    value: "Book a 15-Minute Introduction",
    href: "https://cal.boardy.ai/eduardo-marcial",
    icon: Calendar,
  },
];

export default function Contact() {
  const headingRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const linksRef = useScrollReveal<HTMLDivElement>({
    y: 20,
    delay: 0.2,
    stagger: 0.1,
    childSelector: "a",
  });

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={headingRef}>
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Let&apos;s talk.
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Whether you&apos;re looking for engineering leadership, need a
              technical partner, or have an interesting project — I&apos;d like to
              hear about it.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:efmarcial1060@gmail.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://cal.boardy.ai/eduardo-marcial"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-sm font-medium text-foreground hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Book a 15-Minute Introduction
              <Calendar className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          ref={linksRef}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 hover:border-gray-300 hover:bg-gray-50/50 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 group-hover:bg-accent/10 transition-colors">
                <link.icon className="h-4 w-4 text-gray-500 group-hover:text-accent transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  {link.label}
                </p>
                <p className="text-sm font-medium text-foreground truncate">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-accent transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
