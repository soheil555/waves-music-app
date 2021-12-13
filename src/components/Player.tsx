import React, {
  Dispatch,
  SetStateAction,
  useState,
  RefObject,
  useEffect,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Song } from "../types/Song";
import { playSong } from "../util";

type PlayerPorps = {
  currentSong: Song;
  setCurrentSong: Dispatch<SetStateAction<Song>>;
  songs: Song[];
  setSongs: Dispatch<SetStateAction<Song[]>>;
  isSongPlaying: boolean;
  setIsSongPlaying: Dispatch<SetStateAction<boolean>>;
  audioRef: RefObject<HTMLAudioElement>;
};

export default function Player({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  isSongPlaying,
  setIsSongPlaying,
  audioRef,
}: PlayerPorps) {
  useEffect(() => {
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  }, [currentSong]);

  const [songInfo, setSongInfo] = useState({
    duration: 0,
    currentTime: 0,
  });

  const formatTime = (time: number) => {
    const formatedTime =
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    return formatedTime;
  };

  const handleSkipSong = (direction: string) => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);

    switch (direction) {
      case "forward":
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        break;

      case "backward":
        if (currentIndex === 0) {
          setCurrentSong(songs[songs.length - 1]);
        } else {
          setCurrentSong(songs[currentIndex - 1]);
        }
        break;
    }

    playSong(isSongPlaying, audioRef);
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
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => {
            handleSkipSong("backward");
          }}
          className="backward"
          icon={faAngleLeft}
          size={"2x"}
        />
        <FontAwesomeIcon
          onClick={handlePlay}
          className="play"
          icon={isSongPlaying ? faPause : faPlay}
          size={"2x"}
        />
        <FontAwesomeIcon
          onClick={() => {
            handleSkipSong("forward");
          }}
          className="forward"
          icon={faAngleRight}
          size={"2x"}
        />
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
