import React from "react";
import "./gameinfo.css";

function GameInfo(props) {
  return (
    <div className="game-info" 
    >
      <h2>Your Turn: {props.turn}</h2>
      <div className="message">{props.message}</div>
      <h2>High Score: {props.highScore}</h2>
    </div>
  );
}

export default GameInfo;