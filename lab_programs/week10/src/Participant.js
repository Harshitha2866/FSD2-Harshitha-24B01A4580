import React, { Component } from "react";
import Workshop from "./Workshop";

class Participant extends Component {
  render() {
    return (
      <div>
        <h2>Participant Component (Class)</h2>
        <p>Name: Ananya</p>

        {/* Nested component inside class */}
        <Workshop />
      </div>
    );
  }
}

export default Participant;