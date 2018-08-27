import React from "react";
import Board from "./components/game";
import Square from "./components/game";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highScore: 0,
      stepNumber: 0
          };
  }

  render() {

    return (
      <div className="game">
        <div className="game-board">
          <Board
            
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