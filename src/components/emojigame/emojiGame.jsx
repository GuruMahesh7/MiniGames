import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

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
    width: "400px",
    height: "500px",
    maxWidth: "90%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    border: "none",
  },
};
Modal.setAppElement("#root");

const emojisList = [
  {
    id: 0,
    emojiName: "Face with stuck out tongue",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
  },
  {
    id: 1,
    emojiName: "Face with head bandage",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
  },
  {
    id: 2,
    emojiName: "Face with hugs",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
  },
  {
    id: 3,
    emojiName: "Face with laughing",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
  },
  {
    id: 4,
    emojiName: "Laughing face with hand in front of mouth",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
  },
  {
    id: 5,
    emojiName: "Face with mask",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
  },
  {
    id: 6,
    emojiName: "Face with silence",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
  },
  {
    id: 7,
    emojiName: "Face with stuck out tongue and winked eye",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
  },
  {
    id: 8,
    emojiName: "Grinning face with sweat",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
  },
  {
    id: 9,
    emojiName: "Smiling face with heart eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
  },
  {
    id: 10,
    emojiName: "Grinning face",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
  },
  {
    id: 11,
    emojiName: "Smiling face with star eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
  },
];

function EmojiGame() {
  const [emojis, setEmojis] = useState(emojisList);
  const [clickedEmojis, setClickedEmojis] = useState([]);
  const [score, setScore] = useState(0);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  // let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }
  function closeModal() {
    setIsOpen(false);
  }

  const navigate = useNavigate();

  const onEmojiClick = (id) => {
    if (clickedEmojis.includes(id)) {
      // Lose condition
      navigate("/emojiresult", { state: { score, isWin: false } });
      return;
    }

    // Add new emoji to clicked list
    const updatedClicked = [...clickedEmojis, id];
    setClickedEmojis(updatedClicked);

    // Update score
    setScore(updatedClicked.length);

    // Win condition
    if (updatedClicked.length === emojisList.length) {
      navigate("/emojiresult", {
        state: { score: updatedClicked.length, isWin: true },
      });
      return;
    }

    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    // Shuffle emojis
    setEmojis(shuffleArray(emojis));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#9796F0] to-[#FBC7D4] flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white/30 backdrop-blur-sm">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <img src="/logoimage.png" alt="logo" className="w-8 h-8" />
          Emoji Game
        </h1>
        <span className="text-base font-semibold">Score: {score}</span>
      </div>

      {/* Top Controls */}
      <div className="flex justify-between items-center px-4 lg:px-30 py-5">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-sm border border-gray-400 rounded px-3 py-1 hover:bg-gray-100"
        >
          ← Back
        </button>
        <button
          onClick={openModal}
          className="text-sm border border-gray-400 rounded px-3 py-1 hover:bg-gray-100"
        >
          Rules
        </button>
      </div>

      {/* Rules Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✖
        </button>
        <h2 className="text-lg font-bold text-center mb-3">Rules</h2>
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
      </Modal>

      {/* Emoji Grid */}
      <div className="grid grid-cols-3 gap-2 px-6  md:grid-cols-4 pb-3 pt-3 lg:px-90 lg:py-5 py-6">
        {emojis.map((emoji) => (
          <button
            key={emoji.id}
            onClick={() => onEmojiClick(emoji.id)}
            className="bg-white/30 backdrop-blur-md rounded-xl flex justify-center items-center p-4 mt-6 h-24 lg:w-48 lg:h-34"
          >
            <img src={emoji.emojiUrl} alt="emoji" className="w-12 h-12" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default EmojiGame;
