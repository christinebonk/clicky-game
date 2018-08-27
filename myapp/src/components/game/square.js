import React from "react";
import friends from "../../friends.json";

function Square(props) {
  return (
    <div onClick={() => props.shuffleBoard(props.id)} className="square" 
    // onClick={props.onClick}
    >
      <img  src={props.image} ></img>
    </div>
  );
}

//input key value
export default Square;