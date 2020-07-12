import React, { useState } from "react";
import logo from "./logo.svg";
import Box from "./box";
import "./App.css";

const initialState = [
  {
    key: "Q",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "W",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const data = {
  keys: ["Q", "W", "E", "Z", "X", "S", "C", "F", "T"],
};

function App() {
  const [key, setkeys] = useState(initialState);
  return (
    <div id="drum-machine " className="container">
      <div id="display" className="display">
        {key.map((item, id) => (
          <Box item={item} key={id} />
        ))}
      </div>
    </div>
  );
}

export default App;
