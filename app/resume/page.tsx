import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import ResumePrintButton from "@/components/resume/ResumePrintButton";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Eduardo Fajardo-Marcial — Software Engineer, Founder, and Technology Architect.",
};

export default function ResumePage() {
  return (
    <main className="pt-24 pb-16 print:pt-4 print:pb-4">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 print:px-0">
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Home
          </Link>
          <ResumePrintButton />
        </div>

        {/* Resume header */}
        <div className="mb-12 pb-8 border-b border-gray-200 print:mb-6 print:pb-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground print:text-3xl">
            Eduardo Fajardo-Marcial
          </h1>
          <p className="mt-2 text-lg text-gray-500 print:text-base">
            Software Engineer · Founder · Technology Architect
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
            <a
              href="mailto:efmarcial1060@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              efmarcial1060@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/eduardo-marcial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              linkedin.com/in/eduardo-marcial
            </a>
            <a
              href="https://github.com/efmarcial-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              github.com/efmarcial-dev
            </a>
          </div>
        </div>

        {/* Professional summary */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
            Professional Summary
          </h2>
          <p className="text-base text-gray-600 leading-relaxed print:text-sm">
            Software engineer, founder, and technology architect with extensive experience spanning
            enterprise backend systems, cloud infrastructure, AI-powered applications, and building
            technology companies from inception. Combines deep technical execution in Python,
            Django, Next.js, TypeScript, AWS, Kafka, and distributed systems with entrepreneurial leadership
            in launching and operating engineering organizations.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
            Work Experience
          </h2>
          <div className="space-y-8 print:space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="pb-8 border-b border-gray-100 last:border-0 print:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground print:text-base">
                      {exp.position}
                    </h3>
                    <p className="text-base text-gray-500 print:text-sm font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider print:hidden">
                    {exp.type === "founding" ? "Founding / Leadership" : "Enterprise"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mt-2 print:text-xs">
                  {exp.description}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {exp.contributions.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-500 print:text-xs"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-300 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:gap-3">
            {skillCategories.map((cat) => (
              <div key={cat.id}>
                <h3 className="text-sm font-semibold text-foreground mb-1 print:text-xs">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 print:text-xs">
                  {cat.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-2">
            {projects.map((project) => (
              <div key={project.slug} className="p-4 rounded-lg border border-gray-100 bg-gray-50/50 print:bg-white print:p-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gray-400">
                    {project.number}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {project.subtitle} · {project.role}
                </p>
                <p className="text-xs text-gray-400 mt-2 line-clamp-2 print:line-clamp-none">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education placeholder */}
        <section className="mb-12 print:mb-6">
          <h2 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
            Education & Certifications
          </h2>
          <div className="p-6 rounded-lg bg-gray-50 border border-gray-200 border-dashed print:bg-white">
            <p className="text-sm text-gray-400 italic print:text-xs">
              Education and certification details to be provided. This section
              will be populated with verified academic credentials and
              professional certifications.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="pt-6 border-t border-gray-200">
          <h2 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
            Contact
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 print:text-xs">
            <span>Email: efmarcial1060@gmail.com</span>
            <span>LinkedIn: linkedin.com/in/eduardo-marcial</span>
            <span>GitHub: github.com/efmarcial-dev</span>
            <span>Calendar: cal.boardy.ai/eduardo-marcial</span>
          </div>
        </section>
      </div>
    </main>
  );
}
