import React, { useState, useEffect } from "react";

const WordFlick = () => {
  const [words] = useState([
    "Bank",
    "Finance",
    "Loans",
    "Insurances",
    "Low Interests",
    "Fast Processing",
  ]);
  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 10;
  const speed = 40;

  useEffect(() => {
    const wordFlickInterval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI(i + 1);
          setOffset(0);
          if (i >= words.length - 1) {
            setI(0);
          }
        }
      }
      setPart(words[i].substr(0, offset));
      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
    }, speed);

    return () => clearInterval(wordFlickInterval);
  }, [words, forwards, offset, i, skipCount]);

  return <span className="word">{part}</span>;
};

export default WordFlick;
