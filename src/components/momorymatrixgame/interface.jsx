import React from "react";
import { useNavigate } from "react-router-dom";

export default function MemoryMatrixIntro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1f2530] text-white px-6 py-8 flex flex-col items-center">
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
      <h1 className="text-3xl font-bold mb-8">Memory Matrix</h1>

      {/* Illustration */}
      <img
        src="memoryimage.png" // Replace with your illustration
        alt="Memory Matrix Illustration"
        className="w-80 mb-8"
      />

      {/* Rules */}
      <div className="max-w-5xl w-full">
        <h2 className="text-xl font-semibold mb-4">Rules</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-3">
            <li>
              In each level of the Game, Users should be able to see the Grid
              with (N X N) size starting from 3 and the grid will highlight N
              cells in Blue, the N highlighted cells will be picked randomly.
            </li>
            <li>
              The highlighted cells will remain N seconds for the user to
              memorize the cells. At this point, the user should not be able to
              perform any action.
            </li>
            <li>
              After N seconds, the grid will clear the N highlighted cells.
            </li>
          </ul>

          <ul className="list-disc list-inside space-y-3">
            <li>
              At N seconds, the user can click on any cell. Clicking on a cell
              that was highlighted before it will turn blue. Clicking on other
              cells will turn them red.
            </li>
            <li>
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt.
            </li>
            <li>
              The user should be taken to the results page if the user clicks on
              the wrong cell.
            </li>
            <li>
              If the user completed all the levels, then the user should be
              taken to the results page.
            </li>
          </ul>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={() => navigate("/memorygame")}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-all"
      >
        Start playing
      </button>
    </div>
  );
}
