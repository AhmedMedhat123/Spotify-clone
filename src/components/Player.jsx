import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle, faPlay, faPause, faBackwardStep, faForwardStep, faRepeat } from '@fortawesome/free-solid-svg-icons'
import PlayerImg from '../assets/img1.jpg'
import PlaysImg from '../assets/plays.png'
import micImg from '../assets/mic.png'
import queueImg from '../assets/queue.png'
import speakerImg from '../assets/speaker.png'
import volumeImg from '../assets/volume.png'
import miniPlayerImg from '../assets/mini-player.png'
import zoomImg from '../assets/zoom.png'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext);

    return (
        <>
            <div className='flex items-center justify-between'>
                <div className="mt-6 flex items-center gap-3">
                    <img className='w-11' src={track.image} alt="" />
                    <div>
                        <p>{track.name}</p>
                        <p>{track.desc.length > 30 ? track.desc.slice(0, 30) + "..." : track.desc}</p>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-3'>
                    <div className='flex gap-5 items-center'>
                        <FontAwesomeIcon className='cursor-pointer' icon={faShuffle} />
                        <FontAwesomeIcon onClick={previous} className='cursor-pointer' icon={faBackwardStep} />
                        {
                            playStatus
                                ? <FontAwesomeIcon className='cursor-pointer' onClick={pause} icon={faPause} />
                                : < FontAwesomeIcon className='cursor-pointer' onClick={play} icon={faPlay} />
                        }
                        <FontAwesomeIcon onClick={next} className='cursor-pointer' icon={faForwardStep} />
                        <FontAwesomeIcon className='cursor-pointer' icon={faRepeat} />
                    </div>
                    <div className='flex items-center gap-5'>
                        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                        <div ref={seekBg} onClick={seekSong} className='w-[40vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                            <hr ref={seekBar} className='bg-green-800 w-0 h-1 border-none rounded-full ' />
                        </div>
                        <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                    </div>
                </div>

                <div className='hidden  lg:flex items-center gap-2 mt-8'>
                    <img className='w-4 cursor-pointer' src={PlaysImg} alt="" />
                    <img className='w-4 cursor-pointer' src={micImg} alt="" />
                    <img className='w-4 cursor-pointer' src={queueImg} alt="" />
                    <img className='w-4 cursor-pointer' src={speakerImg} alt="" />
                    <img className='w-4 cursor-pointer' src={volumeImg} alt="" />
                    <div className='w-20 h-1 bg-slate-50 rounded cursor-pointer'></div>
                    <img className='w-4 cursor-pointer' src={miniPlayerImg} alt="" />
                    <img className='w-4 cursor-pointer' src={zoomImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Player