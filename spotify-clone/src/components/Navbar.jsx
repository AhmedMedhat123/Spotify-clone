import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <FontAwesomeIcon 
                        onClick={() => navigate(-1)} 
                        className='bg-black text-xl p-2 rounded-[100%] cursor-pointer' 
                        icon={faAngleLeft} 
                    />
                    <FontAwesomeIcon 
                        onClick={() => navigate(1)} 
                        className='bg-black text-xl p-2 rounded-[100%] cursor-pointer' 
                        icon={faAngleRight} 
                    />
                </div>
                <div className='flex items-center gap-3'>
                    <div className="btn">Explore Premium</div>
                    <div className="btn-secondary">Install App</div>
                    <button 
                        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                        onClick={() => navigate('/LoginPage.jsx')} // Navigate to the login page or handle login logic
                    >
                        Login
                    </button>
                    <div className="bg-purple-500 text-black rounded-[100%] w-7 h-7 flex items-center justify-center">O</div>
                </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
                <div className="btn">All</div>
                <div className="btn-secondary">Music</div>
                <div className="btn-secondary">Podcasts</div>
            </div>
        </>
    );
};

export default Navbar;