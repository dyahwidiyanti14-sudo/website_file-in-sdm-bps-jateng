export default function Footer() {
  return (
    <>
      <div className="bg-[var(--paper-2)] border-t-[3px] border-[var(--brand-orange)] py-5">
        <div className="max-w-[1300px] mx-auto px-5 flex items-center gap-4 flex-wrap">
          <div className="w-[100px] h-[100px] bg-white rounded-md shrink-0 flex items-center justify-center text-slate-300">
            <i className="fas fa-qrcode text-3xl" />
          </div>
          <p className="text-sm text-[var(--ink)]">
            QnA: jika ada pertanyaan lebih lanjut silakan{" "}
            <a href="/qna" className="font-semibold text-[var(--navy-2)] hover:underline">
              hubungi admin
            </a>{" "}
            atau scan barcode di samping.
          </p>
        </div>
      </div>

      <footer className="bg-[var(--navy)] text-[#B8C6D4] py-12 mt-auto">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <h6 className="text-white font-bold mb-2.5">
                Kepegawaian BPS Provinsi Jawa Tengah
              </h6>
              <p className="text-sm mb-1">Kantor BPS Provinsi Jawa Tengah</p>
              <p className="text-sm mb-1">
                (Kepala Bagian Umum Badan Pusat Statistik Provinsi Jawa Tengah)
              </p>
              <p className="text-sm mb-1">Jln. Pahlawan No. 6, Semarang 50241</p>
              <p className="text-sm mb-1">T. (024) 8412802, 8412804, 8412805</p>
              <p className="text-sm mb-1">F. (024) 8311195</p>
              <p className="text-sm">
                e-mail:{" "}
                <a href="mailto:jateng@bps.go.id" className="hover:text-white transition">
                  jateng@bps.go.id
                </a>
              </p>
            </div>
            <div className="lg:col-span-7">
              <iframe
                src="https://www.google.com/maps?q=Jl.+Pahlawan+No.6,+Pleburan,+Kec.+Semarang+Sel.,+Kota+Semarang,+Jawa+Tengah+50241&output=embed"
                width="100%"
                height="230"
                style={{ border: 0, borderRadius: "0.6rem" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta lokasi Kantor BPS Provinsi Jawa Tengah"
              />
            </div>
          </div>
          <hr className="my-8 border-white/10" />
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} FILE-IN SDM &mdash; BPS Provinsi Jawa Tengah
          </p>
        </div>
      </footer>
    </>
  );
}
