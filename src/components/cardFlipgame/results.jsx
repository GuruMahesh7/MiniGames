import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CardFlipResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isWin, flips, score, timeTaken } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f2f2c] text-white text-center">
      <div className="text-8xl mb-4">{isWin ? "😄" : "😐"}</div>
      <h1 className="text-3xl font-bold text-green-500 mb-2">
        {isWin ? "Congratulations!" : "Better luck next time!"}
      </h1>
      <p className="mb-1">No. of Flips - {flips}</p>
      <p className="mb-1">Score - {score}</p>
      <p className="mb-6">Time Taken - {timeTaken}s</p>
      <p className="font-semibold mb-6">
        {isWin
          ? "You matched all of the cards in record time"
          : "You did not match all of the cards in record time"}
      </p>
      <button
        onClick={() => navigate("/cardflipgame")}
        className="bg-white text-black px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300"
      >
        Play Again
      </button>
    </div>
  );
}
