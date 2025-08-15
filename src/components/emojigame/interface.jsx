import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmojiGameIntro() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/emojigame"); // Change this to your game route
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-300 via-purple-200 to-pink-200 lg:flex items-center justify-center px-4 py-3">
      <button
        className="flex cursor-pointer mb-auto mt-[3%]  p-2"
        onClick={() => navigate("/")}
      >
        ← Back
      </button>
      <div className="max-w-4xl bg-white/10 backdrop-blur-md p-8 pt-2 rounded-2xl shadow-xl border border-white/20 flex flex-col md:flex-row gap-8">
        {/* Left Section - Image + Title */}
        <div className="flex flex-col items-center justify-center flex-1">
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/smiling-face-with-heart-eyes_1f60d.png"
            alt="Emoji"
            className="w-48 h-48 drop-shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">Emoji Game</h1>
        </div>

        {/* Right Section - Rules */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Rules</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>User should be able to see the list of Emojis.</li>
            <li>
              Clicking an Emoji for the first time increments score by 1 and
              shuffles the list.
            </li>
            <li>Repeat the process each time an Emoji is clicked.</li>
            <li>Clicking all Emojis without repeating any wins the game.</li>
            <li>Clicking the same Emoji twice results in losing the game.</li>
            <li>
              After the game ends, the user is redirected to the results page.
            </li>
          </ul>

          {/* Start Button */}
          <button
            onClick={handleStart}
            className="mt-6 px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-all"
          >
            Start playing
          </button>
        </div>
      </div>
    </div>
  );
}
