import React, { Component } from 'react';
// import logo from './logo.svg';
import GameBoard from "./components/GameBoard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import imagecards from './imagecards.json';
import './App.css';

function shuffle(imagecards) {
  for (let i = imagecards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const imagecardsTemp = imagecards[i];
    imagecards[i] = imagecards[j];
    imagecards[j] = imagecardsTemp;
  }
  return imagecards;
};

class App extends Component {

  // Setting this.state.imagecards to the imagecards json array
  state = {
    imagecards: imagecards,
    msg: "Click a game to begin!",
    currentScore: 0,
    topScore: 0,
    unclicked: imagecards    
  };

  handleIncrement = image => {
    const findImage = this.state.unclicked.find(item => item.image === image);
    if(findImage === undefined) {
      this.setState({
        msg: "Game over! Try again!",
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        imagecards: imagecards,
        unclicked: imagecards
      });
      this.moveImage();
    }
    else {
      // const friends = this.state.friends.filter(friend => friend.id !== id);
      const newImages = this.state.unclicked.filter(item => item.image !==image);
      this.setState({
        msg: "You guesss correctly! Score!",
        currentScore: this.state.currentScore +1,
        imagecards: imagecards,
        unclicked: newImages
      });
      this.moveImage();
    }
  };

  moveImage = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const imagecardsNew = shuffle(this.state.imagecards);
    // Set this.state.friends equal to the new friends array
    this.setState({ 
      imagecards : imagecardsNew,
    });
  };
  
  render() {
    return (
      <Wrapper>
        <Navbar
          msg={this.state.msg}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title>Clicky Game!</Title>
        {this.state.imagecards.map(imagecard => (
          <GameBoard
            handleIncrement={this.handleIncrement}
            moveImage={this.moveImage}
            id={imagecard.id}
            key={imagecard.id}
            name={imagecard.name}
            image={imagecard.image}
          />
        ))}
      </Wrapper>
    );
  };
};

export default App;