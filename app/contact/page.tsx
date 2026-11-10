import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Eduardo Fajardo-Marcial — Software Engineer, Founder, and Technology Architect.",
};

const contactLinks = [
  {
    label: "Direct Email",
    value: "efmarcial1060@gmail.com",
    href: "mailto:efmarcial1060@gmail.com",
    icon: Mail,
    description: "Send an email for technical opportunities or advisory inquiries.",
  },
  {
    label: "Public Calendar",
    value: "cal.boardy.ai/eduardo-marcial",
    href: "https://cal.boardy.ai/eduardo-marcial",
    icon: Calendar,
    description: "Schedule a 15-minute introductory conversation.",
  },
  {
    label: "LinkedIn Profile",
    value: "linkedin.com/in/eduardo-marcial",
    href: "https://linkedin.com/in/eduardo-marcial",
    icon: LinkedinIcon,
    description: "Connect for professional networking and background review.",
  },
  {
    label: "GitHub Repositories",
    value: "github.com/efmarcial-dev",
    href: "https://github.com/efmarcial-dev",
    icon: GithubIcon,
    description: "Inspect code repositories, experiments, and open-source contributions.",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold px-2 py-0.5 bg-accent/5 rounded border border-accent/20">
            COMMUNICATION CHANNELS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-3">
            Let&apos;s talk.
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Whether you are evaluating candidates for engineering leadership, seeking a technical partner to launch a company, or architecting enterprise systems — let&apos;s discuss how we can work together.
          </p>
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:efmarcial1060@gmail.com"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors shadow-xs"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://cal.boardy.ai/eduardo-marcial"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-8 py-3.5 text-sm font-semibold text-foreground hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            <Calendar className="h-4 w-4 text-accent" />
            <span>Book a 15-Minute Introduction</span>
          </a>
        </div>

        {/* Verified Channels */}
        <div className="mt-14 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-gray-400">
            Verified Contact & Social Records
          </h2>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-5 rounded-2xl border border-gray-200/90 bg-white p-6 hover:border-gray-300 hover:shadow-xs transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 group-hover:bg-accent/10 transition-colors shrink-0">
                <link.icon className="h-5 w-5 text-gray-600 group-hover:text-accent transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  {link.label}
                </p>
                <p className="text-base font-semibold text-foreground mt-0.5 truncate group-hover:text-accent transition-colors">
                  {link.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {link.description}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-gray-300 group-hover:text-accent transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
