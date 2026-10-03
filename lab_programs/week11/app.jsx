import React from "react";
import Header from "./header.jsx";
import Book from "./book.jsx";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header title="Learn React Components" />
      <Book />
    </div>
  );
}

export default App;