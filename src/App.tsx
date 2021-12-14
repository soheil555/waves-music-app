import { useRef, useState } from "react";

//Import css
import "./styles/app.scss";

//Import songs data
import data from "./data";

//Import components
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [isLibraryActive, setIsLibraryActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className={`App ${isLibraryActive ? "library-active" : ""}`}>
      <Nav
        isLibraryActive={isLibraryActive}
        setIsLibraryActive={setIsLibraryActive}
      />
      <Song setIsLibraryActive={setIsLibraryActive} currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isSongPlaying={isSongPlaying}
        isLibraryActive={isLibraryActive}
      />
    </div>
  );
}

export default App;
