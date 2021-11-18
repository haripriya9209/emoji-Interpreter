import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [usrInput, funcInput] = useState("");
  var emojiDictionary = {
    "😀": "Grinning Face",
    "🤐": "Zipper-Mouth Face",
    "🥶": "Cold Face",
    "👧": "Girl",
    "💄": "Lipstick"
  };

  var Emojiarr = Object.keys(emojiDictionary);

  const search = (Event) => {
    var input = Event.target.value;
    var message = emojiDictionary[input];
    if (message === undefined) {
      message = "Emoji not found in database";
    }
    funcInput(message);
  };

  var clickEmoji = (Event) => {
    console.log(emojiDictionary[Event]);
    // var input = Event.target.value;
    var message = emojiDictionary[Event];
    return funcInput(message);
  };
  return (
    <div className="App">
      <h1>Emoji App</h1>
      <input onChange={search}></input>
      <div className="output">{usrInput}</div>
      <h3>emojis we know</h3>
      {Emojiarr.map((emoji) => {
        return (
          <span
            onClick={() => {
              clickEmoji(emoji);
            }}
            key={emoji}
            className="emoji"
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
