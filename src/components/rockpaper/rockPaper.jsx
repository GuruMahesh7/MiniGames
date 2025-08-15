// RockPaperScissorsPlay.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(4px)",
    zIndex: 50,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    borderRadius: "12px",
    padding: "24px",
    width: "800px",
    height: "400px",
    maxWidth: "90%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    border: "none",
  },
};
Modal.setAppElement("#root");

const choicesList = [
  {
    id: "rock",
    color: "border-blue-500",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png",
  },
  {
    id: "scissor",
    color: "border-red-500",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png",
  },
  {
    id: "paper",
    color: "border-yellow-400",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png",
  },
];

export default function RockPaperScissorsPlay() {
  const navigate = useNavigate();
  const location = useLocation();

  // Keep score even after returning from Results
  const [score, setScore] = useState(location.state?.score ?? 0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const playGame = (choiceId) => {
    const randomChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)];
    const userPick = choicesList.find((c) => c.id === choiceId);

    let gameResult = "";
    if (choiceId === randomChoice.id) gameResult = "IT IS DRAW";
    else if (
      (choiceId === "rock" && randomChoice.id === "scissor") ||
      (choiceId === "paper" && randomChoice.id === "rock") ||
      (choiceId === "scissor" && randomChoice.id === "paper")
    )
      gameResult = "YOU WON";
    else gameResult = "YOU LOSE";

    const newScore =
      gameResult === "YOU WON"
        ? score + 1
        : gameResult === "YOU LOSE"
        ? score - 1
        : score;
    setScore(newScore);

    // Go to Results page with round data
    navigate("/rockpaperresults", {
      state: {
        userChoice: userPick,
        opponentChoice: randomChoice,
        result: gameResult,
        score: newScore,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#1e3264] text-white">
      {/* Top bar: Back + Rules */}
      <div className="flex items-center justify-between px-[10%] pt-6">
        <button
          className="border rounded px-3 py-1 hover:bg-white/10 transition"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <button
          onClick={openModal}
          className="border rounded px-3 py-1 hover:bg-white/10 transition"
        >
          Rules
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center pt-4">
        <h1 className="text-3xl font-bold mb-2">ROCK PAPER SCISSOR</h1>
        <h2 className="mb-8 text-xl">Let&apos;s pick</h2>

        {/* Three choices */}
        <div className="flex gap-10">
          {choicesList.map((choice) => (
            <button
              key={choice.id}
              onClick={() => playGame(choice.id)}
              className={`w-28 h-28 rounded-full bg-white ${choice.color} border-[10px] 
                          flex items-center justify-center shadow-lg 
                          hover:scale-110 active:scale-95 transition`}
              aria-label={choice.id}
            >
              <img
                src={choice.imageUrl}
                alt={choice.id}
                className="w-16 h-16 pointer-events-none"
              />
            </button>
          ))}
        </div>

        {/* (Optional) Live score indicator on play screen */}
        <div className="mt-8 text-lg opacity-80">Score: {score}</div>
      </div>

      {/* Rules Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Rules Modal"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-5 text-gray-500 hover:text-black text-lg"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold text-center mb-5">How to Play</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-sm leading-relaxed">
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
      </Modal>
    </div>
  );
}
