import Sidebar from "./components/Sidebar"
import Player from "./components/Player"
import Display from "./components/Display"
function App() {

  return (
    <>
      <div className="h-screen bg-black">
        <div className='h-screen text-white p-3 overflow-auto'>
          <div className="flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
          <audio preload="auto"></audio>
        </div>
      </div>
    </>
  )
}

export default App
