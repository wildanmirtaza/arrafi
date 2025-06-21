import React, { useState, useEffect } from "react";
import logo from "./assets/ChatGPT Image 21 Jun 2025, 12.45.49.png";
import backgroundpc from "./assets/Frame 21.png";
import imgGallery1 from "./assets/imgGallery1.png";
import imgGallery2 from "./assets/imgGallery2.png";
import imgGallery3 from "./assets/imgGallery3.png";
import imgGallery4 from "./assets/imgGallery4.png";
import "./App.css"; // Tambahkan file CSS untuk mengimpor font

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return {};

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) return null;
    return (
      <span key={interval} className="mx-1">
        <strong>{timeLeft[interval]}</strong> {interval}
      </span>
    );
  });

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#00409A] text-white font-sriracha">
      {/* Background image */}
      <img
        src={backgroundpc}
        alt="Background"
        className="absolute inset-0 w-full h-auto object-cover opacity-75 z-10 pointer-events-none"
      />


      {/* Halaman Pembuka */}
      {!isOpened && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-700">
          <img
            src={logo}
            alt="Logo"
            className="w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[30vw] mb-10"
          />
          <div className="mb-8 text-lg space-y-1 font-playfair">
            <p>Special Invite To:</p>
            <p className="text-2xl font-bold text-yellow-400">Yoga Adhi Prawira</p>
            {/* <p>di Tempat</p> */}
          </div>
          <button
            onClick={() => setIsOpened(true)}
            className="bg-blue-700 text-gray-200 font-semibold text-lg px-6 py-3 rounded-full shadow-md flex items-center gap-3 hover:bg-blue-600 transition z-20 font-playfair"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.5 5.25a1.5 1.5 0 001.5 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Buka Undangan
          </button>
        </div>
      )}

      {/* Konten Utama Undangan */}
      {isOpened && (
        <div className="absolute inset-0 p-6 overflow-y-auto animate-fade-in font-playfair">
          <div className="max-w-3xl mx-auto text-center mt-10">
            <h1 className="text-5xl font-bold text-white mb-6">Pesona Muria D'Javanese</h1>
            <p className="text-lg leading-relaxed text-gray-200 mb-4">
              Dalam rangka <span className="text-yellow-300">Hari Jadi Koperasi yang ke-76</span>, kami dengan bangga mengundang Anda untuk menghadiri acara:
            </p>
            <div className="relative my-8 p-8 bg-gradient-to-l from-blue-900 to-blue-800 rounded-2xl shadow-2xl text-white z-20">
              {/* Judul Utama */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-yellow-400 tracking-wider animate-fade-in">
                  Lomba Modelling & Fashion Show
                </h1>
              </div>

              {/* Informasi Acara */}
              <div className="space-y-4 mb-10 animate-slide-up">
                <p className="text-center text-xl text-yellow-400">
                  Tanggal: <span className="text-gray-300 font-semibold">Sabtu, 5 Juli 2025</span>
                </p>
                <p className="text-center text-xl text-yellow-400">
                  Pukul: <span className="text-gray-300 font-semibold">18.00 - Selesai</span>
                </p>
              </div>

              {/* Divider */}
              <div className="w-2/3 mx-auto border-t border-yellow-300 opacity-50 my-8"></div>

              {/* Syarat dan Ketentuan */}
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-4 animate-fade-in">
                  Syarat dan Ketentuan
                </h2>
                <ul className="list-disc list-inside text-lg space-y-3 max-w-xl mx-auto text-gray-200 animate-slide-up">
                  <li>Laki-laki & Perempuan</li>
                  <li>Mengisi Formulir Online</li>
                  <li>Mengirim Foto</li>
                  <li>
                    Biaya Pendaftaran: <span className="text-yellow-300 font-bold">Rp150.000</span>
                  </li>
                </ul>
              </div>

              {/* Divider */}
              <div className="w-2/3 mx-auto border-t border-yellow-300 opacity-50 my-8"></div>

              {/* Kategori dan Tema */}
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-4 animate-fade-in">
                  Kategori
                </h2>
                <ul className="list-disc list-inside text-lg space-y-3 max-w-xl mx-auto text-gray-200 animate-slide-up">
                  <li>Prestasi</li>
                  <li>Motivasi</li>
                </ul>
                <p>Anak / Remaja 6-16 Tahun<br />Dewasa 17-25 Tahun</p>
                <p className="text-center text-xl mt-6 animate-fade-in text-yellow-300">
                  Tema: <span className="font-bold text-gray-300">Etnik Casual</span>
                </p>
              </div>

              {/* Divider */}
              <div className="w-2/3 mx-auto border-t border-yellow-300 opacity-50 my-8"></div>

              {/* Lokasi Map */}
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4 animate-fade-in">
                  Lokasi Acara
                </h2>
                <div className="animate-zoom-in">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0784547356473!2d110.83088567490513!3d-6.8049538931668025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7123c740504c15%3A0x5c953c221017d9c6!2sAlun-Alun%20Simpang%207%20Kudus!5e0!3m2!1sen!2sid!4v1627990606581!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps Location"
                  ></iframe>
                </div>
                <p className="text-gray-300 font-semibold mt-3">Alun-Alun Simpang 7 Kudus</p>
              </div>
            </div>

            <div className="relative mt-10 p-6 bg-gradient-to-l from-blue-900 to-blue-800 rounded-xl shadow-lg text-white max-w-5xl mx-auto z-20">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Galeri Acara</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Item 1 */}
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={imgGallery1}
                    alt="Galeri 1"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <p className="text-lg font-semibold text-gray-300">Sungai Rahtawu</p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={imgGallery2}
                    alt="Galeri 2"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <p className="text-lg font-semibold text-gray-300">Sungai Rahtawu</p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={imgGallery3}
                    alt="Galeri 3"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <p className="text-lg font-semibold text-gray-300">Bukit Puteran</p>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={imgGallery4}
                    alt="Galeri 4"
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <p className="text-lg font-semibold text-gray-300">Bukit Puteran</p>
                  </div>
                </div>
              </div>
            </div>




            <div className="flex items-center justify-center h-full">
              <img
                src={logo}
                alt="Logo"
                className="w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[30vw] mb-10"
              />
            </div>



          </div>
        </div>
      )}
    </div>
  );
}

export default App;