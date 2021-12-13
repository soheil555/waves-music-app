import { useState } from "react";

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

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
