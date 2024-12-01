import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <FontAwesomeIcon className='bg-black text-xl p-2 rounded-[100%] cursor-pointer' icon={faAngleLeft} />
                    <FontAwesomeIcon className='bg-black text-xl p-2 rounded-[100%] cursor-pointer' icon={faAngleRight} />
                </div>
                <div className='flex items-center gap-3'>
                    <div className="btn">Explore Premium</div>
                    <div className="btn-secondary">Install App</div>
                    <div className="bg-purple-500 text-black rounded-[100%] w-7 h-7 flex items-center justify-center">A</div>
                </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
                <div className="btn">All</div>
                <div className="btn-secondary">Music</div>
                <div className="btn-secondary">Prodcasts</div>
            </div>
        </>
    )
}

export default Navbar