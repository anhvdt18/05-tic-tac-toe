import React, { useState, useEffect } from "react";

function Game() {
  //
  const [moves, setMoves] = useState([
    { id: "count-1", content: "Move to game #1" },
    { id: "count-2", content: "Move to game #2" },
  ]);
  //
  const [winner, setWinner] = useState("Who is Winner?");
  //
  const [count, setCount] = useState(0);
  const moveCount = () => setCount(count + 1);
  //
  const [player, setPlayer] = useState("X");
  const nextPlayer = () => {
    moveCount();
    if (player === "X") {
      return setPlayer("O");
    }
    if (player === "O") {
      return setPlayer("X");
    }
  };
  //
  const toPlay = (id) => {
    if (winner !== "Who is Winner?") {
      return;
    } else {
      const a = document.getElementById(id);
      if (!a.innerHTML) {
        a.innerHTML = player;
        nextPlayer();
      }
    }
  };
  //
  useEffect(() => {
    const btn1 = document.getElementById("1").innerHTML;
    const btn2 = document.getElementById("2").innerHTML;
    const btn3 = document.getElementById("3").innerHTML;
    const btn4 = document.getElementById("4").innerHTML;
    const btn5 = document.getElementById("5").innerHTML;
    const btn6 = document.getElementById("6").innerHTML;
    const btn7 = document.getElementById("7").innerHTML;
    const btn8 = document.getElementById("8").innerHTML;
    const btn9 = document.getElementById("9").innerHTML;
    //
    window.localStorage.setItem(
      `count-${count}`,
      JSON.stringify([btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9])
    );
    //
    if (
      (btn1 === "X" && btn2 === "X" && btn3 === "X") ||
      (btn4 === "X" && btn5 === "X" && btn6 === "X") ||
      (btn7 === "X" && btn8 === "X" && btn9 === "X") ||
      (btn1 === "X" && btn4 === "X" && btn7 === "X") ||
      (btn2 === "X" && btn5 === "X" && btn8 === "X") ||
      (btn3 === "X" && btn6 === "X" && btn9 === "X") ||
      (btn1 === "X" && btn5 === "X" && btn9 === "X") ||
      (btn3 === "X" && btn5 === "X" && btn7 === "X")
    ) {
      return setWinner("X");
    } else if (
      (btn1 === "O" && btn2 === "O" && btn3 === "O") ||
      (btn4 === "O" && btn5 === "O" && btn6 === "O") ||
      (btn7 === "O" && btn8 === "O" && btn9 === "O") ||
      (btn1 === "O" && btn4 === "O" && btn7 === "O") ||
      (btn2 === "O" && btn5 === "O" && btn8 === "O") ||
      (btn3 === "O" && btn6 === "O" && btn9 === "O") ||
      (btn1 === "O" && btn5 === "O" && btn9 === "O") ||
      (btn3 === "O" && btn5 === "O" && btn7 === "O")
    ) {
      return setWinner("O");
    } else if (count === 9) {
      return setWinner("PEACE");
    }
  }, [player]);

  const restart = () => {
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";
    setCount(0);
    setPlayer("X");
    setWinner("Who is Winner?");
  };

  const goBack = (id) => {
    const save = window.localStorage.getItem(id);
    console.log(save);
  };

  //
  return (
    <>
      <div className="main">
        <h2 className="result">
          {winner !== "Who is Winner?" && winner !== "PEACE"
            ? `Winner Is ${winner}`
            : `${winner}`}
        </h2>
        <div className="game">
          <div className="board">
            <span className="player">Next player is {player}</span>
            <div className="board-row">
              <button
                id="1"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
              <button
                id="2"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
              <button
                id="3"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
            </div>
            <div className="board-row">
              <button
                id="4"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
              <button
                id="5"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
              <button
                id="6"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
            </div>
            <div className="board-row">
              <button
                id="7"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
              <button
                id="8"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
              <button
                id="9"
                className="square"
                onClick={(e) => {
                  toPlay(e.target.id);
                }}
              ></button>
            </div>
          </div>
          <div className="history">
            <h4>History</h4>
            <ul>
              <button onClick={restart}>Go to game start</button>
              <button onClick={goBack}>Move to step #1</button>
              <button onClick={goBack}>Move to step #2</button>
              <button onClick={goBack}>Move to step #3</button>
              <button onClick={goBack}>Move to step #4</button>
              <button onClick={goBack}>Move to step #5</button>
              <button onClick={goBack}>Move to step #6</button>
              <button onClick={goBack}>Move to step #7</button>
              <button onClick={goBack}>Move to step #8</button>
              <button onClick={goBack}>Move to step #9</button>
            </ul>
          </div>
        </div>
        <div className="restart-btn" onClick={restart}>
          Restart
        </div>
      </div>
    </>
  );
}

export default Game;
