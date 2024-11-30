import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import stackImage from '../assets/stack.png';
const Sidebar = () => {
    return (
        <>
            <div className='w-[25%]'>
                <div className="bg-[#121212]  px-10 py-3 rounded-md">
                    <div className="flex items-center gap-2 ">
                        <FontAwesomeIcon icon={faHouse} />
                        Home
                    </div>
                    <div className="flex gap-3 mt-5">
                        <FontAwesomeIcon className='mt-1' icon={faMagnifyingGlass} />
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
                    <div className="bg-[#242424] flex flex-col gap-3 mt-5 p-4 rounded">
                        <p className='font-bold'>Create your first playlist</p>
                        <p>it's easy we will help you</p>
                        <div className='btn'>
                            Create Playlist
                        </div>
                    </div>
                    <div className="bg-[#242424] flex flex-col gap-3 mt-5 p-4 rounded">
                        <p className='font-bold'>Let's find some podcasts to follow</p>
                        <p>We will keep you update on new episodes</p>
                        <div className='btn'>
                            Browse Products
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar