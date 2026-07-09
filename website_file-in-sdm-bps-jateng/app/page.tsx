import Link from "next/link";
import { agendaList } from "@/lib/agenda-data";
import AgendaCard from "@/components/AgendaCard";
import TeamSection from "@/components/TeamSection";

const quickLinks = [
  { href: "/arsip-kepegawaian", icon: "fa-box-archive", label: "Arsip Kepegawaian", bg: "bg-[#e5f0fa]", color: "text-[#2c6fa8]" },
  { href: "/syarat-administrasi", icon: "fa-file-circle-check", label: "Syarat Administrasi", bg: "bg-[#e7f1ec]", color: "text-[var(--brand-green)]" },
  { href: "/layanan-regulasi", icon: "fa-book-open", label: "Layanan Regulasi", bg: "bg-[#fdeedd]", color: "text-[var(--brand-orange)]" },
  { href: "/layanan-pusat", icon: "fa-diagram-project", label: "Layanan Pusat", bg: "bg-[#eee8f7]", color: "text-[#6b4fa0]" },
  { href: "/qna", icon: "fa-circle-question", label: "QnA", bg: "bg-[#fbeae4]", color: "text-[#b5562f]" },
];

const publications = [
  {
    id: "panduan",
    cover: "https://picsum.photos/seed/panduan/450/600",
    title: "Panduan Penggunaan Web FILE-IN SDM",
    author: "Disusun oleh: Dyah Widiyanti · 2026",
    cta: "Baca Panduan",
  },
  {
    id: "disiplin",
    cover: "https://picsum.photos/seed/disiplin/450/600",
    title: "Prosedur Penjatuhan Hukuman Disiplin — PP No. 94/2021",
    author: "Disusun oleh: Wiharyati, S.H.",
    cta: "Baca Dokumen",
  },
  {
    id: "pernikahan",
    cover: "https://picsum.photos/seed/pernikahan/450/600",
    title: "Pernikahan dan Perceraian PNS",
    author: "Disusun oleh: Wiharyati, S.H.",
    cta: "Baca Dokumen",
  },
];

