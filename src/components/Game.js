import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([squares]);
  const [step, setStep] = useState([0]);
  // console.log(step);
  //Declaring a Winner
  useEffect(() => {
    const newWinner = calculateWinner(squares);
    setWinner(newWinner);
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    const newSquares = squares.slice();
    const currentHistory = history.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? "X" : "O";

    const newHistory = currentHistory.concat([newSquares]);
    setHistory(newHistory);
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setStep(step.concat([step.length]));
  };
  //Move to step?
  const moveToStep = (a) => {
    // console.log(a);
    const squaresHistory = history.slice(0, a + 1);
    const stepHistory = step.slice(0, a + 1);
    setSquares(squaresHistory[a]);
    setHistory(squaresHistory);
    setStep(stepHistory);
    setXIsNext(a % 2 ? false : true);
  };

  //Restart game
  const handlRestart = () => {
    setSquares(Array(9).fill(null));
    setStep([0]);
    setXIsNext(true);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <History stepHistory={step} moveToStep={moveToStep} />
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
