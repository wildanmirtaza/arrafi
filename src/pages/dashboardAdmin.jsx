import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import backgroundpc from "../assets/backgroundpc.png";
import backgroundhp from "../assets/backgroundhp.png";
import { message } from "antd";

const AdminGuestList = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [guests, setGuests] = useState([]);
    const [isEdited, setIsEdited] = useState(false);

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

            <div className="relative h-screen w-screen overflow-hidden bg-[#003F99] text-white font-sriracha">
                <motion.img
                    src={isMobile ? backgroundhp : backgroundpc}
                    alt="Background"
                    className="absolute inset-0 w-full h-auto object-cover opacity-75 pointer-events-none"
                    initial={{ scale: 1.2 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="p-6 bg-gradient-to-l from-blue-900 to-blue-800 text-white font-sriracha rounded-xl shadow-lg max-w-4xl mx-auto mt-10 z-20">
                    <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">Daftar Tamu</h1>
                    {guests.length > 0 ? (
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b border-yellow-500 text-yellow-400">No</th>
                                    <th className="px-4 py-2 border-b border-yellow-500 text-yellow-400">Nama Tamu</th>
                                    <th className="px-4 py-2 border-b border-yellow-500 text-yellow-400">Nomor Meja</th>
                                    <th className="px-4 py-2 border-b border-yellow-500 text-yellow-400">Link Undangan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {guests.map((guest, index) => (
                                    <tr key={guest.id} className="hover:bg-blue-800">
                                        <td className="px-4 py-2 border-b border-yellow-500 text-gray-300">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-2 border-b border-yellow-500 text-gray-300">
                                            <input
                                                type="text"
                                                value={guest.name}
                                                onChange={(e) => updateGuestData(guest.id, 'name', e.target.value)}
                                                placeholder="Nama Tamu"
                                                className="w-full px-2 bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 rounded-full text-gray-300"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border-b border-yellow-500 text-gray-300">
                                            <input
                                                type="text"
                                                value={guest.table}
                                                onChange={(e) => updateGuestData(guest.id, 'table', e.target.value)}
                                                placeholder="Nomor"
                                                className="w-20 px-2 bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-400 rounded-full text-gray-300"
                                            />
                                        </td>
                                        <td
                                            className="px-4 py-2 border-b border-yellow-500 text-gray-300 cursor-copy"
                                            onClick={() => {
                                                const link = `https://muria-d-javanese.vercel.app/${generateLink(guest.name)}`;
                                                navigator.clipboard.writeText(link);
                                                messageApi.success("Link berhasil disalin!");
                                            }}
                                            title="Klik untuk menyalin"
                                        >
                                            {generateLink(guest.name)}
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-center text-gray-300 mt-4">Belum ada tamu yang ditambahkan.</p>
                    )}


                    <div className="fixed bottom-4 right-4">
                        <button
                            onClick={addGuestRow}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
                        >
                            Add
                        </button>
                    </div>
                    {isEdited && (
                        <div className="fixed bottom-16 right-4">
                            <button
                                onClick={saveChanges}
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all"
                            >
                                Save
                            </button>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
};

export default AdminGuestList;