export default function BerandaPage() {
  return (
    <div className="font-plex text-[var(--ink)]">
      {/* ===== HERO ===== */}
      <header
        className="relative min-h-[400px] flex items-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10,20,35,.72) 0%, rgba(10,20,35,.3) 55%, rgba(10,20,35,.05) 100%), url('https://raw.githubusercontent.com/dyahwidiyanti14-sudo/file-in_sdm/c5b0d8f0fc651bcb4867dceb91430a4defd4dd5d/file-in_sdm/foto_hero_sampul_dashboard.png')",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="max-w-[1300px] mx-auto px-5 w-full">
          <h1 className="font-fraunces font-black text-white leading-[0.95] tracking-tight text-[clamp(2.4rem,6vw,4.2rem)] [text-shadow:0_2px_24px_rgba(0,0,0,0.25)]">
            FILE-IN SDM
          </h1>
          <div className="font-fraunces font-bold text-[var(--sky)] mt-1 text-[clamp(1.1rem,2.4vw,1.7rem)]">
            BPS PROVINSI JAWA TENGAH
          </div>
        </div>
      </header>

      {/* ===== Decorative social strip ===== */}
      <div className="bg-gradient-to-br from-[#bfe4f5] to-[#e9f5fb] py-5">
        <div className="max-w-[1300px] mx-auto px-5 flex items-center justify-center gap-6 text-xl text-[var(--navy-2)]">
          <a href="#" aria-label="Instagram" className="hover:opacity-70 transition"><i className="fab fa-instagram" /></a>
          <a href="#" aria-label="YouTube" className="hover:opacity-70 transition"><i className="fab fa-youtube" /></a>
          <a href="#" aria-label="X" className="hover:opacity-70 transition"><i className="fab fa-x-twitter" /></a>
          <a href="#" aria-label="Facebook" className="hover:opacity-70 transition"><i className="fab fa-facebook-f" /></a>
        </div>
      </div>

      {/* ===== Sambutan ===== */}
      <section className="bg-[var(--paper-2)] py-10 text-center">
        <div className="max-w-[1300px] mx-auto px-5">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5">
            Selamat Datang
          </p>
          <h2 className="font-bold text-xl md:text-[1.4rem] text-[var(--navy-2)] mb-2.5 font-fraunces">
            Layanan Sistem Terintegrasi FILE-IN SDM
          </h2>
          <p className="max-w-[760px] mx-auto text-sm text-[#3a4452] leading-relaxed">
            Platform digital terpadu untuk kebutuhan informasi kepegawaian,
            agenda kerja, regulasi, hingga pengembangan diri pegawai BPS
            Provinsi Jawa Tengah.
          </p>
        </div>
      </section>

      {/* ===== Quick links ===== */}
      <section className="py-14">
        <div className="max-w-[1300px] mx-auto px-5">
          <p className="text-center text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5">
            Mulai Dari Sini
          </p>
          <h2 className="text-center text-2xl md:text-[1.7rem] font-bold text-[var(--navy-2)] mb-2 font-fraunces">
            Pintasan Layanan
          </h2>
          <p className="text-center text-[#6b7684] text-sm max-w-[640px] mx-auto mb-8">
            Akses cepat ke kebutuhan kepegawaian yang paling sering dicari.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {quickLinks.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="border border-[var(--line)] rounded-xl bg-white px-4 py-6 text-center transition hover:-translate-y-1 hover:shadow-[0_10px_24px_-12px_rgba(18,40,69,0.3)] hover:text-[var(--navy-2)]"
              >
                <div className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center text-xl mx-auto mb-3 ${q.bg} ${q.color}`}>
                  <i className={`fas ${q.icon}`} />
                </div>
                <div className="font-semibold text-sm">{q.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Agenda ===== */}
      <section className="py-14 bg-[var(--paper-2)]">
        <div className="max-w-[1300px] mx-auto px-5">
          <p className="text-center text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5">
            Agenda Aktif &amp; Arsip
          </p>
          <h2 className="text-center text-2xl md:text-[1.7rem] font-bold text-[var(--navy-2)] mb-2 font-fraunces">
            Jadwal &amp; Kegiatan <em className="text-[var(--brand-orange)] not-italic italic">Tim SDM</em>
          </h2>
          <p className="text-center text-[#6b7684] text-sm max-w-[640px] mx-auto mb-8">
            Informasi lengkap jadwal, teknis pelaksanaan, dan peserta setiap
            agenda kegiatan.
          </p>

          <div className="flex flex-col gap-3.5 max-w-[900px] mx-auto">
            {agendaList.map((agenda) => (
              <AgendaCard key={agenda.id} agenda={agenda} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/arsip-kepegawaian"
              className="inline-block border border-[var(--ink)] text-[var(--ink)] rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[var(--ink)] hover:text-white transition"
            >
              Lihat Semua Agenda &amp; Arsip
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Publikasi ===== */}
      <section className="py-14">
        <div className="max-w-[1300px] mx-auto px-5">
          <p className="text-center text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5">
            Referensi &amp; Regulasi
          </p>
          <h2 className="text-center text-2xl md:text-[1.7rem] font-bold text-[var(--navy-2)] mb-2 font-fraunces">
            Publikasi &amp; Panduan
          </h2>
          <p className="text-center text-[#6b7684] text-sm max-w-[640px] mx-auto mb-8">
            Dokumen dan booklet kepegawaian. Sampul dimuat ringan; isi lengkap
            dibuka saat tombol ditekan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {publications.map((pub) => (
              <div key={pub.id} className="border border-[var(--line)] rounded-xl bg-white overflow-hidden flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pub.cover}
                  alt={`Sampul ${pub.title}`}
                  className="w-full aspect-[3/4] object-cover bg-[#dce7ef]"
                  loading="lazy"
                />
                <div className="p-4 flex flex-col flex-1">
                  <div className="font-semibold text-sm mb-1">{pub.title}</div>
                  <div className="text-xs text-slate-500 mb-3">{pub.author}</div>
                  <a
                    href="#"
                    className="mt-auto w-full text-center bg-[var(--navy-2)] hover:bg-[var(--navy)] text-white text-sm font-semibold rounded-lg py-2.5 transition"
                  >
                    {pub.cta} <i className="fas fa-arrow-up-right-from-square ml-1 text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Berita ===== */}
      <section className="py-14 bg-[var(--paper-2)]">
        <div className="max-w-[1300px] mx-auto px-5">
          <p className="text-center text-xs font-semibold tracking-[0.14em] uppercase text-slate-400 mb-1.5">
            Info Terkini
          </p>
          <h2 className="text-center text-2xl md:text-[1.7rem] font-bold text-[var(--navy-2)] mb-8 font-fraunces">
            Berita &amp; Apresiasi Pegawai
          </h2>

          <div className="rounded-2xl p-6 md:p-8 text-white bg-gradient-to-br from-[#f2924a] to-[#e5692a]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/teladan/500/350"
                  alt="Pemilihan Pegawai Teladan"
                  className="rounded-xl w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7">
                <h3 className="font-bold text-lg mb-2">
                  Pemilihan Pegawai Teladan Desember 2025 &amp; Pegawai Terbaik 2025
                </h3>
                <p className="text-sm mb-2.5">
                  Pada Senin, 19 Januari 2026, BPS Provinsi Jawa Tengah
                  mengadakan pemilihan teladan sebagai bentuk apresiasi,
                  motivasi, dan pengembangan karier pegawai yang jatuh kepada:
                </p>
                <ul className="text-sm mb-2.5 list-disc pl-5 space-y-0.5">
                  <li>Rina Kartiningrum sebagai Change Champion 2026</li>
                  <li>Muhammad Sobirin sebagai Pegawai Teladan bulan Desember 2025</li>
                  <li>Maharanny Dwiif Prasetyowati sebagai Pegawai Teladan tahun 2025</li>
                </ul>
                <a href="#" className="font-semibold text-[#ffe8cf] hover:underline text-sm">
                  Selengkapnya <i className="fas fa-arrow-right ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Anggota Tim ===== */}
      <TeamSection />
    </div>
  );
}
