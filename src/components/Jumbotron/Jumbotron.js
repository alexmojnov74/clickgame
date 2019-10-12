import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => (
  <div className="container">
<div className="jumbotron">
  <h1>The <br />Simpsons!</h1>
  <h3>React Clicky Game</h3>
  <h5>Score: {props.score} <span> High Score: {props.highScore} </span></h5>
</div>
</div>
)

export default Jumbotron;
