import React,{useEffect, useRef} from "react"
import { Routes, Route,useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { albumsData } from "../assets/assets"
const Display = () => {
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1):"";
    const bgColor= albumsData[Number(albumId)].bgColor;

    useEffect(()=>{
        if(isAlbum){
            displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`;
        }else{
            displayRef.current.style.background=`#121212`;  
        }
    })

    return (
        <>
            <div ref={displayRef} className="w-[100%] max-h-[39.3rem] bg-[#121212] rounded-md px-5 py-3 ml-2 overflow-auto">
                <Routes>
                    <Route path='/' element={<DisplayHome />}></Route>
                    <Route path='/album/:id' element={<DisplayAlbum />}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Display