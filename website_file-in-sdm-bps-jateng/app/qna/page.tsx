"use client";

import { useRef, useState } from "react";

export default function QnaPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    setTimeout(() => setSubmitted(true), 1000);
  };

  const resetForm = () => {
    formRef.current?.reset();
    setSubmitted(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-5 bg-gradient-to-br from-[#e0eafc] to-[#cfdef3]">
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={handleSubmit}
        title="hidden"
      />

      <div className="w-full max-w-[850px] bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,86,179,0.15)] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0056b3] to-[#00d2ff]" />

        {!submitted ? (
          <div>
            <div className="text-center mb-9">
              <h2 className="bg-gradient-to-r from-[#0056b3] to-[#007bff] bg-clip-text text-transparent text-3xl md:text-[2.2rem] font-extrabold m-0">
                Saran &amp; Kritik
              </h2>
              <p className="text-[#5a67d8] mt-2.5">
                Umpan balik Anda sangat berarti bagi pengembangan{" "}
                <strong>FILE-IN SDM</strong>.
              </p>
            </div>

            <form
              ref={formRef}
              id="gform"
              action="https://docs.google.com/forms/d/e/1FAIpQLSf1u54wh5TfqQ2dMxh9XADdPyncWzuwDqOXAVX_L9ZKttNpeA/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => setTimeout(handleSubmit, 0)}
              className="flex flex-col gap-5"
            >
              <FormField icon="fa-user-circle" name="entry.890026272" placeholder="Nama Lengkap" required />
              <FormField icon="fa-at" name="entry.1325366064" type="email" placeholder="Alamat Email" required />
              <FormField icon="fa-mobile-alt" name="entry.244484468" placeholder="Nomor WhatsApp/HP" required />
              <FormField icon="fa-landmark" name="entry.1790908260" placeholder="Instansi / Satuan Kerja" required />

              <div className="relative">
                <select
                  name="entry.1334569255"
                  required
                  defaultValue=""
                  className="w-full pl-14 pr-5 py-4 border-2 border-[#edf2f7] bg-[#f8fafc] text-[15px] rounded-2xl outline-none transition focus:border-[#0056b3] focus:bg-white"
                >
                  <option value="" disabled>Pilih Kategori Pesan</option>
                  <option value="Saran & Kritik">Saran & Kritik</option>
                  <option value="Pertanyaan">Pertanyaan</option>
                </select>
                <i className="fas fa-layer-group absolute left-5 top-1/2 -translate-y-1/2 text-[#0056b3]" />
              </div>

              <FormField icon="fa-thumbtack" name="entry.1222751118" placeholder="Topik (Contoh: Kenaikan Pangkat, Diklat, dll)" required />

              <div className="relative">
                <textarea
                  name="entry.261587200"
                  rows={4}
                  placeholder="Tuliskan detail pesan Anda..."
                  required
                  className="w-full pl-14 pr-5 pt-5 pb-4 border-2 border-[#edf2f7] bg-[#f8fafc] text-[15px] rounded-2xl outline-none transition resize-y focus:border-[#0056b3] focus:bg-white"
                />
                <i className="fas fa-pen-fancy absolute left-5 top-[30px] text-[#0056b3]" />
              </div>

              <div className="relative">
                <select
                  name="entry.173619699"
                  required
                  defaultValue=""
                  className="w-full pl-14 pr-5 py-4 border-2 border-[#edf2f7] bg-[#f8fafc] text-[15px] rounded-2xl outline-none transition focus:border-[#0056b3] focus:bg-white"
                >
                  <option value="" disabled>Tingkat Kepuasan Layanan (1-5)</option>
                  <option value="5">⭐⭐⭐⭐⭐ - Sangat Memuaskan</option>
                  <option value="4">⭐⭐⭐⭐ - Memuaskan</option>
                  <option value="3">⭐⭐⭐ - Cukup</option>
                  <option value="2">⭐⭐ - Kurang</option>
                  <option value="1">⭐ - Sangat Kurang</option>
                </select>
                <i className="fas fa-heart absolute left-5 top-1/2 -translate-y-1/2 text-[#0056b3]" />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-br from-[#0056b3] to-[#00d2ff] text-white rounded-2xl font-bold text-lg uppercase tracking-wider shadow-[0_10px_25px_rgba(0,86,179,0.2)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,86,179,0.3)]"
              >
                Kirim Sekarang
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="bg-[#52c41a] text-white w-20 h-20 leading-[80px] rounded-full text-4xl mx-auto mb-5">
              <i className="fas fa-check" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pesan Terkirim!</h3>
            <p className="mb-6">
              Terima kasih atas kontribusi Anda untuk kemajuan{" "}
              <strong>BPS Provinsi Jawa Tengah</strong>.
            </p>
            <button
              onClick={resetForm}
              className="bg-[#0056b3] text-white border-none px-8 py-3 rounded-[10px] font-semibold cursor-pointer"
            >
              Kirim Pesan Lainnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function FormField({
  icon,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  icon: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full pl-14 pr-5 py-4 border-2 border-[#edf2f7] bg-[#f8fafc] text-[15px] rounded-2xl outline-none transition focus:border-[#0056b3] focus:bg-white"
      />
      <i className={`fas ${icon} absolute left-5 top-1/2 -translate-y-1/2 text-[#0056b3]`} />
    </div>
  );
}
