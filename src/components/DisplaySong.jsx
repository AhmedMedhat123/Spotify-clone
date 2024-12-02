import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import clockicon from "../assets/clock_icon.png";
const DisplaySong = () => {
  const { id } = useParams();
  const songData = songsData[id];

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={songData.image} alt="" />
        <div className="flex flex-col">
          <p>Single</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {songData.name}
          </h2>
          <h4>{songData.desc}</h4>
          <p className="mt-1">
            <b>&nbsp;{songData.artist}</b>
            &nbsp;• {songData.year} &nbsp;•1 song, &nbsp;{songData.duration}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>
        </p>
        <p>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={clockicon} alt="" />
      </div>
      <hr />
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-4 pl-2">
        <p>1</p>
        <p>{songData.name}</p>
        <p className="hidden sm:block">{songsData[0].year}</p>
        <p>{songData.duration}</p>
      </div>
    </>
  );
};

export default DisplaySong;
