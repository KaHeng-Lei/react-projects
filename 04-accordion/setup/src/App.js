import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <div>
          {data.map((qa, i) => (
            <SingleQuestion key={i} qa={qa} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
