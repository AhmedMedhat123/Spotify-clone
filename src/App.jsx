import Sidebar from "./components/Sidebar"
import Player from "./components/Player"
import Display from "./components/Display"
import { useContext } from "react"
import { PlayerContext } from "./context/PlayerContext"
function App() {
  const { audioRef, track } = useContext(PlayerContext)

  return (
    <>
      <div className="h-screen bg-black">
        <div className='h-screen text-white p-3 overflow-auto'>
          <div className="flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
          <audio ref={audioRef} src={track.file} preload="auto"></audio>
        </div>
      </div>
    </>
  )
}

export default App
