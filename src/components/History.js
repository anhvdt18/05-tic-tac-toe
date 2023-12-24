import React from "react";

function History({ stepHistory, moveToStep }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {stepHistory.map((step) => (
          <li key={step}>
            <button onClick={() => moveToStep(step)}>
              {step ? "Go to move #" + step : "Go to game start"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
