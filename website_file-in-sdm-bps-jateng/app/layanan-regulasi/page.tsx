const baseUrl = "https://sites.google.com/view/file-in-sdm/layanan-regulasi";

const cards = [
  {
    id: "tentang-asn",
    icon: "fa-user-tie",
    title: "Tentang ASN",
    text: "Pengaturan PNS dan PPPK yang tertuang dalam dokumen hukum sebagai dasar manajemen ASN.",
    cta: "Selengkapnya",
    ctaIcon: "fa-chevron-right",
    slug: "tentang-asn",
    video: false,
  },
  {
    id: "manajemen-asn",
    icon: "fa-tasks",
    title: "Manajemen ASN",
    text: "Landasan pengelolaan ASN, mencakup perencanaan, karier, disiplin, hingga hak dan kewajiban.",
    cta: "Buka Dokumen",
    ctaIcon: "fa-chevron-right",
    slug: "manajemen-asn",
    video: false,
  },
  {
    id: "bahan-tayang",
    icon: "fa-file-powerpoint",
    title: "Bahan Tayang",
    text: "Ringkasan peraturan hukum kepegawaian dalam format visual (PPT) untuk referensi praktis.",
    cta: "Unduh PPT",
    ctaIcon: "fa-download",
    slug: "ppt",
    video: false,
  },
  {
    id: "video",
    icon: "fa-play-circle",
    title: "Video Paparan",
    text: "Penjelasan ringkas mengenai kebijakan manajemen ASN melalui media audio visual interaktif.",
    cta: "Tonton Video",
    ctaIcon: "fa-video",
    slug: "video",
    video: true,
  },
];

export default function LayananRegulasiPage() {
  return (
    <div className="bg-[var(--bg-light)] px-5 py-12">
      <div className="max-w-[1400px] mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            id={card.id}
            className={`bg-white rounded-[20px] overflow-hidden flex flex-col shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(30,136,229,0.15)] border ${
              card.video ? "border-2 border-[var(--orange-accent)]" : "border-[rgba(30,136,229,0.1)]"
            }`}
          >
            <div className="px-4 py-6 text-center bg-[var(--blue-soft)] border-b-4 border-[var(--orange-accent)]">
              <div className={`text-3xl mb-2.5 ${card.video ? "text-[#d32f2f]" : "text-[var(--blue-deep)]"}`}>
                <i className={`fas ${card.icon}`} />
              </div>
              <h3 className="text-[15px] font-bold text-[var(--blue-deep)] uppercase tracking-wide">
                {card.title}
              </h3>
            </div>
            <div className="px-5 py-5 flex flex-col flex-1">
              <p className="text-[13px] leading-relaxed text-[var(--text-muted)] mb-5 text-justify">
                {card.text}
              </p>
              <a
                href={`${baseUrl}/${card.slug}?authuser=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto no-underline bg-[var(--orange-accent)] hover:bg-[var(--orange-hover)] text-white px-4 py-3 rounded-[10px] text-center font-semibold text-[13px] flex items-center justify-center gap-2 transition"
              >
                {card.cta} <i className={`fas ${card.ctaIcon}`} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
