import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Page not found.
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>
      </div>
    </main>
  );
}
