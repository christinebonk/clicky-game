import React from "react";
import "./gameinfo.css";

function GameInfo(props) {
  return (
    <div className="game-info" 
    >
    	<div className="info-left">
      		<h2>Your Turn: {props.turn}</h2>
      	</div>
     	 <div className="message">
     	 	<span><h2>{props.message}</h2></span>
     	 </div>
     	 <div className="info-right">
      		<h2>High Score: {props.highScore}</h2>
      	</div>
    </div>
  );
}

export default GameInfo;