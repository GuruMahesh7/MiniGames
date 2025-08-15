import './App.css'
import { Route, Routes } from 'react-router-dom'
import Games from './components/games'
import EmojiGame from './components/emojigame/emojiGame'
import CardFlip from './components/cardFlipgame/cardFlip'
import MemoryMatrix from './components/momorymatrixgame/memoryMatrix'
import RockPaper from './components/rockpaper/rockPaper'
import ResultsPage from './components/emojigame/results'
import EmojiGameIntro from './components/emojigame/interface'
import MemoryMatrixIntro from './components/momorymatrixgame/interface'
import RockPaperIntro from './components/rockpaper/interface'
import CardFlipIntro from './components/cardFlipgame/interface'
import CardGameResult from './components/cardFlipgame/results'
import MemoryMatrixResults from './components/momorymatrixgame/results'
import RockPaperScissorsResult from './components/rockpaper/results'


// const emojisList = [
//   {
//     id: 0,
//     emojiName: 'Face with stuck out tongue',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
//   },
//   {
//     id: 1,
//     emojiName: 'Face with head bandage',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
//   },
//   {
//     id: 2,
//     emojiName: 'Face with hugs',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
//   },
//   {
//     id: 3,
//     emojiName: 'Face with laughing',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
//   },
//   {
//     id: 4,
//     emojiName: 'Laughing face with hand in front of mouth',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
//   },
//   {
//     id: 5,
//     emojiName: 'Face with mask',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
//   },
//   {
//     id: 6,
//     emojiName: 'Face with silence',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
//   },
//   {
//     id: 7,
//     emojiName: 'Face with stuck out tongue and winked eye',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
//   },
//   {
//     id: 8,
//     emojiName: 'Grinning face with sweat',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
//   },
//   {
//     id: 9,
//     emojiName: 'Smiling face with heart eyes',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
//   },
//   {
//     id: 10,
//     emojiName: 'Grinning face',
//     emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
//   },
//   {
//     id: 11,
//     emojiName: 'Smiling face with star eyes',
//     emojiUrl:
//       'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
//   },
// ]

// const choicesList = [
//   {
//     id: 'rock',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
//   },
//   {
//     id: 'scissor',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
//   },
//   {
//     id: 'paper',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
//   },
// ]

// const cardsData = [
//   {
//     name: 'tiger',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
//   },
//   {
//     name: 'lion',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
//   },
//   {
//     name: 'rat',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
//   },
//   {
//     name: 'hen',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
//   },
//   {
//     name: 'elephant',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
//   },
//   {
//     name: 'buffalo',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
//   },
//   {
//     name: 'goat',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
//   },
//   {
//     name: 'zebra',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
//   },
//   {
//     name: 'duck',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
//   },
//   {
//     name: 'pigeon',
//     image:
//       'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
//   },
// ]


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/emojigameintro" element={<EmojiGameIntro />} />
        <Route path="/emojigame" element={<EmojiGame />} />
        <Route path="/emojiresult" element={<ResultsPage />} />
        <Route path="/memorygameintro" element={<MemoryMatrixIntro />} />
        <Route path="/memorygame" element={<MemoryMatrix />} />
        <Route path="/memorygameresults" element={<MemoryMatrixResults />} />
        <Route path="/rockpaperintro" element={<RockPaperIntro />} />
        <Route path="/rockpaper" element={<RockPaper />} />
        <Route path="/cardflipgameintro" element={<CardFlipIntro />} />
        <Route path="/cardflipgame" element={<CardFlip />} />
        <Route path="/cardflipresults" element={<CardGameResult />} />
        <Route path="/rockpaperresults" element={<RockPaperScissorsResult />} />
      </Routes>
    </>
  );
}

export default App
