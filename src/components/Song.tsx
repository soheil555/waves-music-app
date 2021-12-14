import { Dispatch, SetStateAction } from "react";
import { Song as SongType } from "../types/Song";

type SongProps = {
  currentSong: SongType;
  setIsLibraryActive: Dispatch<SetStateAction<boolean>>;
};

export default function Song({ currentSong, setIsLibraryActive }: SongProps) {
  return (
    <div
      onClick={() => {
        setIsLibraryActive(false);
      }}
      className="song-container"
    >
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}
