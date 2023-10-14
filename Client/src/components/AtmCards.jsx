import React from "react";

export default function AtmCards() {
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
            <span class="card__digit-group">0000</span>
            <span class="card__digit-group">0021</span>
            <span class="card__digit-group">4748</span>
            <span class="card__digit-group">3647</span>
          </div>
          <div class="card__valid-thru" aria-label="Valid thru">
            Valid
            <br />
            thru
          </div>
          <div class="card__exp-date">
            <time datetime="2038-01">01/38</time>
          </div>
          <div class="card__name" aria-label="Dee Stroyer">
            Dee Stroyer
          </div>
          <div class="card__vendor" role="img" aria-labelledby="card-vendor">
            <span id="card-vendor" class="card__vendor-sr">
              Mastercard
            </span>
          </div>
        </div>
        <div class="card__texture"></div>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="card-number"
              placeholder="Enter card number"
              aria-label="Card number"
              aria-describedby="card-number-copy"
            //   defaultValue={cardNumber}
              readOnly
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="card-number-copy"
              >
                <i className="fas fa-copy"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="card-holder-name">Card Holder Name</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="card-holder-name"
              placeholder="Enter card holder name"
              aria-label="Card holder name"
              aria-describedby="card-holder-name-copy"
            //   defaultValue={cardHolderName}
              readOnly
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="card-holder-name-copy"
              >
                <i className="fas fa-copy"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="expiry-month">Expiry Month</label>
            <select
              className="custom-select d-block w-100"
              id="expiry-month"
              required
            //   defaultValue={expiryMonth}
              readOnly
            >
              <option value="">Choose...</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="expiry-year">Expiry Year</label>
            <input
              type="text"
              className="form-control"
              id="expiry-year"
              placeholder="Enter expiry year"
            //   defaultValue={expiryYear}
              readOnly
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              placeholder="Enter CVV"
            //   defaultValue={cvv}
              readOnly
            />
          </div>
        </div>
      </form>
    </div>
  );
}
