"use client";

import { useState } from "react";
import type { AgendaItem } from "@/lib/agenda-data";

export default function AgendaCard({ agenda }: { agenda: AgendaItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-black/5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] px-6 py-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1">
              <i className="fas fa-check text-[10px]" /> {agenda.statusLabel}
            </span>
            <span className="text-[11px] font-bold tracking-wide text-[var(--text-muted)]">
              {agenda.agendaLabel}
            </span>
          </div>
          <h4 className="font-bold text-[var(--text-dark)] mb-1.5">
            {agenda.title}
          </h4>
          {open && (
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-2">
              {agenda.description}
            </p>
          )}
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Lihat detail"
          className="shrink-0 w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--bg-light)] transition"
        >
          <i className={`fas fa-chevron-down text-xs transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
    </div>
  );
}
