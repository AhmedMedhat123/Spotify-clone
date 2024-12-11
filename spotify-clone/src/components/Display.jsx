import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import DisplaySong from "./DisplaySong";
import CreatePlaylist from "./CreatePlaylist"; // استخدام صفحة CreatePlaylist
import { albumsData } from "../assets/assets";

const Display = () => {
    const displayRef = useRef();
    const location = useLocation();

    // التحقق من نوع الصفحة (ألبوم أو أغنية)
    const isAlbum = location.pathname.includes("album");
    const isSong = location.pathname.includes("song");
    const albumId = isAlbum ? location.pathname.split("/").pop() : "";
    const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

    // تحديث الخلفية بناءً على نوع الصفحة
    useEffect(() => {
        if (isAlbum || isSong) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
        } else {
            displayRef.current.style.background = `#121212`;
        }
    }, [isAlbum, isSong, bgColor]);

    return (
        <div
            ref={displayRef}
            className="w-[100%] max-h-[39.3rem] bg-[#121212] rounded-md px-5 py-3 ml-2 overflow-auto"
        >
            <Routes>
                {/* الصفحة الرئيسية */}
                <Route path="/" element={<DisplayHome />} />

                {/* صفحة الألبوم */}
                <Route path="/album/:id" element={<DisplayAlbum />} />

                {/* صفحة الأغنية */}
                <Route path="/song/:id" element={<DisplaySong />} />

                {/* صفحة إنشاء قائمة تشغيل */}
                <Route path="/create-playlist" element={<CreatePlaylist />} />
            </Routes>
        </div>
    );
};

export default Display;
