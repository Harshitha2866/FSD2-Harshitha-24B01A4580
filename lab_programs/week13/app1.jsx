import React, { useState, useEffect } from "react";

function App1() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {

    const intervalId = setInterval(() => {
      setDate(new Date()); // Update every second
    }, 1000);

    return () => clearInterval(intervalId); // Clean up

  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Date</h1>
      <h2>{date.toLocaleDateString()}</h2>
    </div>
  );
}

export default App1;