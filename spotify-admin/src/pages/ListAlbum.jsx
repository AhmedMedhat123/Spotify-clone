import React, { useEffect } from "react";
import { url } from "../App";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const ListAlbum = () => {
  const [data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/album/list`);
      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      console.error("Error fetching albums:", error); // Log the error for debugging
      toast.error("An error occurred while fetching albums.");
    }
  };
  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/album/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbums(); // Refresh the album list
      }
    } catch (error) {
      console.error("Error removing album:", error); // Log the error for debugging
      toast.error("An error occurred while removing the album.");
    }
  };
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]); // Add fetchAlbums to the dependency array

  return (
    <div>
      <p>Albums List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album color</b>
          <b>Action</b>
        </div>
        {Array.isArray(data) &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-[1fr_1fr_1fr] sm-grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
              >
                <img className="w-12" src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <input type="color" value={item.bgColour} />
                <p
                  onClick={() => removeAlbum(item._id)}
                  className="cursor-pointer"
                >
                  x
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListAlbum;
