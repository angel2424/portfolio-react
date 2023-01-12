import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Confetti from "react-confetti";
import { useState } from "react";
import { useEffect } from "react";

const Submission = () => {
  // eslint-disable-next-line
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <div className="submission">
      <div className="submission_container">
        <h1 className="xl">{`Thank you for your message! 🥳`}</h1>
        <p className="xs">I will reach out as soon as I can</p>

        <button className="submission_button">
          <a className="xs flex ai-c" href="/">
            <FaArrowLeft className="submission_icon" />
            Go back to home page
          </a>
        </button>
      </div>
      <Confetti numberOfPieces={pieces} gravity={0.2} />
    </div>
  );
};

export default Submission;
