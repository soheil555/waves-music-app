import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

export default function Player() {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="backward" icon={faBackward} size={"2x"} />
        <FontAwesomeIcon className="play" icon={faPlay} size={"2x"} />
        <FontAwesomeIcon className="forward" icon={faForward} size={"2x"} />
      </div>
    </div>
  );
}
