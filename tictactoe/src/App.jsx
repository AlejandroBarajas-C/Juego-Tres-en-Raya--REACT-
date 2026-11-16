import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s"


function App() {
  const [turn, setTurn] = useState(PLAYER0);
  const [value, setValues] = useState([
    ["-", "-", "-"], 
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <header className='myheader'>Turn of player</header>
      <div>
        {
          value.map((rowValues, index)=>{
            let row = rowValues.map((value, columnIndex)=>{
              return <button>{value}</button>
            })
            return <div>{row}</div>
          })
        }
      </div>
    </div>
  );
}

export default App;
