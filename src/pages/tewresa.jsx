<AnimatePresence>
    {isOpened && (
        <motion.div
            className="absolute inset-0 min-h-screen p-6 overflow-y-auto font-playfair"
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
                    className="relative my-8 p-8 bg-gradient-to-l from-blue-900 to-blue-800 rounded-2xl shadow-2xl text-white z-20"
                    variants={galleryFade}
                >
                    <motion.h1
                        className="text-3xl font-bold text-yellow-400 tracking-wider"
                        variants={fadeInUp}
                    >
                        Lomba Modelling & Fashion Show
                    </motion.h1>
                    <motion.div
                        className="space-y-4 mb-10"
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
                                    className="flex flex-col items-center bg-white/20 rounded-lg p-4 shadow-inner w-24 h-24"
                                >
                                    <span className="text-4xl font-bold text-white">{value}</span>
                                    <span className="text-sm font-medium uppercase text-gray-400 mt-2">
                                        {key}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.p
                            className="text-xl text-yellow-200 font-semibold"
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
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )}
</AnimatePresence>
