import React, { useRef } from "react";

export default function Box({ item: { key, mp3 } }) {
  const audio = useRef(null);

  const playsound = () => {
    audio.current.play();
  };

  return (
    <div className="box" onClick={playsound}>
      <h1>{key}</h1>
      <audio ref={audio} src={mp3} id={key} className="clip"></audio>
    </div>
  );
}

document.addEventListener("keypress", (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);
  if (audio) {
    audio.play();
  }
});
