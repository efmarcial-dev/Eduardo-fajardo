"use client";

import { useScrollReveal } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2, User, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const coreCapabilities = [
  "Design and architect complex distributed systems",
  "Build resilient, production-ready full-stack applications",
  "Lead technical execution and cross-functional engineering teams",
  "Work seamlessly across infrastructure, cloud, and application layers",
  "Translate ambiguous business requirements into high-impact engineering solutions",
];

export default function About() {
  const contentRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.1 });
  const portraitRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Editorial Introduction"
          title="Engineering meets entrepreneurial execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative & Capabilities */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
              &ldquo;I work at the intersection of software engineering, system architecture,
              and product development. My work spans enterprise engineering, cloud infrastructure,
              AI-powered applications, and building products from the ground up.&rdquo;
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Operating across both sides of the technology equation: architecting enterprise
              systems that satisfy federal compliance, event-driven scalability, and federated identity,
              while maintaining the founder-level agility required to take zero-to-one software products
              to production.
            </p>

            {/* Core Capability Checklist */}
            <div className="pt-4 pb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-4">
                CORE TECHNICAL COMPETENCIES
              </h3>
              <ul className="space-y-3">
                {coreCapabilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Summary Metrics */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-black text-foreground">6</p>
                <p className="text-xs text-gray-500 font-mono mt-1">Major Systems Architected</p>
              </div>
              <div>
                <p className="text-3xl font-black text-foreground">Multi-AZ</p>
                <p className="text-xs text-gray-500 font-mono mt-1">Cloud Infrastructure</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-3xl font-black text-accent">Zero-to-One</p>
                <p className="text-xs text-gray-500 font-mono mt-1">Product Execution</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                <span>Review Full Career History & Verified Résumé</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Reserved Portrait Placeholder Frame */}
          <div ref={portraitRef} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl bg-gray-50 border border-gray-200/90 p-8 flex flex-col justify-between overflow-hidden shadow-xs">
              {/* Technical viewfinder markers */}
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>PORTRAIT // FRAME</span>
                <span>REC: 2026</span>
              </div>

              {/* Center placeholder mark */}
              <div className="my-auto text-center py-8">
                <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center mx-auto mb-4 shadow-sm text-gray-400">
                  <User className="h-10 w-10 text-gray-400" />
                </div>
                <h4 className="text-base font-bold text-foreground">
                  Eduardo Fajardo-Marcial
                </h4>
                <p className="text-xs font-mono text-gray-400 mt-1">
                  Professional Portrait Placeholder
                </p>
                <p className="text-xs text-gray-400 mt-3 max-w-xs mx-auto leading-relaxed">
                  Reserved high-fidelity portrait slot. Awaiting official photographic asset for final integration.
                </p>
              </div>

              {/* Bottom metadata */}
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>FORMAT: 4:5</span>
                <span>STATUS: RESERVED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
