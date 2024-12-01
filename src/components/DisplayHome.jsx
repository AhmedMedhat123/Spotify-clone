import Navbar from "./Navbar"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"
import { albumsData, songsData } from '../assets/assets'
const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <h1 className="my-4 font-bold text-2xl">Featured Charts</h1>
            <div className="flex gap-3 overflow-auto">
                {albumsData.map((item, index) => (
                    <AlbumItem key={index} id={item.id} name={item.name} image={item.image} desc={item.desc} />
                ))}
            </div>
            <h1 className="my-4 font-bold text-2xl">Today's biggest hits</h1>
            <div className="flex gap-3 overflow-auto">
                {songsData.map((item, index) => (
                    <SongItem key={index} id={item.id} name={item.name} image={item.image} desc={item.desc} />
                ))}
            </div>

        </>
    )
}

export default DisplayHome