import React from "react";
import Square from "./square";
import GameInfo from "./gameinfo";
import friends from "../friends.json";


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friends,
      guessed: [],
      highScore: 0,
      turn: 0,
      message: "Click a square to start!"
          };
  }

  shuffleBoard() {
    for (let i=0;i<this.state.friends.length;i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.friends[i], this.state.friends[j]] = [this.state.friends[j], this.state.friends[i]];
    }
  }

  gameEnd() {
    if (this.state.turn > this.state.highScore) {
      this.setState({highScore: this.state.turn, turn: 0, friends: friends, guessed: [], message: "You set a new high score!"});
    } else {
      this.setState({turn: 0, friends: friends, guessed: [], message: "Game over!"});
    }
  }

  guessCheck(a) {
    let check = true;
    this.state.guessed.forEach((guess) => {
      if(a === guess) {
        check = false;
      }
    });
    return check
  }

  handleGuess = (currentGuess) => {
    let check = this.guessCheck(currentGuess);
    if (check) {
      this.shuffleBoard();
      let newArray = this.state.guessed.slice();
      newArray.push(currentGuess);      
      let turn = this.state.turn + 1;
      this.setState({friends: friends, turn: turn, guessed: newArray, message: "Great guess!"})
    } else if (!check) {
      this.gameEnd();
    }    
  }

  render() {

    return (
      <div className="game">
      <div className="game-info">
          <GameInfo
            turn = {this.state.turn} 
            highScore = {this.state.highScore}
            message = {this.state.message}
          />
        </div>
        <div className="game-board">
          {this.state.friends.map(friend => (
            <Square
              image={friend.image}
              key={friend.id}
              id={friend.id}
              name={friends.name}
              handleGuess = {this.handleGuess}
            />))}
        </div>
        
      </div>
    );
  }
}



export default Game;