import React from "react";

function RenderHTML() {
  return (
    <div>
      <h2>HTML Rendering in React</h2>

      {/* HTML rendered using JSX */}
      <div>
        <h3 style={{ color: "blue" }}>Welcome to React</h3>
        <p>This HTML content is rendered using JSX.</p>
        <ul>
          <li>Pizza</li>
          <li>Burger</li>
          <li>Pasta</li>
        </ul>
      </div>
    </div>
  );
}

export default RenderHTML;