import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s"


function App() {
  const [turn, setTurn] = useState(PLAYER0);
  const [value, setValues] = useState([
    ["-", "-", "-"], 
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  function appClick(rowNumber, columnNumber){
    console.log("Click en " + rowNumber + columnNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn===PLAYERX ? "X":"0";
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn===PALYERX ? PLAYER0:PLAYERX);
    setValues(valuesCopy);
  }

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turn={turn}/>
      <Board values={values} appClick={appClick}/>
    </div>
  );
}

export default App;
