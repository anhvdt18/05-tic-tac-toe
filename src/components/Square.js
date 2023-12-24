import React from "react";

function Square({ squareValue, handleClick }) {
  return (
    <button className={"square"} onClick={handleClick}>
      {squareValue}
    </button>
  );
}

export default Square;
