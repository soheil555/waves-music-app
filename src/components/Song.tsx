import { Song as SongType } from "../types/Song";

type SongProps = {
  currentSong: SongType;
};

export default function Song({ currentSong }: SongProps) {
  return (
    <div className="song-container">
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}
