import React from "react";
import "./GameBoard.css";

const GameBoard = props => (
  <div 
    className="gameboard"
    data-value={props.id}
    onClick={props.handleBtnClick}
    >
  <div className="img-container">
      <img alt={props.id} src={props.image} />
  </div>  
  </div>  
);

export default GameBoard;
