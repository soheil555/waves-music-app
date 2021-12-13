import { Song } from "../types/Song";
import LibrarySong from "./LibrarySong";

type LibraryProps = {
  songs: Song[];
};

export default function Library({ songs }: LibraryProps) {
  return (
    <div className="library-container">
      <h1>Library</h1>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
}
