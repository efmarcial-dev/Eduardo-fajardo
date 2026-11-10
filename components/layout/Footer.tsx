import Link from "next/link";
import { Mail, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/efmarcial-dev",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/eduardo-marcial",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:efmarcial1060@gmail.com",
    icon: Mail,
  },
  {
    label: "Book a Call",
    href: "https://cal.boardy.ai/eduardo-marcial",
    icon: Calendar,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Eduardo Fajardo-Marcial
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Software Engineer · Founder · Technology Architect
            </p>
          </div>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; 2026 Eduardo Fajardo-Marcial. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/resume" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Resume
            </Link>
            <Link href="/#contact" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
