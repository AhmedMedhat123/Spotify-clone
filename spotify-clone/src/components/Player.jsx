import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShuffle,
  faPlay,
  faBackwardStep,
  faForwardStep,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import PlayerImg from "../assets/img1.jpg";
import PlaysImg from "../assets/plays.png";
import micImg from "../assets/mic.png";
import queueImg from "../assets/queue.png";
import speakerImg from "../assets/speaker.png";
import volumeImg from "../assets/volume.png";
import miniPlayerImg from "../assets/mini-player.png";
import zoomImg from "../assets/zoom.png";
const Player = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="mt-6 flex items-center gap-3">
          <img className="w-11" src={PlayerImg} alt="" />
          <div>
            <p>Song One</p>
            <p>Put a smile</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-5 items-center">
            <FontAwesomeIcon icon={faShuffle} />
            <FontAwesomeIcon icon={faBackwardStep} />
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faForwardStep} />
            <FontAwesomeIcon icon={faRepeat} />
          </div>
          <div className="flex items-center gap-5">
            <p>0:0</p>
            <div className="w-[40vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer>">
              <hr className="bg-green-800 w-10 h-1 border-none rounded-full" />
            </div>
            <p>2:56</p>
          </div>
        </div>

        <div className="hidden  lg:flex items-center gap-2 mt-8">
          <img className="w-4" src={PlaysImg} alt="" />
          <img className="w-4" src={micImg} alt="" />
          <img className="w-4" src={queueImg} alt="" />
          <img className="w-4" src={speakerImg} alt="" />
          <img className="w-4" src={volumeImg} alt="" />
          <div className="w-20 h-1 bg-slate-50 rounded"></div>
          <img className="w-4" src={miniPlayerImg} alt="" />
          <img className="w-4" src={zoomImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Player;
