// RockPaperScissorsResult.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RockPaperScissorsResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    // Fallback if user lands here directly
    return (
      <div className="min-h-screen bg-[#1e3264] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">No round data found.</p>
          <button
            className="bg-white text-black px-5 py-2 rounded"
            onClick={() => navigate("/rockpaper")}
          >
            Go to Game
          </button>
        </div>
      </div>
    );
  }

  const { userChoice, opponentChoice, result, score } = state;
  const emoji =
    result === "YOU WON" ? "😄" : result === "YOU LOSE" ? "😢" : "😐";

  return (
    <div className="min-h-screen bg-[#1e3264] text-white flex flex-col items-center pt-10">
      <h1 className="text-2xl font-bold mb-6 tracking-wide">
        ROCK PAPER SCISSOR
      </h1>

      {/* Scoreboard card with emoji */}
      <div className="flex items-center justify-between bg-white text-black rounded-xl px-6 py-4 w-[340px] mb-10 shadow">
        <div className="flex items-center gap-4">
          <div className="leading-tight">
            <div className="text-sm text-gray-600 font-bold">
              Rock
              <br />
              Paper
              <br />
              Scissor
            </div>
          </div>
          <span className="text-5xl pl-10">{emoji}</span>
        </div>
        <div className="bg-gray-100 rounded-lg px-4 py-2 text-center">
          <div className="text-xs text-gray-600">Score</div>
          <div className="text-2xl font-bold">{score}</div>
        </div>
      </div>

      {/* Picks + Result */}
      <div className="flex items-center gap-16 mb-8">
        {/* You */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-white border-[10px] border-blue-500 flex items-center justify-center shadow-md">
            <img
              src={userChoice?.imageUrl}
              alt={userChoice?.id}
              className="w-16 h-16"
            />
          </div>
          <span className="mt-2 text-sm opacity-80">You</span>
        </div>

        {/* Center text */}
        <div className="text-center">
          <div className="text-2xl mb-1">😅</div>
          <div className="text-lg font-semibold tracking-wide">{result}</div>
        </div>

        {/* Opponent */}
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-white border-[10px] border-red-500 flex items-center justify-center shadow-md">
            <img
              src={opponentChoice?.imageUrl}
              alt={opponentChoice?.id}
              className="w-16 h-16"
            />
          </div>
          <span className="mt-2 text-sm opacity-80">Opponent</span>
        </div>
      </div>

      <button
        onClick={() => navigate("/rockpaper", { state: { score } })}
        className="bg-white text-black px-5 py-2 rounded hover:bg-gray-200 transition"
      >
        Play Again
      </button>
    </div>
  );
}
