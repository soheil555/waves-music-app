import { Dispatch, RefObject, SetStateAction } from "react";
import { Song } from "../types/Song";
import { playSong } from "../util";

type LibrarySongProps = {
  song: Song;
  songs: Song[];
  setSongs: Dispatch<SetStateAction<Song[]>>;
  setCurrentSong: Dispatch<SetStateAction<Song>>;
  audioRef: RefObject<HTMLAudioElement>;
  isSongPlaying: boolean;
};

export default function LibrarySong({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isSongPlaying,
  setSongs,
}: LibrarySongProps) {
  const setCurrentSongHandler = () => {
    setCurrentSong(song);

    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
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

    playSong(isSongPlaying, audioRef);
  };

  return (
    <div
      onClick={setCurrentSongHandler}
      className={`library-song ${song.active ? "active-song" : ""}`}
    >
      <img src={song.cover} />
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
