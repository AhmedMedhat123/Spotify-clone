import { createContext, useContext, useState, useRef, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[1]);
    const [playStatus, setPlayStatus] = useState(false);
    const [currentTrackId, setCurrentTrackId] = useState(null);

    const [time, setTime] = useState({
        currentTime: {
            minute: 0,
            second: 0
        },
        totalTime: {
            minute: 0,
            second: 0
        }
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setCurrentTrackId(id);
        setPlayStatus(true);
    }

    const pauseWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.pause();
        setCurrentTrackId(null);
        setPlayStatus(false);
    }

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + '%';
                setTime({
                    currentTime: {
                        minute: Math.floor(audioRef.current.currentTime / 60),
                        second: Math.floor(audioRef.current.currentTime % 60),
                    },
                    totalTime: {
                        minute: Math.floor(audioRef.current.duration / 60),
                        second: Math.floor(audioRef.current.duration % 60),
                    }
                })
            }
        }, 1000)
    }, [audioRef])

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play,
        pause,
        playWithId,
        pauseWithId,
        previous,
        next,
        seekSong,
        currentTrackId,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider