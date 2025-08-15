import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Line } from "rc-progress";

const MemoryGameResults = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no state, fallback
  if (!state) {
    return (
      <div className="text-center p-10">
        <h2>No game data found ❌</h2>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate("/memorymatrix")}
        >
          Play Game
        </button>
      </div>
    );
  }

  const { score, isWin } = state;
  const maxLevel = 6; // same as your win condition
  const percent = Math.round((score / maxLevel) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">
        {isWin ? "🎉 You Won!" : "💔 Game Over"}
      </h1>
      <p className="mb-6 text-lg">
        Your Level: {score} / {maxLevel}
      </p>

      {/* Progress bar */}
      <Line
        percent={percent}
        strokeWidth={2}
        strokeColor="#3a86ff"
        trailColor="#444"
        style={{ width: "70%", marginBottom: "20px" }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          fontSize: "0.9rem",
          marginBottom: "15px",
          marginTop: "5px",
        }}
      >
        <span>Level 1</span>
        <span>Level 2</span>
        <span>Level 4</span>
        <span>Level {maxLevel}</span>
      </div>

      {/* Play again */}
      <button
        className="px-6 py-2 bg-blue-500 rounded text-white hover:bg-blue-400"
        onClick={() => navigate("/memorygame")}
      >
        Play Again
      </button>
    </div>
  );
};

export default MemoryGameResults;
