"use client";

const links: Record<string, string> = {
  hukum:
    "https://script.google.com/macros/s/AKfycbyZQ_wAb-LaVYy6v9k0xtM_f-nbzFXMXMLNSN7u8SAzWe7c1p3sGKrAOEJWL5Y1ez4XQA/exec",
  kepegawaian:
    "https://script.google.com/macros/s/AKfycbyOaJCZ8o9RdWdt_GgZPRKPdLh4yDweka-EjOKBPCwJW1B16myKok9lhMQ317Fn7kV4/exec",
  sk: "https://script.google.com/macros/s/AKfycbwx6DfMs9mwxQOfGwdsZ0TJnEWi9Gzeuwr5r9iDJOpcHWbsAeRWQWutj5_RiHk0pcriqg/exec",
  skp: "https://script.google.com/macros/s/AKfycby42uUILbCLkNkcdtEzJRms_j0Shir7dn7-C3DaCHKJ4wvsdnxXtxG136BjyCo6qEYL/exec",
  ppid:
    "https://script.google.com/macros/s/AKfycbzU45ZnmlzvyMgiZhYLqMYo7oLoE8-Jv5UceOxb8aB0TNPrF8nmqhkVmCE-BJyMyzq6/exec",
};

const cards = [
  { key: "hukum", icon: "fa-balance-scale", title: "Hukum & Kerjasama", color: "blue", label: "Buka Layanan" },
  { key: "kepegawaian", icon: "fa-user-lock", title: "Arsip Kepegawaian", color: "orange", label: "Buka Layanan" },
  { key: "ppid", icon: "fa-info-circle", title: "Layanan PPID", color: "green", label: "Akses Terbatas" },
  { key: "sk", icon: "fa-file-alt", title: "SK Pegawai", color: "purple", label: "Buka Layanan" },
  { key: "skp", icon: "fa-clipboard-check", title: "SKP Pegawai", color: "teal", label: "Buka Layanan" },
];

const colorMap: Record<string, { icon: string; bg: string; border: string }> = {
  blue: { icon: "text-[var(--blue-main)]", bg: "bg-[var(--blue-main)]", border: "hover:border-b-[var(--blue-main)]" },
  orange: { icon: "text-[var(--orange-main)]", bg: "bg-[var(--orange-main)]", border: "hover:border-b-[var(--orange-main)]" },
  green: { icon: "text-[var(--green-main)]", bg: "bg-[var(--green-main)]", border: "hover:border-b-[var(--green-main)]" },
  purple: { icon: "text-[var(--purple-royal)]", bg: "bg-[var(--purple-royal)]", border: "hover:border-b-[var(--purple-royal)]" },
  teal: { icon: "text-[var(--teal-main)]", bg: "bg-[var(--teal-main)]", border: "hover:border-b-[var(--teal-main)]" },
};

export default function ArsipKepegawaianPage() {
  const handleAccess = (type: string) => {
    const url = links[type];
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center gap-8 px-3 py-9 bg-[var(--bg-light)]">
      <div className="w-full max-w-[1500px] bg-white px-6 md:px-8 py-6 rounded-[20px] border-l-[6px] border-[var(--blue-main)] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
        <p className="text-[15px] leading-7 text-slate-600 text-justify">
          <i className="fas fa-shield-alt mr-2.5 text-[var(--blue-main)]" />
          Dalam menjaga keamanan data dan kerahasiaan informasi sesuai dengan
          protokol manajemen ASN, kami informasikan bahwa akses detail terhadap{" "}
          <strong>Arsip Kepegawaian</strong> pada dashboard ini bersifat
          terbatas. Akses penuh hanya diperuntukkan bagi internal{" "}
          <strong>Tim SDM &amp; Hukum BPS Provinsi Jawa Tengah</strong>. Kami
          memohon maaf yang sebesar-besarnya kepada rekan pegawai di luar tim
          tersebut atas ketidaknyamanan ini, karena kebijakan ini diterapkan
          demi melindungi privasi dan integritas data seluruh pegawai.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-stretch gap-5 w-full max-w-[1500px]">
        {cards.map((card) => {
          const c = colorMap[card.color];
          return (
            <button
              key={card.key}
              onClick={() => handleAccess(card.key)}
              className={`bg-white flex-1 min-w-[180px] px-5 py-8 rounded-[25px] text-center border border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between items-center gap-4 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-b-[6px] ${c.border} group`}
            >
              <div className={`text-[50px] ${c.icon} transition-transform duration-500 group-hover:[transform:rotateY(180deg)]`}>
                <i className={`fas ${card.icon}`} />
              </div>
              <h3 className="font-bold text-[15px] text-[var(--text-dark)] min-h-[45px] flex items-center justify-center">
                {card.title}
              </h3>
              <span className={`w-full text-white font-semibold text-[13px] rounded-full px-4 py-2.5 ${c.bg}`}>
                {card.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
