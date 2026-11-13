"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="print:hidden fixed top-6 right-6 z-50 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary to-accent px-5 text-sm font-semibold text-white shadow-lg shadow-primary/30 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0"
        >
            <Printer className="h-4 w-4" />
            Print / Save as PDF
        </button>
    );
}
