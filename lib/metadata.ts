import type { Metadata } from "next";

const siteUrl = "https://eduardofajardo.dev";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eduardo Fajardo-Marcial — Software Engineer · Founder · Technology Architect",
    template: "%s — Eduardo Fajardo-Marcial",
  },
  description:
    "I build systems, lead engineering, and turn ideas into products. Software engineer and founder specializing in backend systems, cloud architecture, AI applications, and technical leadership.",
  keywords: [
    "Software Engineer",
    "Founder",
    "Technology Architect",
    "Backend Engineering",
    "Cloud Architecture",
    "AI Development",
    "Full Stack Developer",
    "Python",
    "Next.js",
    "TypeScript",
    "AWS",
    "Django",
  ],
  authors: [{ name: "Eduardo Fajardo-Marcial" }],
  creator: "Eduardo Fajardo-Marcial",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Eduardo Fajardo-Marcial — Software Engineer · Founder · Technology Architect",
    description:
      "I build systems, lead engineering, and turn ideas into products.",
    siteName: "Eduardo Fajardo-Marcial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Fajardo-Marcial — Software Engineer · Founder · Technology Architect",
    description:
      "I build systems, lead engineering, and turn ideas into products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
