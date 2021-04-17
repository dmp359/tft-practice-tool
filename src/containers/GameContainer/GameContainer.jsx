import React, { useState } from "react";
import ChampionCard from "components/ChampionCard";
import champions from "data/set4update/champions.json";
import "./GameContainer.css";

/**
 * Handle game state
 */
function GameContainer() {
  // Sample data
  // const aatrox = {
  //   id: 1,
  //   name: "Aatrox",
  //   img: "https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set4/aatrox.jpg",
  //   traits: [
  //     {
  //       name: "Cultist",
  //       img: "https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4/cultist-white.svg",
  //     },
  //     {
  //       name: "Vanguard",
  //       img: "https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4/vanguard-white.svg",
  //     },
  //   ],
  //   cost: 1,
  // };

  // Generate array of all possible champions in the set
  const generateWholeSet = () => {
    return champions
      .map(({ championId, cost, traits, name, imgName }) => ({
        id: championId,
        cost,
        img: `https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set4-5/${
          imgName ? imgName : name.toLowerCase() // Hyphenated two-word champ names are hardcoded into champions.json's imgName
        }.jpg`,
        traits: traits.map((traitStr) => {
          const cleanedTraitName = traitStr.replace("Set4_", ""); // Set4_Mage => Mage
          return {
            name: cleanedTraitName,
            img: `https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4-5/${cleanedTraitName.toLowerCase()}-white.svg`,
          };
        }),
        name,
      }))
      .filter((c) => c.id !== "TFT_TrainingDummy"); // Remove training dummy
  };

  const [cards, setCards] = useState(generateWholeSet());
  // const [cards, setCards] = useState([
  //   aatrox,
  //   { ...aatrox, id: 2, cost: 2 },
  //   { ...aatrox, id: 3, cost: 3 },
  //   { ...aatrox, id: 4, cost: 4 },
  //   { ...aatrox, id: 5, cost: 5 },
  // ]);

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
              key={id}
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
