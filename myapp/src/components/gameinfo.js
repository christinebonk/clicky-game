import React from "react";
import Square from "./square";

function GameInfo(props) {
  return (
    <div className="game-info" 
    // onClick={props.onClick}
    >
      <h2>Your Turn: {props.turn}</h2>
      <h2>High Score: {props.highScore}</h2>
    </div>
  );
}

//input key value
export default GameInfo;