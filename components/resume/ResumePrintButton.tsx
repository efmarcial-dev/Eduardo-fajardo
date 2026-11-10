"use client";

import { Download } from "lucide-react";

export default function ResumePrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors print:hidden cursor-pointer"
      aria-label="Download or Print resume as PDF"
    >
      <Download className="h-4 w-4" />
      Download PDF
    </button>
  );
}
