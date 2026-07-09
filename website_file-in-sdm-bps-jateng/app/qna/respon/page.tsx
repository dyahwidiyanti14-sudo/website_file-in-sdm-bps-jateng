"use client";

import { useEffect, useState } from "react";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo5Tcbkzj5ETe_NdNrwJdI0yJyYHtCtQIaFEL3GU3RAZKZIVZmGlsOI4xmct1pas2ov-DPVqHjo4xG/pub?gid=1066568206&single=true&output=csv";

type Row = { kategori: string; topik: string; tanya: string; jawab: string };

function parseCsv(text: string): Row[] {
  const rows = text.split(/\r?\n/).filter((r) => r.trim() !== "");
  if (rows.length <= 1) return [];
  const dataRows = rows.slice(1);
  const splitRegex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;

  return dataRows
    .reverse()
    .map((row) => {
      const cols = row.split(splitRegex);
      const clean = (v?: string) => (v || "").replace(/"/g, "").trim();
      return {
        kategori: clean(cols[0]) || "Umum",
        topik: clean(cols[1]) || "-",
        tanya: clean(cols[2]) || "-",
        jawab: clean(cols[3]),
      };
    });
}

export default function ResponQnaPage() {
  const [rows, setRows] = useState<Row[] | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const res = await fetch(`${CSV_URL}&t=${Date.now()}`);
        const text = await res.text();
        if (!cancelled) {
          setRows(parseCsv(text));
          setLastUpdated(new Date().toLocaleTimeString("id-ID") + " WIB");
        }
      } catch (err) {
        console.error("Gagal memuat data:", err);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-[#f8fafc] px-5 py-6">
      <div className="max-w-[1250px] mx-auto bg-white rounded-[15px] p-6 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
        <div className="text-center mb-6 border-b-2 border-slate-100 pb-4">
          <h1 className="text-[var(--primary-navy)] m-0 text-xl md:text-2xl font-bold">
            Monitoring Respon Pertanyaan Pegawai
          </h1>
          <p className="text-sm text-slate-500 mt-1.5">
            {lastUpdated ? `Terakhir diperbarui: ${lastUpdated}` : "Sinkronisasi Data FILE-IN SDM..."}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr>
                <th className="w-[15%] bg-[#f8fafc] p-3 text-left text-[11px] uppercase border-b-2 border-slate-200 text-slate-500">Topik</th>
                <th className="w-[50%] bg-[#f8fafc] p-3 text-left text-[11px] uppercase border-b-2 border-slate-200 text-slate-500">Pertanyaan Pegawai</th>
                <th className="w-[35%] bg-[#f8fafc] p-3 text-left text-[11px] uppercase border-b-2 border-slate-200 text-slate-500">Tanggapan Admin</th>
              </tr>
            </thead>
            <tbody>
              {rows === null && (
                <tr>
                  <td colSpan={3} className="text-center py-12 text-slate-500">Memuat data...</td>
                </tr>
              )}
              {rows !== null && rows.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-12 text-slate-500">Belum ada data pertanyaan.</td>
                </tr>
              )}
              {rows?.map((row, i) => {
                const isWaiting = !row.jawab || row.jawab === "-";
                return (
                  <tr key={i}>
                    <td className="p-4 align-top border-b border-slate-100 text-sm">
                      <div className="bg-sky-100 text-sky-700 px-3 py-1.5 rounded-md font-bold text-[11px] inline-block mb-1.5 uppercase border border-sky-200">
                        {row.topik}
                      </div>
                      <span className="block text-[11px] text-slate-400 mt-0.5">
                        <i className="fas fa-tag" /> {row.kategori}
                      </span>
                    </td>
                    <td className="p-4 align-top border-b border-slate-100 text-sm">
                      <div className="bg-sky-50 text-sky-700 px-4 py-3 rounded-lg leading-relaxed font-medium border border-sky-100">
                        {row.tanya}
                      </div>
                    </td>
                    <td className="p-4 align-top border-b border-slate-100 text-sm">
                      <div
                        className={`p-3 rounded-[10px] text-[13px] border ${
                          isWaiting
                            ? "bg-orange-50 border-orange-200 text-orange-800"
                            : "bg-green-50 border-green-200 text-green-800"
                        }`}
                      >
                        <strong className="block mb-1">
                          <i className="fas fa-user-shield" /> Tim SDM:
                        </strong>
                        {isWaiting
                          ? "Pertanyaan telah diterima, mohon tunggu tanggapan admin SDM & Hukum."
                          : row.jawab}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
