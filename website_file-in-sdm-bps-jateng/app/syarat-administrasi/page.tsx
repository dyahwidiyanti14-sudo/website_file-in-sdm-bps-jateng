const baseUrl = "https://sites.google.com/view/file-in-sdm/syarat-administrasi";

const items = [
  { icon: "fa-chart-line", title: "Kenaikan Pangkat", slug: "kenaikan-pangkat", color: "blue" },
  { icon: "fa-umbrella", title: "Pensiun", slug: "pensiun", color: "orange" },
  { icon: "fa-award", title: "Satyalancana", slug: "satyalancana", color: "green" },
  { icon: "fa-user-graduate", title: "Tugas Belajar", slug: "tugas-belajar", color: "blue" },
  { icon: "fa-user-check", title: "Pengangkatan PNS", slug: "pengangkatan-pns", color: "orange" },
  { icon: "fa-history", title: "Peninjauan Masa Kerja", slug: "peninjauan-masa-kerja", color: "green" },
  { icon: "fa-graduation-cap", title: "Cantum Gelar", slug: "cantum-gelar", color: "blue" },
  { icon: "fa-user-edit", title: "Uji Kompetensi", slug: "uji-kompetensi", color: "orange" },
  { icon: "fa-sitemap", title: "Layanan JFT", slug: "kenaikan-jenjang-pemberhentian-aktif-kembali-jft", color: "green" },
  { icon: "fa-briefcase", title: "Pengembangan Karir", slug: "pengembangan-karir", color: "blue" },
];

const colorMap: Record<string, string> = {
  blue: "bg-[var(--blue-soft)] text-[var(--bps-blue)]",
  orange: "bg-[var(--orange-soft,#fff3e0)] text-[var(--orange-accent)]",
  green: "bg-[var(--green-soft)] text-[var(--green-accent)]",
};

export default function SyaratAdministrasiPage() {
  return (
    <div className="bg-[#f4f7f9] w-full px-5 py-5">
      <div className="max-w-full mx-auto bg-white px-6 md:px-10 py-9 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-t-[6px] border-[var(--bps-blue)] mb-8">
        <h2 className="text-[var(--bps-blue)] text-xl md:text-2xl font-bold text-center mb-5">
          Layanan Administrasi Kepegawaian
        </h2>
        <p className="text-[var(--text-dark)] text-[15px] md:text-base leading-8 text-center max-w-[1100px] mx-auto">
          Layanan informasi kepegawaian di BPS Provinsi Jawa Tengah menyediakan
          akses yang transparan dan terintegrasi terkait berbagai urusan
          administrasi ASN. Setiap layanan dilengkapi dengan persyaratan
          administrasi yang jelas dan terstandar guna memastikan proses
          berjalan tertib, akuntabel, dan efisien.
        </p>
      </div>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] max-[768px]:[grid-template-columns:repeat(auto-fill,minmax(170px,1fr))] min-[1600px]:grid-cols-5">
        {items.map((item) => (
          <a
            key={item.slug}
            href={`${baseUrl}/${item.slug}?authuser=0`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white no-underline rounded-[20px] px-5 py-9 flex flex-col items-center text-center gap-0 border border-black/5 min-h-[220px] justify-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(30,136,229,0.12)] hover:border-[var(--bps-blue)]"
          >
            <div className={`w-[75px] h-[75px] rounded-[20px] flex items-center justify-center text-3xl mb-5 ${colorMap[item.color]}`}>
              <i className={`fas ${item.icon}`} />
            </div>
            <h3 className="text-[15px] font-bold text-[var(--text-dark)] leading-tight">
              {item.title}
            </h3>
            <div className="mt-5 text-[11px] font-bold text-[var(--bps-blue)] uppercase tracking-wider flex items-center gap-2">
              Lihat Syarat <i className="fas fa-arrow-right" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
