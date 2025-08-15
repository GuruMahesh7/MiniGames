import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total, isWin } = location.state || {};

  return (
    <div className="h-screen flex items-center justify-center bg-linear-to-b from-[#9796F0] to-[#FBC7D4]">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl text-center w-[350px] shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          {isWin ? "You Won" : "You Lose"}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 mb-1">Best Score</p>

        {/* Score */}
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          {score}/{total}
        </h2>

        {/* Play Again Button */}
        <button
          onClick={() => navigate("/emojigame")}
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 px-5 rounded-full transition-all duration-300"
        >
          Play Again
        </button>

        {/* Emoji/Balloons Image */}
        <img
          src={
            isWin
              ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          }
          alt="result"
          className="mt-4 w-48 mx-auto"
        />
      </div>
    </div>
  );
};

export default ResultsPage;
