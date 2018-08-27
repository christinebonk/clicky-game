import React from "react";
import Square from "./square";
import GameInfo from "./gameinfo";
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
    this.state.guessed;
    this.state.guessed.forEach((guess) => {
      console.log(guess)
      if(guess === currentGuess) {
        console.log("Game Over")
      } else {
        console.log("You guessed correctly")
      }
    });
    let newArray = this.state.guessed.slice();
    newArray.push(currentGuess);
    this.setState({guessed: newArray})
  }


  shuffleBoard = (guess) => {

    this.checkGuessed(guess); 

    const turn = this.state.turn + 1;

    for (let i=0;i<this.state.friends.length;i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.friends[i], this.state.friends[j]] = [this.state.friends[j], this.state.friends[i]];
    }

    this.setState({friends: friends,
      turn: turn})
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
          <GameInfo
            turn = {this.state.turn} 
          />
        </div>
      </div>
    );
  }
}



export default Game;