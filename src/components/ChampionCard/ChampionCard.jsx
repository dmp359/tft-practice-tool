import React from 'react';

import './ChampionCard.css';

function ChampionCard({ id, name, traits, cost, img }) {
  const aatrox = 'https://fastcdn.mobalytics.gg/assets/tft/images/champions/thumbnail/set4/aatrox.jpg';

  return (
    <div className="card" style={{ backgroundImage: `url("${aatrox}")` }}>
      <img className="card-cost-img" src="//fastcdn.mobalytics.gg/stable/tft/rarity/cost-4.png" alt="Champion cost 4"  />
      <div className="card-body">
        <div className="card-trait-wrapper">
          <div className="card-trait">
            <div className="card-trait-img-wrapper">
              <img className="card-trait-img" src="https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4/cultist-gold.svg" alt="cultist" />
            </div>
            Cultist
          </div>
        </div>
        <div className="card-trait">
          <div className="card-trait-img-wrapper">
            <img className="card-trait-img" src="https://fastcdn.mobalytics.gg/assets/tft/images/synergies/set4/vanguard-gold.svg" alt="cultist" />
          </div>
          Vanguard
        </div>
      </div>
      <div className="card-name-wrapper">
        <span className="card-name-text">
          Aatrox
        </span>
        <div className="cost-wrapper">
          <svg className="gold-icon" width="21px" height="14px" viewBox="0 0 21 14" version="1.1"><path d="M18.23 13.674c1.898-.423 2.785-3.789 1.963-7.528C19.372 2.407 17.187-.278 15.27.14l-1.283.283c-1.898.423-2.785 3.789-1.964 7.528.822 3.739 3.006 6.424 4.925 6.006l1.282-.283zM2.597 4.865c-.848.397-1.366.898-1.366 1.45-.03 1.308 2.705 2.421 6.106 2.486a13.011 13.011 0 0 0 4.178-.542.43.43 0 0 1 0 .07 7.3 7.3 0 0 0 .371 1.228 14.02 14.02 0 0 1-4.549.597c-1.954-.041-3.711-.403-4.955-.953-.308.274-.48.575-.48.893-.03 1.308 2.705 2.421 6.107 2.486a11.909 11.909 0 0 0 4.759-.76c.223.39.474.764.751 1.118a12.37 12.37 0 0 1-5.51.994c-3.808-.08-6.869-1.377-6.838-2.913v-1.03c.005-.395.219-.767.597-1.1C.96 8.418.49 7.848.5 7.24V6.212c.01-.701.673-1.325 1.748-1.795a1.246 1.246 0 0 1-.165-.607V2.78c0-1.535 3.081-2.778 6.889-2.778 1.28-.011 2.556.143 3.797.457-.15.127-.286.268-.406.423A14.083 14.083 0 0 0 8.972.493C5.57.493 2.815 1.547 2.815 2.85c0 1.302 2.755 2.356 6.157 2.356a15.11 15.11 0 0 0 2.214-.159c-.011.463.004.926.045 1.387-.749.106-1.504.157-2.26.155-2.876 0-5.343-.712-6.373-1.724zM13.72 7.573c-.727-3.336 0-6.334 1.603-6.692 1.603-.358 3.507 2.063 4.248 5.4.741 3.336 0 6.334-1.603 6.692-1.603.358-3.507-2.059-4.238-5.4h-.01z"></path></svg>
          4
        </div>
      </div>
    </div>
  )
}

export default ChampionCard;

