export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  wilayah: string | null;
  tugas: string;
};

const RAW_BASE =
  "https://raw.githubusercontent.com/dyahwidiyanti14-sudo/file-in_sdm/c5b0d8f0fc651bcb4867dceb91430a4defd4dd5d/file-in_sdm";
const BLOB_BASE =
  "https://github.com/dyahwidiyanti14-sudo/file-in_sdm/blob/main/file-in_sdm";

export const teamMembers: TeamMember[] = [
  {
    id: "sobirin",
    name: "Muhamad Sobirin S.Si",
    role: "Ketua Tim",
    photo: `${BLOB_BASE}/Sobirin.png?raw=true`,
    wilayah: null,
    tugas:
      "Memimpin koordinasi pelayanan administrasi SDM dan hukum di lingkungan BPS Provinsi Jawa Tengah.",
  },
  {
    id: "renny",
    name: "Renny Widyaningrum S. Psi.",
    role: "PIC Satker",
    photo: `${BLOB_BASE}/Renny.png?raw=true`,
    wilayah:
      "3300_Provinsi Jawa Tengah, 3306_Kab. Purworejo, 3308_Kab. Magelang, 3323_Kab. Temanggung, 3371_Kota Magelang",
    tugas: "Pengelolaan SDM Satker Wilayah III.",
  },
  {
    id: "rossy",
    name: "Aulia Rossy Riswandha S.AP",
    role: "PIC Satker",
    photo: `${RAW_BASE}/Rossy.png`,
    wilayah: "3305_Kab. Kebumen, 3307_Kab. Wonosobo",
    tugas: "Pengelolaan SDM Satker Wilayah III.",
  },
  {
    id: "tutut",
    name: "Supri Tuti Ekawati SE",
    role: "PIC Satker",
    photo: `${RAW_BASE}/Tutut.png`,
    wilayah:
      "3325_Kab. Batang, 3326_Kab. Pekalongan, 3327_Kab. Pemalang, 3328_Kab. Tegal, 3329_Kab. Brebes, 3375_Kota Pekalongan",
    tugas: "Pengelolaan SDM Satker Wilayah IV.",
  },
  {
    id: "sisca",
    name: "Sisca Agustin Diani Budiman S.Si.",
    role: "PIC Satker",
    photo: `${RAW_BASE}/Sisca.png`,
    wilayah:
      "3315_Kab. Grobogan, 3321_Kab. Demak, 3322_Kab. Semarang, 3324_Kab. Kendal, 3373_Kota Salatiga, 3374_Kota Semarang",
    tugas: "Pengelolaan SDM Satker Wilayah I.",
  },
  {
    id: "utami",
    name: "Lestari Utaminingsih SST",
    role: "PIC Satker",
    photo: `${BLOB_BASE}/Utami.png?raw=true`,
    wilayah:
      "3310_Kab. Klaten, 3314_Kab. Sragen, 3311_Kab. Sukoharjo, 3309_Kab. Boyolali, 3312_Kab. Wonogiri, 3372_Kota Surakarta, 3313_Kab. Karanganyar",
    tugas: "Pengelolaan SDM Satker Wilayah V.",
  },
  {
    id: "noor",
    name: "Noor Aisyah",
    role: "PIC Satker",
    photo: `${RAW_BASE}/Noor.png`,
    wilayah:
      "3316_Kab. Blora, 3317_Kab. Rembang, 3318_Kab. Pati, 3319_Kab. Kudus, 3320_Kab. Jepara",
    tugas: "Pengelolaan SDM Satker Wilayah II.",
  },
  {
    id: "wiharyati",
    name: "Wiharyati, S.H., M.Kn.",
    role: "PIC Satker",
    photo: `${RAW_BASE}/Wiharyati.png`,
    wilayah:
      "3301_Kab. Cilacap, 3302_Kab. Banyumas, 3303_Kab. Purbalingga, 3304_Kab. Banjarnegara",
    tugas: "Pengelolaan SDM Satker Wilayah III & Administrasi Hukum.",
  },
  {
    id: "yayuk",
    name: "Siti Rahayu A.Md. Kom",
    role: "Admin SIMPAN.SDM",
    photo: `${BLOB_BASE}/Yayuk.png?raw=true`,
    wilayah: null,
    tugas: "Pengelolaan aplikasi SIMPAN.SDM dan administrasi kepegawaian.",
  },
  {
    id: "dyah",
    name: "Dyah Widiyanti A.Md. Bns.",
    role: "Admin FILE-IN SDM",
    photo: `${RAW_BASE}/Dyah.png`,
    wilayah: null,
    tugas: "Digitalisasi Arsip Kepegawaian & Pengelolaan Dashboard FILE-IN SDM.",
  },
];
