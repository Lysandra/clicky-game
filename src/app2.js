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
    currentScore: 0,
    topScore: 0,
    clicked: [],
    statement: ''
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleBtnClick = id => {
    const clicked = this.state.clicked;
        
    if (!clicked.includes(id)) {
      clicked.push(id)
      this.handleIncrement();
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      statement: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({
        statement: "You win!"
      })
    }
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          answer={this.state.answer}
        />
        <Title>Clicky Game!</Title>
        {this.state.imagecards.map(imagecard => (
          <GameBoard
            id={imagecard.id}
            key={imagecard.id}
            name={imagecard.name}
            image={imagecard.image}
            onClick={this.hanldeBtnClick}
            onClick={this.handleIncrement}
          />
        ))};
      </Wrapper>
    )
  }
};

export default App;