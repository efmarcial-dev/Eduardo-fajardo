"use client";

import { useScrollReveal } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { Building2, Rocket, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

function ExperienceEntry({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>({
    y: 30,
    delay: index * 0.12,
  });

  const Icon = experience.type === "founding" ? Rocket : Building2;

  return (
    <div ref={ref} className="relative pl-8 sm:pl-10 pb-14 last:pb-4 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 group-hover:bg-accent/40 transition-colors" />

      {/* Timeline marker icon */}
      <div className="absolute left-0 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 group-hover:border-accent flex items-center justify-center transition-colors shadow-xs">
        <Icon className="h-3.5 w-3.5 text-gray-500 group-hover:text-accent transition-colors" />
      </div>

      <div className="ml-2 sm:ml-4 rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-8 hover:border-gray-300 hover:shadow-xs transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-gray-100">
          <div>
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wider">
              {experience.type === "founding" ? "FOUNDER / EXECUTIVE" : "ENTERPRISE ENGINEERING"}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">
              {experience.position}
            </h3>
            <p className="text-base font-semibold text-gray-600">
              {experience.organization}
            </p>
          </div>

          <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 bg-gray-100 rounded-full text-gray-600 font-medium">
            {experience.type === "founding" ? "Company Leadership" : "Staff / Senior Level"}
          </span>
        </div>

        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {experience.description}
        </p>

        <div className="mt-5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
            Verified Technical Contributions
          </h4>
          <ul className="space-y-2">
            {experience.contributions.map((contribution, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block text-xs font-medium text-gray-600 bg-gray-100 rounded-md px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            label="Professional Experience"
            title="Career trajectory & leadership."
            description="Proven track record operating inside enterprise environments while independently building and scaling technology platforms."
          />
          <Link
            href="/resume"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-gray-50 transition-colors mb-16 shadow-2xs"
          >
            <FileText className="h-4 w-4" />
            <span>View Full Résumé</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="max-w-4xl">
          {experiences.map((experience, index) => (
            <ExperienceEntry
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/resume"
            className="inline-flex items-center justify-center w-full gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-foreground hover:bg-gray-50"
          >
            <FileText className="h-4 w-4" />
            <span>View Full Résumé</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
