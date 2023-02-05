1.app.js

import './App.css';
import React , {useState} from 'react';
import Card from "./components/UI/Card/Card"

function App() {
  const [showQuestion ,setShowQuestions] = useState(false);
  function handleStartQuiz(){
    setShowQuestions(true);
  }
  return (
    <div className="App">
      <h1>Quizz App</h1>
      {!showQuestion ? (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
<div className="container">
  <div className="first-line">
    <div className="box boxright"><Card /></div>
    <div className="box"><Card /></div>
  </div>
  <div className="second-line">
    <div className="box"><Card /></div>
    <div className="box"><Card /></div>
    <div className="box"><Card /></div>
  </div>
</div> 
      )}
    </div>
  );
}

export default App;


2..App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* button{
  position: relative;
  margin-top: 30%;
  padding-right: 200px;
  padding-left: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: bold;
  font-size: 15px;
} */
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  width: 25%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 10px;
  display: inline-block;
}

.first-line {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 180px;
}

.second-line {
  width: 100%;
  text-align: center;
}

.boxright{
  padding-right: 20%;
}

3. Card.js

import React, { useState } from "react";

const Card = (props) => {
  const [isDisabled, setDisabled] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [showResults, setShowResults] = useState(false);

    function handleQuestionAnswered() {
        setQuestionsAnswered(questionsAnswered + 1);
    }

    function handleShowResults() {
        setShowResults(true);
    }
  const optionClickHandler = (answer) => {
    setDisabled(true);
    if (answer === props.answer) {
      props.correctAnswerMarkUpdate(true);
    }
  };

  let optionsList = ['Blue', 'Red', 'Yellow', 'Green'];

  return (
    <div>
      <h4>What color is are the leaves ?</h4>
      <div>
        {optionsList.map((value, index) => (
          <button
            key={index}
            disabled={isDisabled}
            onClick={() => optionClickHandler(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
4. buttuon .js

import React from "react";

const Button = (props) => {
  return <button>{props.children}</button>;
};

export default Button;
