import React from "react"
import { Routes, Route } from "react-router-dom"
import DisplayHome from "./DisplayHome"
const Display = () => {
    return (
        <>
            <div className="w-[100%] max-h-[39.3rem] bg-[#121212] rounded-md px-5 py-3 ml-2 overflow-auto">
                <Routes>
                    <Route path='/' element={<DisplayHome />}></Route>
                </Routes>
            </div>
        </>
    )
}

export default Display