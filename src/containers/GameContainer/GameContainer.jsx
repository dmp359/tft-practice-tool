import React from 'react';
import ChampionCard from 'components/ChampionCard';
import './GameContainer.css';

/**
 * Handle game state
 */
function GameContainer() {
  return (
    <div className="container">
      <div className="grid">
      <ChampionCard />
      <ChampionCard />
      <ChampionCard />
      <ChampionCard />

      </div>
    </div>
    
  )
}

export default GameContainer; 
