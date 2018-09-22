import React, { Component } from 'react';
// import logo from './logo.svg';
import GameBoard from "./components/GameBoard";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import imagecards from './imagecards.json';
import './App.css';

class App extends Component {

  // Setting this.state.imagecards to the imagecards json array
  state = {
    imagecards,
    match: false,
    currentScore: 0,
    topScore: 0,
    clicked: []
  };

  //ADD HANDLE INPUT CHANGE

  handleBtnClick = event => {
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    const newState = { ...this.state };
        
    if (btnType === "pick") {
      newState.match = 1;
    }
    this.setState(newState);
    this.handleIncrement();
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      alert("You win!")
    };
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title>Clicky Game!</Title>
        {this.state.imagecards.map(imagecard => (
          <GameBoard
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