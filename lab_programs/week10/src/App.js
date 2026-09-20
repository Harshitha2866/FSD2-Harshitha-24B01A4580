import React from "react";
import RenderHTML from "./RenderHTML";
import JSXMarkup from "./JSXMarkup";
import ComponentNesting from "./ComponentNesting";

function App() {
  return (
    <div>
      <RenderHTML />
      <hr />

      <JSXMarkup />
      <hr />

      <ComponentNesting />
    </div>
  );
}

export default App;