import React from "react";

export default function AtmCards(props) {

  const groups = props.card.cardNumber.split(" ");
 
  return (
    <div className="allSavedCards">
      <div class="card">
        <div class="card__info">
          <div class="card__logo">Vajra Saved</div>
          <div class="card__chip">
            <svg
              class="card__chip-lines"
              role="img"
              width="20px"
              height="20px"
              viewBox="0 0 100 100"
              aria-label="Chip"
            >
              <g opacity="0.8">
                <polyline
                  points="0,50 35,50"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
                <polyline
                  points="0,20 20,20 35,35"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
                <polyline
                  points="50,0 50,35"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
                <polyline
                  points="65,35 80,20 100,20"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
                <polyline
                  points="100,50 65,50"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
                <polyline
                  points="35,35 65,35 65,65 35,65 35,35"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
                <polyline
                  points="0,80 20,80 35,65"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
                <polyline
                  points="50,100 50,65"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
                <polyline
                  points="65,65 80,80 100,80"
                  fill="none"
                  stroke="#000"
                  stroke-width="2"
                />
              </g>
            </svg>
            <div class="card__chip-texture"></div>
          </div>
          <div class="card__type">debit</div>
          <div class="card__number">
            <span class="card__digit-group">{groups[0]}</span>
            <span class="card__digit-group">{groups[1]}</span>
            <span class="card__digit-group">{groups[2]}</span>
            <span class="card__digit-group">{groups[3]}</span>
          </div>
          <div class="card__valid-thru" aria-label="Valid thru">
            Valid
            <br />
            thru
          </div>
          <div class="card__exp-date">
            <time datetime="{props.card.cardYear}-{props.card.cardMonth}">{props.card.cardMonth}/{props.card.cardYear}</time>
          </div>
          <div class="card__name" aria-label="Dee Stroyer">
            {props.card.cardName}
          </div>
          <div class="card__vendor" role="img" aria-labelledby="card-vendor">
            <span id="card-vendor" class="card__vendor-sr">
              Mastercard
            </span>
          </div>
        </div>
        <div class="card__texture"></div>
      </div>
    </div>
  );
}
