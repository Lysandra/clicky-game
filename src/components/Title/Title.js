import React from "react";
import "./Title.css";

// const Title = props => <h1 className="title">{props.children}THIS IS FROM THE TITLE COMPONENET</h1>;

const Title = props => (
  <div className="container" id="titlecontainer">
    <div className="jumbotron" id="titlejumbotron">
      <h1 className id="titleh1">Clicky Game!</h1>
      <h4 className id="titleh4">Click on an image to earn points, but don't click on any more than once!</h4>
    </div>
  </div>
);

export default Title;
