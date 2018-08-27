import React from "react";
import Board from "./board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [1,2,3,4,5,6,7,8,9,10,11,12],
      highScore: 0,
      stepNumber: 0
          };
  }

  render() {

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares = {this.state.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
}

export default Game;