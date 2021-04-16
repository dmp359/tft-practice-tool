import React, { useState } from 'react';
import background from 'images/far-away.jpg';
import GameContainer from 'containers/GameContainer';

import './App.css';

function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      <header className='App-header' style={{ backgroundImage: `url(${background})` }}>
      {!start && <button className="Begin-button" onClick={() => setStart(true)}>Begin (Set 4)</button>}
      {start && <GameContainer />}
      </header>
    </div>
  );
}

export default App;
