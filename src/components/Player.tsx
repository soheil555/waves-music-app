import React, { useRef, Dispatch, SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Song } from "../types/Song";

type PlayerPorps = {
  currentSong: Song;
  isSongPlaying: boolean;
  setIsSongPlaying: Dispatch<SetStateAction<boolean>>;
};

export default function Player({
  currentSong,
  isSongPlaying,
  setIsSongPlaying,
}: PlayerPorps) {
  const [songInfo, setSongInfo] = useState({
    duration: 0,
    currentTime: 0,
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (time: number) => {
    const formatedTime =
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    return formatedTime;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTime = Number(event.target.value);
    setSongInfo({ ...songInfo, currentTime: currentTime });

    if (audioRef.current) audioRef.current.currentTime = currentTime;
  };

  const handleTimeChange = (event: React.MouseEvent<HTMLAudioElement>) => {
    const target = event.target as HTMLAudioElement;

    setSongInfo({
      ...songInfo,
      currentTime: target.currentTime,
      duration: target.duration,
    });
  };

  const handlePlay = () => {
    if (isSongPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }

    setIsSongPlaying(!isSongPlaying);
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          onChange={handleInputChange}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="backward" icon={faAngleLeft} size={"2x"} />
        <FontAwesomeIcon
          onClick={handlePlay}
          className="play"
          icon={isSongPlaying ? faPause : faPlay}
          size={"2x"}
        />
        <FontAwesomeIcon className="forward" icon={faAngleRight} size={"2x"} />
      </div>

      <audio
        onTimeUpdate={handleTimeChange}
        onLoadedMetadata={handleTimeChange}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}
