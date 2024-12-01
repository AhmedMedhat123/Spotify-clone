import React from "react";
import { Routes, Route } from "react-router-dom";
import DisplayHome from "./DisplayHome";
const Display = () => {
  return (
    <>
      <div className="w-[100%] bg-[#121212] rounded-md px-5 py-3">
        <Routes>
          <Route path="/d" element={<DisplayHome />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Display;
