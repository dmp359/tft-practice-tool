import React, { useState } from "react";
import ChampionCard from "components/ChampionCard";
import "./GameContainer.css";

/**
 * Handle game state
 */
function GameContainer() {
  // Sample data
  const aatrox = {
    id: 1,
    name: "Aatrox",
    img: "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set4/aatrox.jpg",
    traits: [
      {
        name: "Cultist",
        img: "https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4/cultist-gold.svg",
      },
      {
        name: "Vanguard",
        img: "https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4/vanguard-gold.svg",
      },
    ],
    cost: 4,
  };
  // Display 3 cards of aatroxes
  const [cards, setCards] = useState([aatrox, { ...aatrox, id: 2 }, { ...aatrox, id: 3 }]);

  // Callback for on click of card
  const onCardClick = (id) => {
    // For now, just delete the card from the state
    setCards(cards.filter((card) => id !== card.id));
  };

  return (
    <>
      <div className="container">
        <div className="grid">
          {cards.map(({ id, name, traits, img, cost }) => (
            <ChampionCard
              onClick={onCardClick}
              id={id}
              name={name}
              traits={traits}
              img={img}
              cost={cost}
            />
          ))}
        </div>
        {cards.length < 1 && (
          <div style={{ backgroundColor: "black", height: "48px" }}>You Win!</div>
        )}
      </div>
    </>
  );
}

export default GameContainer;
