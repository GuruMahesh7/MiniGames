import React from "react";
import { useNavigate } from "react-router-dom";

export default function RockPaperIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#223A5F] text-white px-6 py-8 flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full max-w-6xl mb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm hover:underline border-solid border-2 rounded p-2"
        >
          ← Back
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">Rock Paper Scissor</h1>

      {/* Illustration */}
      <img
        src="rockpaperimage.png" // Replace with your illustration
        alt="Memory Matrix Illustration"
        className="w-80 mb-8"
      />

      {/* Rules */}
      <div className="max-w-5xl w-full">
        <h2 className="text-xl font-semibold mb-4">Rules</h2>
        <div className="grid md:grid-cols-2 gap-6 text-white text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>
              Pick one: <strong>Rock</strong>, <strong>Paper</strong>, or{" "}
              <strong>Scissor</strong>.
            </li>
            <li>The opponent picks randomly.</li>
            <li>Rock beats Scissor, Scissor beats Paper, Paper beats Rock.</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Win ➜ +1 score, Lose ➜ −1 score, Draw ➜ 0.</li>
            <li>View round details on the Results screen.</li>
            <li>
              Click <em>Play Again</em> to return and continue your streak.
            </li>
          </ul>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={() => navigate("/rockpaper")}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-all"
      >
        Start playing
      </button>
    </div>
  );
}
