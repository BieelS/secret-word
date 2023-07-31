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
  
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  console.log(words)

  return (
    <>
      <div className='App'>
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game />}
        {gameStage === 'end' && <End />}
      </div>
    </>
  )
}

export default App
