import { useState } from 'react'
import './App.css'

// function Cell() {
//   return(
//     <button></button>
//   )
// }

// function Row() {
//   return(
//     <div>
//       <Cell />
//       <Cell />
//       <Cell />
//     </div>
//   )
// }

// function Board() {
//   return(
//     <div>
//       <Row />
//       <Row />
//       <Row />
//     </div>
//   )
// }

const board = [
  ['x','o','x'],
  [null,'x',null],
  [null, null, 'o']
]

function App() {
  const [ currentPlayer, setCurrentPlayer ] = useState('x')
  const [ gameState, setGameState ] = useState(null)
  const [ cell1, setCell1 ] = useState('')
  const [ cell2, setCell2 ] = useState('')

  const changePlayer = () => {
    if (currentPlayer === 'x') {
      setCurrentPlayer('o')
    } else {
      setCurrentPlayer('x')
    }
  }

  const move1 = () => {
    console.log(cell1)
    if (cell1 === 'x' || cell1 === 'o') {
      return console.log(cell1,"is already here")
    }
    setCell1(currentPlayer)
    changePlayer()
  }

  const move2 = () => {
    if (cell2 === 'x' || cell2 === 'o') {
      return console.log(cell2,"is already here")
    }
    setCell2(currentPlayer)
    changePlayer()
  }

  return (
    <>
      <h3>Tic-Tac-Toe</h3>
      <p>Current player: {currentPlayer}</p>
      <button onClick={move1}>{cell1}</button>
      <button onClick={move2}>{cell2}</button>
    </>
  )
}

export default App