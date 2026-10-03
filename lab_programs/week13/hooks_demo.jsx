import React, { useState } from "react";

function HooksDemo() {

  // useState → creates state variable
  const [score, setScore] = useState(0);

  // Event to update state
  const increase = () => {
    setScore(score + 1);
  };

  const decrease = () => {
    setScore(score - 1);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>

      <h2>Understanding React Hooks</h2>

      {/* Display state */}
      <h3>Score: {score}</h3>

      {/* Events */}
      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>

    </div>
  );
}

export default HooksDemo;