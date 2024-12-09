import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"

const SongItem = ({ id, name, image, desc }) => {
  const navigate = useNavigate();
  const { playWithId, pauseWithId, playStatus, currentTrackId } = useContext(PlayerContext);
  const isPlayingCurrentSong = playStatus && currentTrackId === id;

  return (
    <>
      <div onClick={() => navigate(`/song/${id}`)} className="relative group card">
        <img src={image} alt="" className="rounded w-40" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>

        <div
          onClick={(e) => {
            e.stopPropagation();
            isPlayingCurrentSong ? pauseWithId(id) : playWithId(id);
          }}
          className="opacity-0 group-hover:opacity-100 absolute top-36 left-36 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out"

        >
          <FontAwesomeIcon icon={isPlayingCurrentSong ? faPause : faPlay} className="fill-black bg-green-500 rounded-full size-5 p-3" color="black" />
        </div>

      </div >
    </>
  );
};

export default SongItem;
