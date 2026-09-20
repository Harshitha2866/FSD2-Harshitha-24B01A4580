import React from "react";
import Header from "./Header";
import Participant from "./Participant";

function ComponentNesting() {
  return (
    <div>
      <h1>Food Ordering Component Demo</h1>

      {/* Nested Components */}
      <Header />
      <Participant />
    </div>
  );
}

export default ComponentNesting;