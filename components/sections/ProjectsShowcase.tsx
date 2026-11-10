"use client";

import { useScrollReveal } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ExternalLink, Code2, ArrowRight } from "lucide-react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>({
    y: 35,
    delay: index * 0.08,
  });

  return (
    <div ref={ref}>
      <article className="h-full flex flex-col justify-between border border-gray-200/90 rounded-2xl p-7 sm:p-9 bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 group">
        <div>
          {/* Card Top Metadata */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <span className="text-xs font-mono text-gray-400">
              Role: {project.role}
            </span>
          </div>

          {/* Project Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-400 font-medium">
            {project.subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Editorial Visual Asset Frame */}
          <div className="mt-6 aspect-[16/9] rounded-xl bg-gray-50 border border-gray-200/80 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group-hover:border-accent/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 mb-2 shadow-2xs">
              <Code2 className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold text-gray-700">
              {project.title} · Technical Showcase
            </p>
            <p className="text-[11px] font-mono text-gray-400 mt-0.5">
              System Architecture & Production Highlights
            </p>
          </div>

          {/* Live External Links if any */}
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

          {/* Tech Badges */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="inline-block text-[11px] font-medium text-gray-600 bg-gray-100/90 rounded-md px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="inline-block text-[11px] font-medium text-gray-400 bg-gray-50 rounded-md px-2 py-1">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Action footer */}
        <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-accent transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-[11px] font-mono text-gray-400">
            Deep Dive // Available
          </span>
        </div>
      </article>
    </div>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            label="Selected Work"
            title="Projects & platforms."
            description="From founding technology companies to engineering distributed enterprise systems. Each project represents end-to-end technical execution."
          />
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-light transition-colors mb-16"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-foreground hover:bg-gray-50"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
