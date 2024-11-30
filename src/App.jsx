import Sidebar from "./components/Sidebar"
import Player from "./components/Player"
function App() {

  return (
    <>
      <div className="h-screen bg-black">
        <div className='h-screen text-white p-3'>
          <Sidebar />
          <Player />
        </div>
      </div>
    </>
  )
}

export default App
