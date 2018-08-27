import React from "react";
import Square from "./square";
import Board from "./board";
import friends from "../../friends.json";


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friends,
      guessed: [],
      highScore: 0,
      turn: 0
          };
  }
  gameEnd() {

  }

  checkGuessed(currentGuess) {
    this.state.guessed.forEach((guessed) => {
      if(guessed === currentGuess) {
        console.log("Game Over")
      } else {
        console.log("You guessed correctly")
      }
    });
  }

  handleClick() {
    const turn = this.state.turn + 1;
  }


  shuffleBoard = () => {
    for (let i=0;i<this.state.friends.length;i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.friends[i], this.state.friends[j]] = [this.state.friends[j], this.state.friends[i]];
    }
    this.setState({friends: friends})
  }



  render() {

    return (
      <div className="game">
        <div className="game-board">
          {this.state.friends.map(friend => (
            <Square
              image={friend.image}
              key={friend.id}
              id={friend.id}
              shuffleBoard = {this.shuffleBoard}
            />))}
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
}



export default Game;