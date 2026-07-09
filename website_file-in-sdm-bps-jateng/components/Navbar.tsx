"use client";

import Link from "next/link";
import { useState } from "react";

type DropdownItem = { label: string; href: string };

const syaratAdministrasi: DropdownItem[] = [
  { label: "Kenaikan Pangkat", href: "/syarat-administrasi/kenaikan-pangkat" },
  { label: "Pensiun", href: "/syarat-administrasi/pensiun" },
  { label: "Satyalancana", href: "/syarat-administrasi/satyalancana" },
  { label: "Tugas Belajar", href: "/syarat-administrasi/tugas-belajar" },
  { label: "Pengangkatan PNS", href: "/syarat-administrasi/pengangkatan-pns" },
  { label: "Peninjauan Masa Kerja", href: "/syarat-administrasi/peninjauan-masa-kerja" },
  { label: "Cantum Gelar", href: "/syarat-administrasi/cantum-gelar" },
  { label: "Uji Kompetensi", href: "/syarat-administrasi/uji-kompetensi" },
  { label: "Layanan JFT", href: "/syarat-administrasi/jft" },
  { label: "Pengembangan Karir", href: "/syarat-administrasi/pengembangan-karir" },
];

const layananRegulasi: DropdownItem[] = [
  { label: "Tentang ASN", href: "/layanan-regulasi#tentang-asn" },
  { label: "Manajemen ASN", href: "/layanan-regulasi#manajemen-asn" },
  { label: "Bahan Tayang", href: "/layanan-regulasi#bahan-tayang" },
  { label: "Video Paparan", href: "/layanan-regulasi#video" },
];

const layananPusat: DropdownItem[] = [
  { label: "Badan Pusat Statistik", href: "/layanan-pusat#bps" },
  { label: "Kearsipan", href: "/layanan-pusat#kearsipan" },
  { label: "Penyuluh Hukum & HAM", href: "/layanan-pusat#hukum-ham" },
  { label: "Analis Keuangan", href: "/layanan-pusat#keuangan" },
  { label: "PBJ", href: "/layanan-pusat#pbj" },
  { label: "Penata Laksana Barang", href: "/layanan-pusat#barang" },
  { label: "Analis SDM", href: "/layanan-pusat#sdm" },
  { label: "Pranata HUMAS", href: "/layanan-pusat#humas" },
];

const qna: DropdownItem[] = [
  { label: "Saran & Kritik", href: "/qna" },
  { label: "Respon Pertanyaan", href: "/qna/respon" },
];

function NavDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition py-2">
        {label}
        <i className={`fas fa-chevron-down text-[10px] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2 z-50">
          <div className="bg-white rounded-xl shadow-xl border border-black/5 py-2 min-w-[240px]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-[var(--text-dark)] hover:bg-[var(--blue-soft)] hover:text-[var(--bps-blue)] transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--primary-navy)] shadow-md">
      <div className="max-w-[1500px] mx-auto px-5 h-[64px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
            <i className="fas fa-shapes text-white text-sm" />
          </span>
          <span className="text-white font-bold tracking-wide text-lg">FILE-IN SDM</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/" className="text-sm font-semibold text-white border-b-2 border-white pb-1">
            Beranda
          </Link>
          <Link href="/arsip-kepegawaian" className="text-sm font-semibold text-white/90 hover:text-white transition">
            Arsip Kepegawaian
          </Link>
          <NavDropdown label="Syarat Administrasi" items={syaratAdministrasi} />
          <NavDropdown label="Layanan Regulasi" items={layananRegulasi} />
          <NavDropdown label="Layanan Pusat" items={layananPusat} />
          <NavDropdown label="QnA" items={qna} />
          <button aria-label="Cari" className="text-white/90 hover:text-white transition">
            <i className="fas fa-search" />
          </button>
        </nav>

        <button
          className="lg:hidden text-white text-xl"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          <i className={mobileOpen ? "fas fa-times" : "fas fa-bars"} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[var(--primary-navy)] border-t border-white/10 px-5 py-4 flex flex-col gap-1">
          <Link href="/" className="text-white font-semibold py-2">Beranda</Link>
          <Link href="/arsip-kepegawaian" className="text-white/90 py-2">Arsip Kepegawaian</Link>
          <details className="text-white/90 py-1">
            <summary className="py-1 cursor-pointer">Syarat Administrasi</summary>
            <div className="pl-3 flex flex-col">
              {syaratAdministrasi.map((i) => (
                <Link key={i.href} href={i.href} className="py-1.5 text-sm text-white/70">{i.label}</Link>
              ))}
            </div>
          </details>
          <details className="text-white/90 py-1">
            <summary className="py-1 cursor-pointer">Layanan Regulasi</summary>
            <div className="pl-3 flex flex-col">
              {layananRegulasi.map((i) => (
                <Link key={i.href} href={i.href} className="py-1.5 text-sm text-white/70">{i.label}</Link>
              ))}
            </div>
          </details>
          <details className="text-white/90 py-1">
            <summary className="py-1 cursor-pointer">Layanan Pusat</summary>
            <div className="pl-3 flex flex-col">
              {layananPusat.map((i) => (
                <Link key={i.href} href={i.href} className="py-1.5 text-sm text-white/70">{i.label}</Link>
              ))}
            </div>
          </details>
          <details className="text-white/90 py-1">
            <summary className="py-1 cursor-pointer">QnA</summary>
            <div className="pl-3 flex flex-col">
              {qna.map((i) => (
                <Link key={i.href} href={i.href} className="py-1.5 text-sm text-white/70">{i.label}</Link>
              ))}
            </div>
          </details>
        </div>
      )}
    </header>
  );
}
