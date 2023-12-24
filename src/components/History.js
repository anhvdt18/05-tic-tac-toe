import React from "react";

function History(movedStep, moveToStep) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {moveToStep.map((movedStep, step) => {
          const desc = movedStep
            ? "Go to move #" + movedStep
            : "Go to game start";
          return (
            <li key={movedStep}>
              <button onClick={() => moveToStep(movedStep)}>{desc}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
