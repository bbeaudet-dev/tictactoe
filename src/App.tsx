import { game } from './game/game.ts'
import './App.css'

function App() {

  const rowToUI = (row) => {
    return <div>{row.map((cell) => <button>{cell}</button>)}</div>
  }

  return (
    <>
      <h2>Tic-Tac-Toe</h2>
      {game.board.map(rowToUI)}
    </>
  )
}

export default App