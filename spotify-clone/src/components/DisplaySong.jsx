import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import clockicon from "../assets/clock_icon.png";
import { PlayerContext } from "../context/PlayerContext"
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const DisplaySong = () => {
  const { id } = useParams();
  const songData = songsData[id];
  const { playWithId } = useContext(PlayerContext)

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
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={clockicon} alt="" />
      </div>
      <hr />
      <div onClick={() => playWithId(songData.id)} className="grid grid-cols-3 sm:grid-cols-4 gap 2 p-2 items-center content-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
        <p className="text-white">
          <b className="mr-4 text-[#a7a7a7]">1</b>
          <img className="inline w-10 mr-5" src={songData.image} alt="" />
          {songsData.name}
        </p>
        <p className="text-[15px]">{songData.album}</p>
        <p className="text-[15px] hidden sm:block">{songsData[0].year}</p>
        <div className="flex items-center gap-24">
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => {
              console.log('done')
            }}
            className="rounded-full p-[0.1rem] border-2 border-gray-400 size-3 hover:border-gray-100 hover:text-gray-100"
          ></FontAwesomeIcon>
          <div className="text-[15px] text-center">{songData.duration}</div>
        </div>
      </div>
    </>
  );
};

export default DisplaySong;
