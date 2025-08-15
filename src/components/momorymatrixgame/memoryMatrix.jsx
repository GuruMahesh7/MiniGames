import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const MemoryMatrix = () => {
  const navigate = useNavigate();

  const [level, setLevel] = useState(1);
  const [gridSize, setGridSize] = useState(3); // starts from 3x3
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [userSelections, setUserSelections] = useState([]);
  const [isShowing, setIsShowing] = useState(true); // showing pattern phase
  const [modalIsOpen, setIsOpen] = React.useState(false);
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

  // Randomly select N highlighted cells
  const generateHighlightedCells = () => {
    let newCells = [];
    while (newCells.length < gridSize) {
      const randomCell = Math.floor(Math.random() * gridSize * gridSize);
      if (!newCells.includes(randomCell)) {
        newCells.push(randomCell);
      }
    }
    setHighlightedCells(newCells);
  };

  // Start a new level
  useEffect(() => {
    generateHighlightedCells();
    setIsShowing(true);
    setUserSelections([]);

    const timer = setTimeout(() => {
      setIsShowing(false); // allow clicks
    }, gridSize * 1000); // N seconds

    return () => clearTimeout(timer);
  }, [level]);

  // Handle user clicking a cell
  const handleCellClick = (index) => {
    if (isShowing) return; // can't click during highlight phase

    if (highlightedCells.includes(index)) {
      if (!userSelections.includes(index)) {
        const updatedSelections = [...userSelections, index];
        setUserSelections(updatedSelections);

        // Win condition for this level
        if (updatedSelections.length === highlightedCells.length) {
          setTimeout(() => {
            setLevel(level + 1);
            setGridSize(gridSize + 1);
          }, 500);
        }
      }
    } else {
      // Wrong cell → Game Over
      navigate("/memorygameresults", {
        state: { score: level, isWin: false },
      });
    }
  };

  // Final win condition (you can set a max level)
  useEffect(() => {
    if (level > 6) {
      navigate("/memorygameresults", {
        state: { score: level - 1, isWin: true },
      });
    }
  }, [level]);

  return (
    <>
      <div className="flex justify-between px-[10%] pt-[3%] bg-gray-900 text-white">
        <button
          className="flex cursor-pointer border-solid border-2 rounded p-2"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
        <button
          onClick={openModal}
          className="cursor-pointer border-solid border-2 rounded p-2"
        >
          Rules
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Rules Modal"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-5 text-gray-500 hover:text-black text-lg"
          >
            ✖
          </button>

          {/* Title */}
          <h2 className="text-xl font-bold text-center mb-5">Rules</h2>

          {/* Rules List */}
          <div className="grid md:grid-cols-2 gap-6 text-black-300 text-sm leading-relaxed">
            <ul className="list-disc list-inside space-y-3">
              <li>
                In each level of the Game, Users should be able to see the Grid
                with (N X N) size starting from 3 and the grid will highlight N
                cells in Blue, the N highlighted cells will be picked randomly.
              </li>
              <li>
                The highlighted cells will remain N seconds for the user to
                memorize the cells. At this point, the user should not be able
                to perform any action.
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
                The user should be promoted to the next level if they guess all
                N cells correctly in one attempt.
              </li>
              <li>
                The user should be taken to the results page if the user clicks
                on the wrong cell.
              </li>
              <li>
                If the user completed all the levels, then the user should be
                taken to the results page.
              </li>
            </ul>
          </div>
        </Modal>
      </div>
      <div className="h-200 lg:h-170 flex flex-col items-center justify-center bg-gray-900 text-white overflow-auto">
        <div className="flex flex-col items-center justify-center pt-0">
          <h1 className="text-3xl font-bold mb-2">Memory Matrix</h1>
          <p className="mb-4">Level - {level}</p>

          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${gridSize}, 60px)`,
            }}
          >
            {Array.from({ length: gridSize * gridSize }, (_, index) => {
              let bgColor = "bg-gray-400"; // default

              if (isShowing && highlightedCells.includes(index)) {
                bgColor = "bg-blue-500";
              } else if (!isShowing && userSelections.includes(index)) {
                bgColor = "bg-blue-500";
              }

              return (
                <div
                  key={index}
                  className={`w-[60px] h-[60px] ${bgColor} rounded cursor-pointer`}
                  onClick={() => handleCellClick(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoryMatrix;
