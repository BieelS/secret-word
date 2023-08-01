//CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react';

//Data
import { wordsList } from './data/words';

//Components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import End from './components/End';

const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //Pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word);

    return {word, category};
  }
  
  //Start the Secret Word game
  const startGame = () => {
    //Pick word and pick category
     const { word, category } = pickWordAndCategory();

     //Create an array of letters
     let wordLetters = word.split("");

     wordLetters = wordLetters.map((l) => l.toLowerCase());

     console.log(word, category, wordLetters);

     //Fill states
     setPickedWord(word);
     setPickedCategory(category);
     setLetters(letters);

    setGameStage(stages[1].name);
  };

  //Process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //Restart the game
  const retry = () => {
    setGameStage(stages[0].name); 
  }

  
  return (
    <>
      <div className='App'>
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
        {gameStage === 'end' && <End retry={retry} />}
      </div>
    </>
  )
}

export default App
