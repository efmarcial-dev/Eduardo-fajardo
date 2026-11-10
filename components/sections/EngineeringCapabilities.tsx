"use client";

import { useScrollReveal } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import {
  Server,
  Monitor,
  Cloud,
  Network,
  Shield,
  Brain,
  Cpu,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  backend: Server,
  frontend: Monitor,
  cloud: Cloud,
  distributed: Network,
  identity: Shield,
  "ai-ml": Brain,
  embedded: Cpu,
};

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>({
    y: 30,
    delay: index * 0.08,
  });

  const Icon = iconMap[category.id] || Server;

  return (
    <div
      ref={ref}
      className="group border border-gray-200 rounded-xl p-6 md:p-8 hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-accent/10 transition-colors">
          <Icon className="h-5 w-5 text-gray-500 group-hover:text-accent transition-colors" />
        </div>
        <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="inline-block text-xs font-medium text-gray-600 bg-gray-100 group-hover:bg-accent/5 rounded-full px-3 py-1 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
          Related Projects
        </p>
        <div className="flex flex-wrap gap-1.5">
          {category.relatedProjects.map((project) => (
            <span key={project} className="text-xs text-gray-500">
              {project}
              {category.relatedProjects.indexOf(project) <
              category.relatedProjects.length - 1
                ? " ·"
                : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EngineeringCapabilities() {
  return (
    <section id="engineering" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Engineering"
          title="Capabilities & disciplines."
          description="Organized by engineering discipline — not just a list of technologies. Each area represents real project experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
