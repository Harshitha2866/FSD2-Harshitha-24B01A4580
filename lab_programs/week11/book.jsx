import React, { Component } from "react";
import Author from "./author.jsx";

class Book extends Component {
  constructor(props) {
    super(props);

    // STATE → dynamic data
    this.state = {
      name: "Java Programming",
      author: "James",
      count: 0
    };
  }

  // EVENT → change author
  changeAuthor = () => {
    this.setState({
      author: "Robert"
    });
  };

  // EVENT → counter example
  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="book">
        <h2>Book Component (Class)</h2>

        <p>Book Name: {this.state.name}</p>

        {/* Passing state as props */}
        <Author authorName={this.state.author} />

        <button onClick={this.changeAuthor}>
          Change Author
        </button>

        <p>Click Count: {this.state.count}</p>

        <button onClick={this.increase}>
          Click Count
        </button>
      </div>
    );
  }
}

export default Book;