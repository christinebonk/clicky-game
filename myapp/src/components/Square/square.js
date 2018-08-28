import React from "react";
import "./square.css";

function Square(props) {
  return (
    <div onClick={() => props.handleGuess(props.id)} key={props.id} className="square" 
    >
      <img  src={props.image} alt={props.name} ></img>
    </div>
  );
}

export default Square;