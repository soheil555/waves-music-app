import { useState } from "react";

import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCorrentSong] = useState(songs[0]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
      />
    </div>
  );
}

export default App;
