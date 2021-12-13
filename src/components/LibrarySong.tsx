import { Song } from "../types/Song";

type LibrarySongProps = {
  song: Song;
};

export default function LibrarySong({ song }: LibrarySongProps) {
  return (
    <div className="library-song">
      <img src={song.cover} />
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
