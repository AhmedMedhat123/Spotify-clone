import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import { albumsData, songsData } from "../assets/assets"
import spotifyLogo from "../assets/spotify_logo.png"
import clockicon from "../assets/clock_icon.png"
import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext)
    // console.log(id);

    return (
        <>
            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className="w-48 rounded" src={albumData.image} alt="" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className="mt-1">
                        <img className="inline-block w-5" src={spotifyLogo} alt="" />
                        <b>&nbsp;Spotify</b>
                        &nbsp;• 1,332,169 likes
                        &nbsp;•<b>50 songs,</b>
                        &nbsp;about 2hr 30 min

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
            {
                songsData.map((item, index) => (
                    <div
                        onClick={
                            () => playWithId(item.id)
                        }
                        key={index}
                        className="group grid grid-cols-3 sm:grid-cols-4 gap 2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
                    >
                        <p className="text-white">
                            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                            <img className="inline w-10 mr-5" src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className="text-[15px]">{albumData.name}</p>
                        <p className="text-[15px] hidden sm:block">4 days ago</p>
                        <div className="flex items-center gap-24">
                            <FontAwesomeIcon
                                icon={faPlus}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log('done')
                                }}
                                className="opacity-0  rounded-full p-[0.1rem] border-2 border-gray-100 text-gray-100 size-3 group-hover:opacity-100"
                            ></FontAwesomeIcon>
                            <p className="text-[15px] text-center">{item.duration}</p>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default DisplayAlbum