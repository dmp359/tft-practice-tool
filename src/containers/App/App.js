import React, { useState } from "react";
import GameContainer from "containers/GameContainer";

import "./App.css";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {!start && (
          <button className="Begin-button" onClick={() => setStart(true)}>
            Begin
          </button>
        )}
        {start && <GameContainer />}
      </header>
    </div>
  );
}

export default App;
