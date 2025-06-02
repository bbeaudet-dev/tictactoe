import { move, type Cell, initialGameState, checkEndgame } from './game/game.ts'
import { useState } from 'react'
import './App.css'

function App() {
  const [game, setGame] = useState(initialGameState)
  const [gameOver, setGameOver] = useState(false)
  const [message, setMessage] = useState(game.currentPlayer + 'turn')

  const makeMove = (row: number, col: number) => {
    setGame(move(game, row, col))
    if (checkEndgame(game)) setGameOver(true)
    if (game.status === 'in-progress') {
      setMessage(game.currentPlayer)
    } else {
      setMessage('Tie')
    }
  }

  const renderCells = (col: Cell[], rowIndex: number) => {
    return (
      <div>
        {col.map((cell: Cell, colIndex: number) => {
          return (
            <button disabled={gameOver} onClick={() => makeMove(rowIndex, colIndex)}>
              {JSON.stringify(cell)}
            </button>
          )
        })
        }
      </div >
    )
  }

  return (
    <>
      <h2>Tic-Tac-Toe</h2>
      {game.board.map(renderCells)}
      <p>{message}</p>
      <p></p>
    </>
  )
}

export default App