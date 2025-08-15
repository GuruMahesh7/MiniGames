import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardFlipIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#14332E] text-white px-6 py-8 flex flex-col items-center">
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
      <h1 className="text-3xl font-bold mb-8">Card Flip Game</h1>

      {/* Illustration */}
      <img
        src="cardflipimage.png" // Replace with your illustration
        alt="Memory Matrix Illustration"
        className="w-80 mb-8"
      />

      {/* Rules */}
      <div className="max-w-5xl w-full">
        <h2 className="text-xl font-semibold mb-4">Rules</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-3">
            <li>
              When the game is started, the users should be able to see the list
              of Cards that are shuffled and turned face down.
            </li>
            <li>
              When a user starts the game, the user should be able to see the
              Timer running.
            </li>
            <li>The Timer starts from 1:30 Minutes.</li>
            <li>
              If the two cards have the same image, they remain face up. If not,
              they should be flipped face down again after a short 2 seconds.
            </li>
          </ul>

          <ul className="list-disc list-inside space-y-3">
            <li>Users should be able to compare only two cards at a time.</li>
            <li>
              When the user is not able to find all the cards before the timer
              ends then the game should end and redirect to the Time Up Page.
            </li>
            <li>
              If the user finds all the matching cards before the timer ends,
              then the user should be redirected to the results page.
            </li>
          </ul>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={() => navigate("/cardflipgame")}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-all"
      >
        Start playing
      </button>
    </div>
  );
}
