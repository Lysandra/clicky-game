import React from "react";
import "./GameBoard.css";

const GameBoard = props => (
  <div 
    className="gameboard">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.image)} />
    </div>
  </div>  
);

export default GameBoard;
