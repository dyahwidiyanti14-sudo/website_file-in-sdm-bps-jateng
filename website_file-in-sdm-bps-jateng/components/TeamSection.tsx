"use client";

import { useState } from "react";
import { teamMembers } from "@/lib/team-data";

export default function TeamSection() {
  const [selectedId, setSelectedId] = useState(teamMembers[0].id);
  const selected = teamMembers.find((m) => m.id === selectedId) ?? teamMembers[0];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1300px] mx-auto px-5">
        <p className="text-center text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5">
          Kenali Kami
        </p>
        <h2 className="text-center text-2xl md:text-[1.7rem] font-bold text-[var(--navy-2)] mb-1 font-fraunces">
          👥 Anggota Tim SDM &amp; Hukum
        </h2>
        <p className="text-center text-[#6B7684] text-sm mb-8">
          BPS Provinsi Jawa Tengah
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-1 max-h-[600px] overflow-y-auto pr-1">
              {teamMembers.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedId(m.id)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition ${
                    m.id === selectedId ? "bg-[var(--paper-2)]" : "hover:bg-[var(--paper-2)]"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-[38px] h-[38px] rounded-lg object-cover object-top bg-[#dce7ef] shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-sm text-[var(--ink)]">{m.name}</div>
                    <div className="text-slate-500 text-xs">{m.role}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-[var(--line)] rounded-2xl p-6 md:p-8 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.photo}
                alt={`Foto ${selected.name}`}
                className="w-[190px] h-[240px] rounded-2xl object-cover object-top mx-auto mb-4 bg-[#dce7ef]"
              />
              <div className="font-bold text-lg text-[var(--ink)]">{selected.name}</div>
              <span className="inline-block mt-2 rounded-full px-3.5 py-1.5 text-sm font-medium bg-[#ddeffb] text-[#2c6fa8]">
                {selected.role}
              </span>

              <div className={`grid gap-3 mt-5 text-left ${selected.wilayah ? "md:grid-cols-2" : "grid-cols-1"}`}>
                {selected.wilayah && (
                  <div className="border-l-4 border-[var(--brand-orange)] bg-[var(--paper-2)] rounded-md px-4 py-3.5">
                    <div className="font-semibold text-sm mb-1 flex items-center gap-1.5">
                      <i className="fas fa-map-marker-alt" /> Wilayah Kerja (PIC)
                    </div>
                    <div className="text-sm text-[#3a4452]">{selected.wilayah}</div>
                  </div>
                )}
                <div className="border-l-4 border-[var(--brand-green)] bg-[var(--paper-2)] rounded-md px-4 py-3.5">
                  <div className="font-semibold text-sm mb-1 flex items-center gap-1.5">
                    <i className="fas fa-briefcase" /> Tugas Utama
                  </div>
                  <div className="text-sm text-[#3a4452]">{selected.tugas}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
