import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/1750568800919.png";
import backgroundpc from "../assets/Frame 21.png";
import backgroundhp from "../assets/Frame 22 (2).png";
import imgGallery1 from "../assets/imgGallery1.png";
import imgGallery2 from "../assets/imgGallery2.png";
import imgGallery3 from "../assets/imgGallery3.png";
import imgGallery4 from "../assets/imgGallery4.png";
import logoEnter from "../assets/EnterManagementKudus-logo.png";
import "../App.css";
import { useParams } from "react-router-dom";
import { QRCode } from "antd";

function App() {
    const { slug } = useParams();
    const decodedString = atob(slug);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Tentukan ukuran layar saat ini
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Misal, layar <= 768px dianggap HP
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const [isOpened, setIsOpened] = useState(false);

    const targetDate = "2025-07-05T18:00:00";

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const target = new Date(targetDate);
        const current = new Date();
        const utcOffset = 7 * 60 * 60 * 1000;
        const currentInWIB = new Date(current.getTime() + current.getTimezoneOffset() * 60 * 1000 + utcOffset);
        const difference = target - currentInWIB;
        if (difference <= 0) return {};
        return {
            hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
            jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
            menit: Math.floor((difference / 1000 / 60) % 60),
            detik: Math.floor((difference / 1000) % 60),
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

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    };

    const pageTransition = {
        hidden: { opacity: 0, y: -200 }, // Posisi awal (saat elemen disembunyikan)
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // Posisi akhir (saat elemen terlihat)
        exit: { opacity: 0, x: 200, transition: { duration: 0.8 } }, // Transisi keluar
    };


    const galleryFade = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
    };

    const galleryItem = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-[#003F99] text-white font-sriracha">
        <motion.img
            src={isMobile ? backgroundhp : backgroundpc} // Gunakan gambar sesuai perangkat
            alt="Background"
            className="absolute inset-0 w-full h-auto object-cover opacity-75 pointer-events-none"
            initial={{ scale: 1.2 }}
            animate={isOpened ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        />


            <AnimatePresence>
                {!isOpened && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
                    >
                        <motion.img
                            src={logo}
                            alt="Logo"
                            className="w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[30vw] mb-10"
                            variants={scaleIn}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.div
                            className="mb-8 text-lg space-y-1 font-playfair"
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                        >
                            <p>Special Invite To:</p>
<p
    className="text-2xl font-bold text-yellow-400 relative"
    style={{
        WebkitTextStroke: "0.25px #d8c600", // Stroke warna hitam
    }}
>
    {decodedString}
</p>
                        </motion.div>
                        <motion.button
                            onClick={() => setIsOpened(true)}
                            className="bg-blue-700 text-gray-200 font-semibold text-lg px-6 py-3 rounded-full shadow-md flex items-center gap-3 hover:bg-blue-600 transition z-20 font-playfair cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
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
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpened && (
                    <motion.div
                        className="absolute left-0 right-0 -bottom-50 p-6 overflow-y-auto font-playfair"
                        style={{ top: 200 }}
                        variants={pageTransition}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="max-w-3xl mx-auto text-center mt-10">
                            <motion.h1
                                className="text-5xl font-bold text-white mb-6"
                                variants={fadeInUp}
                            >
                                Pesona Muria D'Javanese
                            </motion.h1>
                            <motion.p
                                className="text-lg leading-relaxed text-gray-200 mb-4"
                                variants={fadeIn}
                            >
                                Dalam rangka <span className="text-yellow-300">Hari Jadi Koperasi yang ke-76</span>, kami dengan bangga mengundang Anda untuk menghadiri acara:
                            </motion.p>
                            <motion.div
                                className="relative my-8 p-8 bg-gradient-to-l from-blue-900 to-blue-800 rounded-2xl shadow-2xl text-white z-20 border-1 border-yellow-500"
                                variants={galleryFade}
                            >
                                <motion.h1
                                    className="text-3xl font-bold text-yellow-400 tracking-wider"
                                    variants={fadeInUp}
                                >
                                    Lomba Modelling & Fashion Show
                                </motion.h1>
                                <motion.div
                                    className="space-y-4 mb-10 mt-10"
                                    variants={fadeIn}
                                >
                                    <p className="text-center text-xl text-yellow-400">
                                        Tanggal: <span className="text-gray-300 font-semibold">Sabtu, 5 Juli 2025</span>
                                    </p>
                                    <p className="text-center text-xl text-yellow-400">
                                        Pukul: <span className="text-gray-300 font-semibold">18.00 - Selesai</span>
                                    </p>
                                </motion.div>

                                <motion.h2
                                    className="text-2xl font-bold text-yellow-400 mb-4 tracking-wide"
                                    variants={fadeInUp}
                                >
                                    Hitung Mundur
                                </motion.h2>
                                {timerComponents.length ? (
                                    <motion.div
                                        className="flex justify-center gap-2 text-lg"
                                        variants={fadeIn}
                                    >
                                        {Object.entries(timeLeft).map(([key, value]) => (
                                            <div
                                                key={key}
                                                className="flex flex-col items-center bg-white/20 rounded-lg p-2 sm:p-4 shadow-inner w-16 h-16 sm:w-24 sm:h-24"
                                            >
                                                <span className="text-2xl sm:text-4xl font-bold text-white">{value}</span>
                                                <span className="text-xs sm:text-sm font-medium uppercase text-gray-300 mt-1 sm:mt-2">
                                                    {key}
                                                </span>
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.p
                                        className="text-center text-lg sm:text-xl text-yellow-200 font-semibold mt-6"
                                        variants={fadeIn}
                                    >
                                        Acara Sudah Dimulai!
                                    </motion.p>
                                )}




                                <motion.div
                                    className="w-2/3 mx-auto border-t border-yellow-300 opacity-50 my-8"
                                    variants={fadeIn}
                                ></motion.div>

                                <motion.div
                                    className="space-y-6"
                                    variants={fadeIn}
                                >
                                    <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-4">
                                        Syarat dan Ketentuan
                                    </h2>
                                    <ul className="list-disc list-inside text-lg space-y-3 max-w-xl mx-auto text-gray-200">
                                        <li>Laki-laki & Perempuan</li>
                                        <li>Mengisi Formulir Online</li>
                                        <li>Mengirim Foto</li>
                                        <li>
                                            Biaya Pendaftaran: <span className="text-yellow-300 font-bold">Rp150.000</span>
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    className="w-2/3 mx-auto border-t border-yellow-300 opacity-50 my-8"
                                    variants={fadeIn}
                                ></motion.div>

                                <motion.div
                                    className="space-y-6"
                                    variants={fadeIn}
                                >
                                    <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-4">
                                        Kategori
                                    </h2>
                                    <ul className="list-disc list-inside text-lg space-y-3 max-w-xl mx-auto text-gray-200">
                                        <li>Prestasi</li>
                                        <li>Motivasi</li>
                                    </ul>
                                    <p>Anak / Remaja 6-16 Tahun<br />Dewasa 17-25 Tahun</p>
                                    <p className="text-center text-xl mt-6 text-yellow-300">
                                        Tema: <span className="font-bold text-gray-300">Etnik Casual</span>
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="w-2/3 mx-auto border-t border-yellow-300 opacity-50 my-8"
                                    variants={fadeIn}
                                ></motion.div>

                                <motion.div
                                    className="text-center"
                                    variants={fadeIn}
                                >
                                    <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
                                        Lokasi Acara
                                    </h2>
                                    <div className="animate-zoom-in">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.0784547356473!2d110.8417464421937!3d-6.807802809170903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7123c740504c15%3A0x5c953c221017d9c6!2sMarker%20Location!5e0!3m2!1sen!2sid!4v1627990606581!5m2!1sen!2sid"
                                            width="100%"
                                            height="300"
                                            style={{ border: 0, borderRadius: "10px" }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            title="Google Maps Location"
                                        ></iframe>
                                    </div>

                                    <p className="text-gray-300 font-semibold mt-3">Alun-Alun Simpang 7 Kudus</p>
                                </motion.div>
                            </motion.div>

                            <div className="relative mt-10 p-6 bg-gradient-to-l from-blue-900 to-blue-800 rounded-xl shadow-lg text-white max-w-5xl mx-auto z-20 border-1 border-yellow-500">
                                <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Galeri Acara</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Item 1 */}
                                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                                        <img
                                            src={imgGallery1}
                                            alt="Galeri 1"
                                            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-lg font-semibold text-gray-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Sungai Rahtawu</p>
                                        </div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                                        <img
                                            src={imgGallery2}
                                            alt="Galeri 2"
                                            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-lg font-semibold text-gray-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Sungai Rahtawu</p>
                                        </div>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                                        <img
                                            src={imgGallery3}
                                            alt="Galeri 3"
                                            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-lg font-semibold text-gray-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Bukit Puteran</p>
                                        </div>
                                    </div>
                                    {/* Item 4 */}
                                    <div className="relative overflow-hidden rounded-lg shadow-md group">
                                        <img
                                            src={imgGallery4}
                                            alt="Galeri 4"
                                            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-lg font-semibold text-gray-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Bukit Puteran</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

<div className="mt-10 bg-gradient-to-r from-blue-800 to-blue-900 p-8 rounded-2xl shadow-2xl text-white w-full max-w-3xl mx-auto z-20 border border-yellow-500">
    <h1 className="text-3xl font-extrabold text-yellow-400 text-center mb-8 tracking-wide">
        Reservasi Kehadiran
    </h1>
<form className="space-y-8">
    {/* Nama Anda */}
    <div>
        <label className="block text-lg font-semibold text-gray-200 mb-2">
            Nama Anda
        </label>
        <div className="relative">
            <input
                type="text"
                placeholder="Masukkan Nama Anda"
                className="w-full px-4 py-3 rounded-full border border-yellow-500 bg-blue-900 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-300 placeholder-gray-500"
                value={decodedString}
                disabled
            />
            <span className="absolute right-3 top-3.5 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14v7m-4-4h8"
                    />
                </svg>
            </span>
        </div>
    </div>

    {/* Jumlah Tamu */}
    <div>
        <label className="block text-lg font-semibold text-gray-200 mb-2">
            Jumlah Tamu
        </label>
        <div className="relative">
            <input
                type="number"
                min="1"
                placeholder="Masukkan jumlah tamu"
                className="w-full px-4 py-3 rounded-full border border-yellow-500 bg-blue-900 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-300 placeholder-gray-500"
            />
            <span className="absolute right-3 top-3.5 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                </svg>
            </span>
        </div>
    </div>

    {/* Konfirmasi Kehadiran */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <label className="flex items-center gap-2 p-4 rounded-full border border-yellow-500 bg-blue-900 hover:bg-blue-800 transition cursor-pointer shadow-md">
        <input
            type="radio"
            name="kehadiran"
            value="Hadir"
            className="w-5 h-5 focus:ring-2 focus:ring-yellow-300"
        />
        <span className="text-sm font-medium text-gray-300">Hadir</span>
    </label>
    <label className="flex items-center gap-2 p-4 rounded-full border border-yellow-500 bg-blue-900 hover:bg-blue-800 transition cursor-pointer shadow-md">
        <input
            type="radio"
            name="kehadiran"
            value="Tidak Hadir"
            className="w-5 h-5 focus:ring-2 focus:ring-yellow-300"
        />
        <span className="text-sm font-medium text-gray-300">Tidak Hadir</span>
    </label>
</div>


    {/* Tombol Kirim */}
    <div className="text-center">
        <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-gray-300 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 w-full sm:w-auto cursor-pointer hover:scale-105"
        >
            Kirim Reservasi
        </button>
    </div>
</form>

</div>



                            <div className="relative mt-10 p-8 bg-gradient-to-l from-blue-900 to-blue-800 rounded-xl shadow-lg text-white max-w-3xl mx-auto z-20 border-1 border-yellow-500">
                                <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center tracking-wider">
                                    Absensi Kehadiran Tamu
                                </h2>
                                <div className="text-center text-gray-300 mb-6">
                                    <p className="text-xl">Atas Nama:</p>
                                    <p className="text-2xl font-semibold text-yellow-300">{decodedString}</p>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative group bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 rounded-2xl shadow-lg">
                                        <div className="bg-white p-2 rounded-xl transition-transform duration-300 group-hover:scale-105">
                                            <QRCode
                                                value={slug} // Data unik untuk QR Code
                                                renderAs="canvas"
                                                size={isMobile ? 240 : 300} // Ukuran QR Code
                                                level="H" // Tingkat koreksi error
                                                fgColor="#000000" // Warna QR Code
                                                bgColor="#FFFFFF" // Warna latar belakang QR Code
                                                icon={logoEnter}
                                                iconSize={75}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-gray-300 mt-6">
                                    Tunjukkan kode QR ini kepada petugas untuk validasi.
                                </p>
                            </div>


                        </div>

                        <div className="flex items-center justify-center h-full">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[30vw] mb-10"
                            />
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}

export default App;
