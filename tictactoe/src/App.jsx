import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Reset from './components/Reset';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s"


function App() {
  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState([
    ["-", "-", "-"], 
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);
  const [moves, setMoves] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function fetchData() {
      const res = await fetch("https://api.nponit.io/c734e05e43c5b87dd971");
      const myjson = await res.json();
      console.log(myjson);
      setTurn(myjson.turn);
      setValues(myjson.values);
      setMoves(myjson.moves);
      setLoading(false);
    }
    fetchData();
  }, [])

  function appClick(rowNumber, columnNumber){
    console.log("Click en " + rowNumber + columnNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn===PLAYERX ? "X":"0";
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn===PLAYERX ? PLAYER0:PLAYERX);
    setValues(valuesCopy);
    setMoves(moves=> moves + 1);
  }

  function resetClick(){
    console.log("RESET");
    setTurn(PLAYERX);
    setValues([
    ["-", "-", "-"], 
    ["-", "-", "-"],
    ["-", "-", "-"]
    ]);
    setMoves(0);
  }

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      {loading ? "LOADING...":<div>
        <Header turn={turn}/>
        <Board values={values} appClick={appClick}/>
        <h3>Número de movimientos:{moves}</h3>
        <Reset resetClick={resetClick}/></div>}
    </div>
  );
}

export default App;
