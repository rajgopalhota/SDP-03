import { React, useEffect, useRef, useState } from "react";
import "./../Styles/Addcard.css";

export default function AddCard() {
  const [currentCardBackground, setCurrentCardBackground] = useState(1);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [minCardYear] = useState(new Date().getFullYear());
  const amexCardMask = "#### ###### #####";
  const otherCardMask = "#### #### #### ####";
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [focusElementStyle, setFocusElementStyle] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const cardNameRef = useRef(null);
  const cardNumberRef = useRef(null);
  const cardMonthRef = useRef(null);
  const cardYearRef = useRef(null);

  const handleCardNumberChange = (e) => {
    // Remove non-numeric characters (e.g., spaces and dashes)
    const sanitizedValue = e.target.value.replace(/\D/g, "");

    // Add space after every 4 digits
    let formattedValue = sanitizedValue.replace(/(\d{4})/g, "$1 ");

    // Remove the last space if it's there
    if (formattedValue.endsWith(" ")) {
      formattedValue = formattedValue.slice(0, -1);
    }

    // Limit the input to 16 digits
    if (formattedValue.length <= 19) {
      setCardNumber(formattedValue);
    }

    // Set focus to the next input element when 4 digits are entered
    if (formattedValue.length % 5 === 0 && formattedValue.length < 19) {
      const nextInput = cardNumberRef.current.nextSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const isAlpha = (input) => /^[A-Za-z\s]+$/.test(input);

  // Function to handle card holder name change
  const handleCardHolderNameChange = (e) => {
    const inputValue = e.target.value.slice(0, 20);
    if (isAlpha(inputValue) || inputValue === "") {
      setCardName(inputValue);
    }
  };

  useEffect(() => {
    setCurrentCardBackground(Math.floor(Math.random() * 25 + 1));
    setCardNumber(otherCardMask);
    cardNumberRef.current.focus();
  }, []);

  const getCardType = () => {
    let number = cardNumber;
    let re = new RegExp("^4");
    if (number.match(re) !== null) return "visa";

    re = new RegExp("^(34|37)");
    if (number.match(re) !== null) return "amex";

    re = new RegExp("^5[1-5]");
    if (number.match(re) !== null) return "mastercard";

    re = new RegExp("^6011");
    if (number.match(re) !== null) return "discover";

    re = new RegExp("^9792");
    if (number.match(re) !== null) return "troy";

    return "visa"; // default type
  };

  const generateCardNumberMask = () => {
    return getCardType() === "amex" ? amexCardMask : otherCardMask;
  };

  const minCardMonth = () => {
    if (cardYear === minCardYear) return new Date().getMonth() + 1;
    return 1;
  };

  const flipCard = (status) => {
    setIsCardFlipped(status);
  };

  const focusInput = (e) => {
    setIsInputFocused(true);
    let targetRef = e.target.dataset.ref;
    let target = document.querySelector(`[data-ref="${targetRef}"]`);
    setFocusElementStyle({
      width: `${target.offsetWidth}px`,
      height: `${target.offsetHeight}px`,
      transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
    });
  };

  const blurInput = () => {
    setTimeout(() => {
      if (!isInputFocused) {
        setFocusElementStyle(null);
      }
    }, 300);
    setIsInputFocused(false);
  };

  return (
    <>
      <div className="wrapper" id="app">
        <div className="card-form">
          <div className="card-list">
            <div className={`card-item ${isCardFlipped ? "-active" : ""}`}>
              <div className="card-item__side -front">
                <div
                  className={`card-item__focus ${
                    isInputFocused ? "-active" : ""
                  }`}
                  style={focusElementStyle}
                ></div>
                <div className="card-item__cover">
                  <img
                    src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`}
                    className="card-item__bg"
                    alt="Card Background"
                  />
                </div>

                <div className="card-item__wrapper">
                  <div className="card-item__top">
                    <img
                      src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                      className="card-item__chip"
                      alt="Card Chip"
                    />
                    <div className="card-item__type">
                      <img
                        src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
                        alt="Card Type"
                        className="card-item__typeImg"
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="cardNumber"
                    className="card-item__number"
                    ref={cardNumberRef}
                  >
                    {getCardType() === "amex"
                      ? amexCardMask.split("").map((n, $index) => (
                          <div
                            className="card-item__numberItem"
                            key={`item-${$index}`}
                          >
                            {cardNumber.length > $index
                              ? cardNumber[$index]
                              : n.trim()}
                          </div>
                        ))
                      : otherCardMask.split("").map((n, $index) => (
                          <div
                            className="card-item__numberItem"
                            key={`item-${$index}`}
                          >
                            {cardNumber.length > $index
                              ? cardNumber[$index]
                              : n.trim()}
                          </div>
                        ))}
                  </label>

                  <div className="card-item__content">
                    <label
                      htmlFor="cardName"
                      className="card-item__info"
                      ref={cardNameRef}
                    >
                      <div className="card-item__holder">Card Holder</div>
                      <div className="card-item__name">
                        {cardName.length ? (
                          cardName.split("").map((n, $index) => (
                            <span
                              className="card-item__nameItem"
                              key={`nameItem-${$index + 1}`}
                            >
                              {n}
                            </span>
                          ))
                        ) : (
                          <div className="card-item__name" key="2">
                            Full Name
                          </div>
                        )}
                      </div>
                    </label>

                    <div className="card-item__date" ref={cardMonthRef}>
                      <label
                        htmlFor="cardMonth"
                        className="card-item__dateTitle"
                      >
                        Expires
                      </label>
                      <label
                        htmlFor="cardMonth"
                        className="card-item__dateItem"
                      >
                        {cardMonth ? (
                          <span key={cardMonth}>{cardMonth}</span>
                        ) : (
                          <span key="2">MM</span>
                        )}
                      </label>
                      /
                      <label
                        htmlFor="cardYear"
                        className="card-item__dateItem"
                        ref={cardYearRef}
                      >
                        {cardYear ? (
                          <span key={cardYear}>
                            {String(cardYear).slice(2, 4)}
                          </span>
                        ) : (
                          <span key="2">YY</span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-item__side -back">
                <div className="card-item__cover">
                  <img
                    src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`}
                    className="card-item__bg"
                    alt="Card Background"
                  />
                </div>
                <div className="card-item__band"></div>
                <div className="card-item__cvv">
                  <div className="card-item__cvvTitle">CVV</div>
                  <div className="card-item__cvvBand">
                    {cardCvv.split("").map((n, index) => (
                      <span key={index}>*</span>
                    ))}
                  </div>
                  <div className="card-item__type">
                    <img
                      src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
                      className="card-item__typeImg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-form__inner">
            <div className="card-input">
              <label htmlFor="cardNumber" className="card-input__label">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="card-input__input"
                value={cardNumber}
                onChange={handleCardNumberChange}
                onFocus={focusInput}
                onBlur={blurInput}
                data-ref="cardNumber"
                autoComplete="off"
                ref={cardNumberRef}
              />
            </div>
            <div className="card-input">
              <label htmlFor="cardName" className="card-input__label">
                Card Holder
              </label>
              <input
                type="text"
                id="cardName"
                className="card-input__input"
                value={cardName}
                onChange={handleCardHolderNameChange}
                onFocus={focusInput}
                onBlur={blurInput}
                data-ref="cardName"
                autoComplete="off"
                ref={cardNameRef}
              />
            </div>
            <div className="card-form__row">
              <div className="card-form__col">
                <div className="card-form__group">
                  <label htmlFor="cardMonth" className="card-input__label">
                    Expiration Date
                  </label>
                  <select
                    className="card-input__input "
                    id="cardMonth"
                    value={cardMonth}
                    onChange={(e) => setCardMonth(e.target.value)}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    data-ref="cardDate"
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {Array.from({ length: 12 }, (_, index) => {
                      const monthValue = index + 1;
                      const formattedMonth =
                        monthValue < 10 ? `0${monthValue}` : monthValue;
                      return (
                        <option
                          key={formattedMonth}
                          value={formattedMonth}
                          disabled={monthValue < minCardMonth()}
                        >
                          {formattedMonth}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    className="card-input__input "
                    id="cardYear"
                    value={cardYear}
                    onChange={(e) => setCardYear(e.target.value)}
                    onFocus={focusInput}
                    onBlur={blurInput}
                    data-ref="cardDate"
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {Array.from({ length: 12 }, (_, index) => {
                      const yearValue = index + minCardYear;
                      return (
                        <option key={yearValue} value={yearValue}>
                          {yearValue}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="card-form__col -cvv">
                <div className="card-input">
                  <label htmlFor="cardCvv" className="card-input__label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="card-input__input"
                    id="cardCvv"
                    maxLength="4"
                    value={cardCvv}
                    onChange={(e) => {
                      const inputText = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3);
                      setCardCvv(inputText);
                    }}
                    onFocus={() => flipCard(true)}
                    onBlur={() => flipCard(false)}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <button className="card-form__button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
