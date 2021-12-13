import { useRef, useState } from "react";

//Import css
import "./styles/app.scss";

//Import songs data
import data from "./data";

//Import components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCorrentSong] = useState(songs[0]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCorrentSong}
        audioRef={audioRef}
        isSongPlaying={isSongPlaying}
      />
    </div>
  );
}

export default App;
