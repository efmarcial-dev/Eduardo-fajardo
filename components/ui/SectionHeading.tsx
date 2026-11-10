"use client";

import { useScrollReveal } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  const ref = useScrollReveal<HTMLDivElement>({ y: 30 });

  return (
    <div ref={ref} className="mb-16 max-w-2xl">
      {label && (
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
