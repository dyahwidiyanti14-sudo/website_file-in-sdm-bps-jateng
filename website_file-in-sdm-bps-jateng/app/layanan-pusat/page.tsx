const baseUrl = "https://sites.google.com/view/file-in-sdm/layanan-pusat";

const items = [
  { id: "bps", icon: "fa-chart-line", title: "Badan Pusat Statistik", slug: "badan-pusat-statistik", color: "blue" },
  { id: "kearsipan", icon: "fa-archive", title: "Kearsipan", slug: "kearsipan", color: "orange" },
  { id: "hukum-ham", icon: "fa-balance-scale", title: "Penyuluh Hukum & HAM", slug: "penyuluh-hukum-ham", color: "green" },
  { id: "keuangan", icon: "fa-wallet", title: "Analis Keuangan", slug: "analis-keuangan", color: "blue" },
  { id: "pbj", icon: "fa-shopping-cart", title: "PBJ", slug: "pbj", color: "orange" },
  { id: "barang", icon: "fa-boxes", title: "Penata Laksana Barang", slug: "penata-laksana-barang", color: "green" },
  { id: "sdm", icon: "fa-users-cog", title: "Analis SDM", slug: "analis-sdm", color: "blue" },
  { id: "humas", icon: "fa-bullhorn", title: "Pranata HUMAS", slug: "pranata-humas", color: "orange" },
];

const borderMap: Record<string, string> = {
  blue: "border-t-[var(--blue-primary)]",
  orange: "border-t-[var(--orange-accent)]",
  green: "border-t-[var(--green-dark)]",
};

const iconBgMap: Record<string, string> = {
  blue: "bg-[var(--blue-soft)] text-[var(--blue-primary)]",
  orange: "bg-[#fff3e0] text-[var(--orange-accent)]",
  green: "bg-[var(--green-soft)] text-[var(--green-dark)]",
};

export default function LayananPusatPage() {
  return (
    <div className="bg-[#fafafa] w-full py-10">
      <div className="text-center mb-12 px-5">
        <h2 className="text-[var(--blue-primary)] text-2xl md:text-3xl font-bold mb-4">
          Fitur Layanan Pusat
        </h2>
        <p className="text-[#666] max-w-[900px] mx-auto text-[15px] md:text-base leading-8">
          Selamat datang di fitur Layanan Pusat. Halaman ini memuat akses
          informasi dan layanan strategis berdasarkan masing-masing jabatan
          fungsional untuk mendukung efisiensi kerja Anda.
        </p>
      </div>

      <div className="grid gap-6 px-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] min-[1400px]:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.slug}
            id={item.id}
            href={`${baseUrl}/${item.slug}?authuser=0`}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white rounded-[20px] px-6 py-10 text-center no-underline border flex flex-col items-center justify-center gap-0 shadow-[0_5px_15px_rgba(0,0,0,0.03)] min-h-[250px] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_35px_rgba(0,0,0,0.1)] hover:border-transparent border-t-[6px] ${borderMap[item.color]} border-[#eee]`}
          >
            <div className={`w-[85px] h-[85px] rounded-full flex items-center justify-center text-4xl mb-5 ${iconBgMap[item.color]}`}>
              <i className={`fas ${item.icon}`} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-dark)]">{item.title}</h3>
            <div className="mt-5 text-[13px] font-semibold text-[var(--blue-primary)] uppercase tracking-wider flex items-center gap-2">
              Buka Layanan <i className="fas fa-arrow-right" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
