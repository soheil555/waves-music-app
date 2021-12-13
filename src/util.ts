import { RefObject } from "react";

export const playSong = (
  isSongPlaying: boolean,
  audioRef: RefObject<HTMLAudioElement>
) => {
  if (isSongPlaying) {
    const playPromise = audioRef.current?.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audioRef.current?.play();
      });
    }
  }
};
