import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, ShieldCheck, Terminal } from "lucide-react";
import ArchitectureDiagram from "@/components/projects/ArchitectureDiagram";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Technical Case Study`,
    description: project.description,
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Selected Work
        </Link>

        {/* Level 1: Visual Showcase Header */}
        <div className="mb-12 border-b border-gray-100 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-gray-400 font-semibold px-2 py-0.5 bg-gray-100 rounded">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="mt-3 text-xl text-gray-500 font-medium">
            {project.subtitle}
          </p>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                Role & Responsibility
              </p>
              <p className="text-base font-semibold text-foreground mt-0.5">
                {project.role}
              </p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-200" />
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                Domain Discipline
              </p>
              <p className="text-base font-semibold text-foreground mt-0.5">
                {project.category}
              </p>
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-gray-100">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/10 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Level 1: Visual Showcase Screenshot & Asset Frame */}
        <div className="mb-16">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
            {/* Editorial blueprint frame */}
            <div className="absolute inset-4 rounded-xl border border-dashed border-gray-300 pointer-events-none" />
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mx-auto mb-4 shadow-sm text-gray-400">
                <Terminal className="h-6 w-6" />
              </div>
              <p className="text-base font-bold text-foreground">
                Product Showcase · Visual Asset Frame
              </p>
              <p className="text-xs text-gray-400 mt-1 font-mono">
                Asset: {project.slug}-preview.webp
              </p>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                Reserved high-resolution interface preview. Verified production environment available via active deployments above.
              </p>
            </div>
          </div>
        </div>

        {/* Level 2: Technical Deep Dive */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              ENGINEERING SPECIFICATION
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Technical Deep Dive
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Architectural decisions, system constraints, engineering tradeoffs, and impact.
          </p>
        </div>

        {/* Key Highlights Grid */}
        <section className="mb-16">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Core Architectural Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-xs"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                <p className="text-sm font-medium text-gray-700 leading-snug">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem & Objectives */}
        <section className="mb-14">
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-accent font-mono text-sm">01 //</span> Problem & Objectives
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </section>

        {/* System Architecture Diagram */}
        <section className="mb-14">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="text-accent font-mono text-sm">02 //</span> System Architecture Blueprint
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Topological diagram representing compute layers, data flow, ingress routing, and service boundaries.
            </p>
          </div>
          <ArchitectureDiagram slug={project.slug} />
        </section>

        {/* Approach & Implementation */}
        <section className="mb-14">
          <div className="rounded-xl border border-gray-200 bg-white p-8">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-accent font-mono text-sm">03 //</span> Implementation Approach & Technical Decisions
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/30 p-8">
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span className="text-emerald-700 font-mono text-sm">04 //</span> Verified Impact & Engineering Outcome
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              {project.impact}
            </p>
          </div>
        </section>

        {/* Technologies Stack */}
        <section className="mb-16 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-4">
            Technologies & Infrastructure Deployed
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200/60 rounded-full px-3.5 py-1.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Next project teaser */}
        {nextProject && (
          <div className="pt-10 border-t border-gray-200">
            <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
              Next Case Study
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-between p-6 rounded-xl border border-gray-200 hover:border-accent/40 hover:bg-gray-50/50 transition-all"
            >
              <div>
                <span className="text-xs font-mono text-accent">
                  PROJECT {nextProject.number} · {nextProject.category}
                </span>
                <h4 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mt-0.5">
                  {nextProject.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {nextProject.subtitle}
                </p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-gray-300 group-hover:text-accent transition-colors" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
