import { move, type Cell, initialGameState } from './game/game.ts'
import { useState } from 'react'
import './App.css'

function App() {
  const [game, setGame] = useState(initialGameState)
  const [selectedCell, setSelectedCell] = useState([])

  const makeMove = (row: number, col: number) => {
    setGame(move(game, row, col))
  }

  const render = (col: Cell[], rowIndex: number) => {
    return (
      <div>
        {col.map((cell: Cell, colIndex: number) => {
          return (
            <button onClick={() => makeMove(rowIndex, colIndex)}>
              {JSON.stringify(cell)}
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <h2>Tic-Tac-Toe</h2>
      {game.board.map(render)}
    </>
  )
}

export default App