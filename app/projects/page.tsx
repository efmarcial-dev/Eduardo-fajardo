import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Comprehensive engineering case studies spanning enterprise systems, AI platforms, healthcare technology, embedded systems, and company building.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold px-2 py-0.5 bg-accent/5 rounded border border-accent/20">
            SYSTEMS PORTFOLIO // 6 MAJOR WORKS
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mt-3">
            Projects & Case Studies
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            In-depth documentation of distributed systems, product architectures, and engineering execution.
            Explore each project for problem analysis, architecture blueprints, implementation decisions, and verified outcomes.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group border border-gray-200/90 rounded-2xl p-7 sm:p-9 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                      PROJECT {project.number}
                    </span>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400 font-mono hidden sm:inline">
                      · Role: {project.role}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="text-sm font-medium text-gray-400 mt-1">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  {/* Links if available */}
                  {project.links && project.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-light bg-accent/5 hover:bg-accent/10 px-3 py-1 rounded-full transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block text-xs font-medium text-gray-600 bg-gray-100 rounded-md px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="self-start lg:self-center shrink-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors shadow-2xs"
                  >
                    <span>Read Deep Dive</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
