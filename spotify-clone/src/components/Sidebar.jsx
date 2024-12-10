import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import stackImage from '../assets/stack.png';
import { useNavigate } from 'react-router-dom';
import likedSongs from '../assets/likedSongs.jpg'
const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='w-[25%] hidden sm:block'>
                <div className="bg-[#121212]  px-10 py-3 rounded-md">
                    <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
                        <FontAwesomeIcon icon={faHouse} />
                        Home
                    </div>
                    <div className="flex gap-3 mt-5 cursor-pointer">
                        <FontAwesomeIcon className='mt-1 cursor-pointer' icon={faMagnifyingGlass} />
                        Search
                    </div>
                </div>
                <div className="bg-[#121212] h-[33rem] px-5 py-3 rounded-md mt-2">
                    <div className="flex justify-between">
                        <div className='flex gap-3'>
                            <img src={stackImage} alt="" className="w-7 h-7" />
                            <p>Your library</p>
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <FontAwesomeIcon icon={faArrowRight} />
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-5 rounded p-3 cursor-pointer hover:bg-zinc-800">
                        <img src={likedSongs} className='size-11 rounded' alt="" />
                        <p>liked Songs</p>
                    </div>
                    <div className="bg-[#242424] flex flex-col gap-3 mt-5 p-4 rounded">
                        <p className='font-bold'>Create your first playlist</p>
                        <p>it's easy we will help you</p>
                        <div className='btn mt-3'>
                            Create Playlist
                        </div>
                    </div>
                    <div className="bg-[#242424] flex flex-col gap-3 mt-5 p-4 rounded">
                        <p className='font-bold'>Let's find some podcasts to follow</p>
                        <p>We will keep you update on new episodes</p>
                        <div className='btn mt-3'>
                            Browse Products
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar