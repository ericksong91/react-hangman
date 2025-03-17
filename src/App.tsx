import { useState } from "react";
import words from "./wordList.json";
import Keyboard from "./components/Keyboard";
import HangmanWord from "./components/HangmanWord";
import HangmanDrawing from "./components/HangmanDrawing";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="main-container w-[800px] flex flex-col gap-[2rem] my-0 mx-auto items-center">
      <div className="text-container font-medium text-center">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
};

export default App;
