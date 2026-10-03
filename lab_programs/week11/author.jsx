import React from "react";
import "./author.scss";

function Author(props) {
  return (
    <div className="author">
      <h3>Author: {props.authorName}</h3>
    </div>
  );
}

export default Author;