import React, { useState } from "react";
import ChampionCard from "components/ChampionCard";
import champions from "data/set4update/champions.json";
import useKeyPress from 'helpers/helpers';

import "./GameContainer.css";



const createUnit = ({ championId, cost, traits, name, imgName }) => ({
  id: championId,
  cost,
  img: `https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set4-5/${
    imgName ? imgName : name.toLowerCase() // Hyphenated two-word champ names are hardcoded into champions.json's imgName
  }.jpg`,
  traits: traits.map((traitStr) => {
    const cleanedTraitName = traitStr.replace("Set4_", ""); // Set4_Mage => Mage
    return {
      name: cleanedTraitName,
      img: traitStr === 'Boss' ?  `https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4-5/the-${cleanedTraitName.toLowerCase()}-gold.svg` :
       `https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4-5/${cleanedTraitName.toLowerCase()}-white.svg`,
    };
  }),
  name,
});

// Generate N random units, i.e. 5
// Use roll odds if "level" is specified
const generateNRandom = (num, level = null) => {
  let units = []
  for (let i = 0; i < num; i += 1) {
    const randomUnitIndex = Math.floor(Math.random() * (champions.length - 1));
    const randomUnit = champions[randomUnitIndex];
    units.push(createUnit(randomUnit));
  }
  return units;
}


// Generate array of all possible champions in the set
// const generateWholeSet = () => {
//   return champions.map(createUnit).filter((c) => c.id !== "TFT_TrainingDummy"); // Remove training dummy
// };


/**
 * Handle game state
 */
function GameContainer() {
  const fetch = () => {
    return generateNRandom(5);
  }
  const [cards, setCards] = useState(fetch());
  const onReroll = () => {
    setCards(fetch())
  };
  useKeyPress("d", onReroll);

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

  // Callback for on click of card
  const onCardClick = (id) => {
    // For now, just delete the card from the state
    setCards(cards.filter((card) => id !== card.id));
  };

  return (
    <>
      <div className="container">
        <div className="grid">
          {cards.map(({ id, name, traits, img, cost }, i) => (
            <ChampionCard
              key={`${id}-${i}`}
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
