import React from "react";
import { Link } from "react-router-dom";

function Games() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#834D9B] to-[#D04ED6] text-center flex flex-col items-center py-8 px-4">
      {/* Title */}
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-8">Games</h1>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:pt-5 w-full max-w-6xl">
        {/* Emoji Game */}
        <Link to="/emojigameintro">
          <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-32 h-32 md:w-40 md:h-40 mx-auto p-4 object-contain"
              src="/f44fa4e27d470d3b6a41ca34dd87685e7465f380 (2).png"
              alt="Emoji Game"
            />
            <h1 className="pb-4 text-lg md:text-xl font-bold">Emoji Game</h1>
          </div>
        </Link>

        {/* Memory Matrix */}
        <Link to="/memorygameintro">
          <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h1 className="pt-3 text-lg md:text-xl font-[BreeSerif] font-bold">
              Memory Matrix
            </h1>
            <img
              className="w-32 h-32 md:w-40 md:h-40 mx-auto p-4 object-contain"
              src="/memoryimage.png"
              alt="Memory Matrix"
            />
          </div>
        </Link>

        {/* Rock Paper Scissor */}
        <Link to="/rockpaperintro">
          <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h1 className="pt-3 text-lg md:text-xl font-[BreeSerif] font-bold">
              Rock Paper Scissor
            </h1>
            <img
              className="w-32 h-32 md:w-40 md:h-40 mx-auto p-4 object-contain"
              src="/rockpaperimage.png"
              alt="Rock Paper Scissor"
            />
          </div>
        </Link>

        {/* Card Flip */}
        <Link to="/cardflipgameintro">
          <div className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ">
            <h1 className="pt-3 text-lg md:text-xl font-[BreeSerif] font-bold lg:pt-1">
              Card Flip Memory Game
            </h1>
            <img
              className="w-36 h-36 md:w-44 md:h-44 mx-auto p-4 object-contain lg:p-3"
              src="/cardflipimage.png"
              alt="Card Flip Game"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Games;
