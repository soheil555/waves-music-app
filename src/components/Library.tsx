import { Dispatch, RefObject, SetStateAction } from "react";
import { Song } from "../types/Song";
import LibrarySong from "./LibrarySong";

type LibraryProps = {
  songs: Song[];
  setSongs: Dispatch<SetStateAction<Song[]>>;
  currentSong: Song;
  setCurrentSong: Dispatch<SetStateAction<Song>>;
  audioRef: RefObject<HTMLAudioElement>;
  isSongPlaying: boolean;
};

export default function Library({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  audioRef,
  isSongPlaying,
}: LibraryProps) {
  return (
    <div className="library-container">
      <h1>Library</h1>
      <div className="library-songs">
        {songs.map((song, i) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            setSongs={setSongs}
            key={song.id}
            audioRef={audioRef}
            isSongPlaying={isSongPlaying}
          />
        ))}
      </div>
    </div>
  );
}
