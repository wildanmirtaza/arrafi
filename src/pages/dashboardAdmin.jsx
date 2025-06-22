import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import backgroundpc from "../assets/backgroundpc.png";
import backgroundhp from "../assets/backgroundhp.png";
import { message } from "antd";
import backgroundpc2 from "../assets/backgroundpc2.png";
import backgroundhp2 from "../assets/backgroundhp2.png";
import { MdQrCodeScanner } from 'react-icons/md';
import { TbChecklist } from 'react-icons/tb';
import { LuClipboardList } from 'react-icons/lu';
import { IoPeopleSharp } from 'react-icons/io5';
import { FiPlus } from 'react-icons/fi';
import { IoIosSend } from 'react-icons/io';

const AdminGuestList = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [guests, setGuests] = useState([]);
    const [dataReservasi, setDataReservasi] = useState([]);
    const [dataKehadiran, setDataKehadiran] = useState([]);
    const [isEdited, setIsEdited] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("Daftar Tamu");

    const addGuestRow = () => {
        setGuests([...guests, { id: Date.now(), name: '', link: '', table: '' }]);
        setIsEdited(true);
    };

    const updateGuestData = (id, field, value) => {
        setGuests(guests.map((guest) => (guest.id === id ? { ...guest, [field]: value } : guest)));
        setIsEdited(true);
    };

    const saveChanges = () => {
        console.log('Saved guests:', guests);
        setIsEdited(false);
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const generateLink = (name) => {
        return name ? btoa(name.trim()) : '';
    };


    return (
        <>
            {contextHolder}

            <div
                className="relative h-screen w-screen overflow-hidden text-white font-sriracha"
                style={{
                    backgroundImage: `url(${isMobile ? backgroundhp2 : backgroundpc2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <motion.img
                    src={isMobile ? backgroundhp : backgroundpc}
                    alt="Background"
                    className="absolute inset-0 w-full h-auto object-cover opacity-75 pointer-events-none"
                    initial={{ scale: 1.2 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="p-6 bg-gradient-to-l from-yellow-900/20 to-yellow-800/20 text-white font-sriracha rounded-xl shadow-lg max-w-4xl mx-auto mt-10 z-20 border-1 border-yellow-400">
                    <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">{selectedMenu}</h1>
                    {selectedMenu === "Daftar Tamu" && (
                        guests.length > 0 ? (
                            <div className="overflow-x-hidden">
                                <div className="max-h-[70vh] overflow-y-auto">
                                    <table className="w-full text-left border-collapse table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2 border-b w-[10%]">No</th>
                                                <th className="px-4 py-2 border-b w-[40%]">Nama Tamu</th>
                                                <th className="px-4 py-2 border-b w-[20%]">Nomor Meja</th>
                                                <th className="px-4 py-2 border-b w-[30%]">Link Undangan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {guests.map((guest, index) => (
                                                <tr key={guest.id}>
                                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                                    <td className="px-4 py-2 border-b">
                                                        <input
                                                            type="text"
                                                            value={guest.name}
                                                            onChange={(e) => updateGuestData(guest.id, 'name', e.target.value)}
                                                            placeholder="Nama Tamu"
                                                            className="w-full px-2 bg-transparent focus:outline-none"
                                                        />
                                                    </td>
                                                    <td className="px-4 py-2 border-b">
                                                        <input
                                                            type="text"
                                                            value={guest.table}
                                                            onChange={(e) => updateGuestData(guest.id, 'table', e.target.value)}
                                                            placeholder="Nomor"
                                                            className="w-full px-2 bg-transparent focus:outline-none"
                                                        />
                                                    </td>
                                                    <td
                                                        className="px-4 py-2 border-b cursor-copy overflow-hidden whitespace-nowrap text-ellipsis"
                                                        onClick={() => {
                                                            const link = `https://muria-d-javanese.vercel.app/${generateLink(guest.name)}`;
                                                            navigator.clipboard.writeText(link);
                                                            messageApi.success("Link berhasil disalin!");
                                                        }}
                                                    >
                                                        {generateLink(guest.name)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>





                        ) : (
                            <p className="text-center text-gray-300 mt-4">Belum ada tamu yang ditambahkan.</p>
                        ))}

                    {selectedMenu === "Reservasi" && (
                        dataReservasi.length > 0 ? (
                            <div className="overflow-x-hidden">
                                <div className="max-h-[70vh] overflow-y-auto">
                                    <table className="w-full text-left border-collapse table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2 border-b w-[10%]">No</th>
                                                <th className="px-4 py-2 border-b w-[40%]">Nama Tamu</th>
                                                <th className="px-4 py-2 border-b w-[20%]">Jumlah Tamu</th>
                                                <th className="px-4 py-2 border-b w-[30%]">Kehadiran</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataReservasi.map((guest, index) => (
                                                <tr key={guest.id}>
                                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                                    <td className="px-4 py-2 border-b">
                                                        <input
                                                            type="text"
                                                            value={guest.name}
                                                            onChange={(e) => updateGuestData(guest.id, 'name', e.target.value)}
                                                            placeholder="Nama Tamu"
                                                            className="w-full px-2 bg-transparent focus:outline-none"
                                                        />
                                                    </td>
                                                    <td className="px-4 py-2 border-b">
                                                        <input
                                                            type="text"
                                                            value={guest.table}
                                                            onChange={(e) => updateGuestData(guest.id, 'table', e.target.value)}
                                                            placeholder="Nomor"
                                                            className="w-full px-2 bg-transparent focus:outline-none"
                                                        />
                                                    </td>
                                                    <td
                                                        className="px-4 py-2 border-b cursor-copy overflow-hidden whitespace-nowrap text-ellipsis"
                                                        onClick={() => {
                                                            const link = `https://muria-d-javanese.vercel.app/${generateLink(guest.name)}`;
                                                            navigator.clipboard.writeText(link);
                                                            messageApi.success("Link berhasil disalin!");
                                                        }}
                                                    >
                                                        {generateLink(guest.name)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>





                        ) : (
                            <p className="text-center text-gray-300 mt-4">Belum ada data reservasi.</p>
                        ))}

                    {selectedMenu === "Kehadiran" && (
                        dataKehadiran.length > 0 ? (
                            <div className="overflow-x-hidden">
                                <div className="max-h-[70vh] overflow-y-auto">
                                    <table className="w-full text-left border-collapse table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-2 border-b w-[10%]">No</th>
                                                <th className="px-4 py-2 border-b w-[40%]">Nama Tamu</th>
                                                <th className="px-4 py-2 border-b w-[20%]">Jumlah Tamu</th>
                                                <th className="px-4 py-2 border-b w-[30%]">Waktu</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataKehadiran.map((guest, index) => (
                                                <tr key={guest.id}>
                                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                                    <td className="px-4 py-2 border-b">
                                                        <input
                                                            type="text"
                                                            value={guest.name}
                                                            onChange={(e) => updateGuestData(guest.id, 'name', e.target.value)}
                                                            placeholder="Nama Tamu"
                                                            className="w-full px-2 bg-transparent focus:outline-none"
                                                        />
                                                    </td>
                                                    <td className="px-4 py-2 border-b">
                                                        <input
                                                            type="text"
                                                            value={guest.table}
                                                            onChange={(e) => updateGuestData(guest.id, 'table', e.target.value)}
                                                            placeholder="Nomor"
                                                            className="w-full px-2 bg-transparent focus:outline-none"
                                                        />
                                                    </td>
                                                    <td
                                                        className="px-4 py-2 border-b cursor-copy overflow-hidden whitespace-nowrap text-ellipsis"
                                                        onClick={() => {
                                                            const link = `https://muria-d-javanese.vercel.app/${generateLink(guest.name)}`;
                                                            navigator.clipboard.writeText(link);
                                                            messageApi.success("Link berhasil disalin!");
                                                        }}
                                                    >
                                                        {generateLink(guest.name)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>





                        ) : (
                            <p className="text-center text-gray-300 mt-4">Belum ada data kehadiran.</p>
                        ))}

                    <div className="fixed bottom-4 left-4">
                        <button
                            onClick={() => setSelectedMenu("Kehadiran")}
                            className={`flex items-center gap-2 w-48 px-6 py-2 font-bold text-white transition-all rounded-full shadow-lg border-1 ${selectedMenu === "Kehadiran"
                                ? "bg-yellow-700/85 border-yellow-500"
                                : "bg-yellow-600/70 hover:bg-yellow-700/70 border-yellow-400"
                                }`}
                        >
                            <TbChecklist className="text-2xl" /> Kehadiran
                        </button>
                    </div>

                    {/* <div className="fixed bottom-16 left-4">
                        <button
                            onClick={() => { setSelectedMenu("Scanner") }}
                            className="flex items-center gap-2 w-48 bg-yellow-600/70 hover:bg-yellow-700/70 border-1 border-yellow-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
                        >
                            <MdQrCodeScanner className="text-2xl" /> Scanner
                        </button>
                    </div> */}
                    <div className="fixed bottom-16 left-4">
                        <button
                            onClick={() => { setSelectedMenu("Reservasi") }}
                            className={`flex items-center gap-2 w-48 px-6 py-2 font-bold text-white transition-all rounded-full shadow-lg border-1 ${selectedMenu === "Reservasi"
                                ? "bg-yellow-700/85 border-yellow-500"
                                : "bg-yellow-600/70 hover:bg-yellow-700/70 border-yellow-400"
                                }`}
                        >
                            <IoPeopleSharp className="text-2xl" /> Reservasi
                        </button>
                    </div>
                    <div className="fixed bottom-28 left-4">
                        <button
                            onClick={() => { setSelectedMenu("Daftar Tamu") }}
                            className={`flex items-center gap-2 w-48 px-6 py-2 font-bold text-white transition-all rounded-full shadow-lg border-1 ${selectedMenu === "Daftar Tamu"
                                ? "bg-yellow-700/85 border-yellow-500"
                                : "bg-yellow-600/70 hover:bg-yellow-700/70 border-yellow-400"
                                }`}
                        >
                            <LuClipboardList className="text-2xl" /> Daftar Tamu
                        </button>
                    </div>


                    {selectedMenu === "Daftar Tamu" && (
                        <>
                            <div className="fixed bottom-4 right-4">
                                <button
                                    onClick={addGuestRow}
                                    className="flex items-center gap-2 w-32 bg-blue-600/70 hover:bg-blue-700/70 border-1 border-blue-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
                                >
                                    <FiPlus /> Add
                                </button>
                            </div>
                            {isEdited && (
                                <div className="fixed bottom-16 right-4">
                                    <button
                                        onClick={saveChanges}
                                        className="flex items-center gap-2 w-32 bg-green-600/70 hover:bg-green-700/70 border-1 border-green-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
                                    >
                                        <IoIosSend /> Save
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                </div>
            </div>

        </>
    );
};

export default AdminGuestList;
