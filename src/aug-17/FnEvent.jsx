import React from "react";

function FnEvent() {
  const handleClick = () => {
    alert("Function component click");
  };
  return (
    <div>
      <h1>Function event</h1>
      <button onClick={handleClick}>Click Function</button>
    </div>
  );
}

export default FnEvent;
