import React, { useState, useEffect } from "react";
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
    width: "800px",
    height: "400px",
    maxWidth: "90%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    border: "none",
  },
};
Modal.setAppElement("#root");

const cardsData = [
  {
    name: "tiger",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png",
  },
  {
    name: "lion",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png",
  },
  {
    name: "rat",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png",
  },
  {
    name: "hen",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png",
  },
  {
    name: "elephant",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png",
  },
  {
    name: "buffalo",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png",
  },
  {
    name: "goat",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png",
  },
  {
    name: "zebra",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png",
  },
  {
    name: "duck",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png",
  },
  {
    name: "pigeon",
    image:
      "https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png",
  },
];

function shuffleCards() {
  const duplicated = [...cardsData, ...cardsData];
  return duplicated.sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [flipCount, setFlipCount] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(120); // 2 minutes in seconds
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  // Shuffle cards at start
  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  // Timer countdown
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      navigate("/cardflipresults", {
        state: {
          isWin: false,
          flips: flipCount,
          score: score,
          timeTaken: 120,
        },
      });
    }
  }, [time]);


  // Check for match
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex].name === cards[secondIndex].name) {
        setMatchedCards((prev) => [...prev, cards[firstIndex].name]);
        setScore((prev) => prev + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  }, [flippedCards, cards]);

  // Win condition
  useEffect(() => {
    if (matchedCards.length === cardsData.length) {
      navigate("/cardflipresults", {
        state: {
          isWin: true,
          flips: flipCount,
          score: score,
          timeTaken: 120 - time,
        },
      });
    }
  }, [matchedCards]);

  const handleCardClick = (index) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.includes(index) &&
      !matchedCards.includes(cards[index].name)
    ) {
      setFlippedCards((prev) => [...prev, index]);
      setFlipCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="bg-[url('https://t3.ftcdn.net/jpg/06/70/74/70/360_F_670747092_8ifU5LKWGwJhlhe5aEbCuO4fPi9pKR0F.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center px-[10%] pt-[1%] text-white gap-3">
          <button
            className="flex cursor-pointer border-2 rounded p-2"
            onClick={() => navigate("/")}
          >
            ← Back
          </button>
          <button
            onClick={openModal}
            className="cursor-pointer border-2 rounded p-2"
          >
            Rules
          </button>

          {/* Modal */}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
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
            <h2 className="text-xl font-bold text-center mb-5">Rules</h2>
            <div className="grid md:grid-cols-2 gap-6 text-black text-sm leading-relaxed">
              <ul className="list-disc list-inside space-y-3">
                <li>
                  When the game is started, the users should be able to see the
                  list of Cards that are shuffled and turned face down.
                </li>
                <li>
                  When a user starts the game, the user should be able to see
                  the Timer running.
                </li>
                <li>The Timer starts from 1:30 Minutes.</li>
                <li>
                  If the two cards have the same image, they remain face up. If
                  not, they should be flipped face down again after a short 2
                  seconds.
                </li>
              </ul>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Users should be able to compare only two cards at a time.
                </li>
                <li>
                  When the user is not able to find all the cards before the
                  timer ends then the game should end and redirect to the Time
                  Up Page.
                </li>
                <li>
                  If the user finds all the matching cards before the timer
                  ends, then the user should be redirected to the results page.
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        {/* Game Container */}
        <div
          className="text-center text-white p-5"
          style={{ minHeight: "95vh" }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Card-Flip Memory Game
          </h1>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row justify-around items-center text-sm sm:text-base mb-5 gap-3 sm:gap-10">
            <div>Card flip count - {flipCount}</div>
            <div>{`${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
              time % 60
            ).padStart(2, "0")}`}</div>
            <div>Score - {score}</div>
          </div>

          {/* Responsive Game Grid */}
          <div
            className="grid gap-3 justify-center"
            style={{
              gridTemplateColumns: `repeat(auto-fit, minmax(70px, 100px))`,
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            {cards.map((card, index) => {
              const isFlipped =
                flippedCards.includes(index) ||
                matchedCards.includes(card.name);

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className="bg-green-600 flex items-center justify-center rounded-lg cursor-pointer transition border"
                  style={{
                    width: "100%",
                    height: "100px",
                    border: isFlipped ? "3px solid white" : "1px transparent",
                  }}
                >
                  {isFlipped ? (
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                  ) : (
                    <img
                      src="backsideimage.png"
                      alt="hidden"
                      className="w-22 h-22 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
