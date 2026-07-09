export type AgendaItem = {
  id: string;
  status: "selesai" | "berlangsung" | "mendatang";
  statusLabel: string;
  agendaLabel: string;
  title: string;
  description: string;
};

// Placeholder data — replace with real agenda source (e.g. Google Sheets CSV)
// once available, following the same pattern used in the QnA response page.
export const agendaList: AgendaItem[] = [
  {
    id: "agenda-00",
    status: "selesai",
    statusLabel: "SELESAI — 6 JULI 2026",
    agendaLabel: "AGENDA 00",
    title: "Penyusunan dan Pemutakhiran ABK di Lingkungan BPS Provinsi Jawa Tengah",
    description:
      "Penyusunan dan pemutakhiran Analisis Beban Kerja (ABK) sebagai tindak lanjut Rakornas Kesestamaan 27-30 Juni 2026, sesuai surat No. B-1350/33000/KP.300/2026 tanggal 1 Juli 2026.",
  },
  {
    id: "agenda-01",
    status: "selesai",
    statusLabel: "SELESAI — 1 JULI 2026",
    agendaLabel: "AGENDA 01",
    title: "Pelantikan dan Pengambilan Sumpah Jabatan Administrator",
    description:
      "Pelantikan dan Pengambilan Sumpah Jabatan Administrator atas nama Rumilah Natratilova, S.Si, M.Ec.Dev., sesuai surat No. B-205/33000/KP.630/2026.",
  },
  {
    id: "agenda-02",
    status: "selesai",
    statusLabel: "SELESAI — 29 JUNI 2026",
    agendaLabel: "AGENDA 02",
    title: "Seleksi Pengisian Jabatan Statistisi Ahli Muda",
    description:
      "Sesuai surat No. B-1299/33000/KP.300/2026 tanggal 25 Juni 2026.",
  },
];
