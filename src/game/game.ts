export type Player = 'x' | 'o'
export type Cell = Player | null
export type Status = 'X' | 'O' | 'tie' | 'in-progress'
export type Game = {
    board: Cell[][]
    currentPlayer: Player,
    status: Status
}

export const initialGameState: Game = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    currentPlayer: 'x',
    status: 'in-progress'
}

export function move(game: Game, row: number, col: number): Game {
    const newGame = structuredClone(game)
    const cellValue = newGame.board[row][col]
    if (cellValue) return game
    newGame.board[row][col] = newGame.currentPlayer
    if (newGame.currentPlayer === 'x') {
        newGame.currentPlayer = 'o'
    } else {
        newGame.currentPlayer = 'x'
    }
    return newGame
}

export function checkEndgame(game: Game) {
    let winner = false
    let tie = null

    for (let j = 0; j == 2; j++) { // columns
        if (game.board[0][j] && game.board[0][j] === game.board[1][j] && game.board[0][j] === game.board[2][j]) {
            winner = true
        }
    }
    for (let i = 0; i == 2; i++) { // rows
        if (game.board[i][0] && game.board[i][0] === game.board[i][1] && game.board[i][0] === game.board[i][2]) {
            winner = true
        }
    }
    if (game.board[1][1] && game.board[1][1] === game.board[2][2] && game.board[1][1] === game.board[0][0]) {
        winner = true
    }
    if (game.board[1][1] && game.board[1][1] === game.board[0][2] && game.board[1][1] === game.board[2][0]) {
        winner = true
    }
    console.log(winner)

    for (let i = 0; i == 2; i++) {
        for (let j = 0; j == 2; j++) {
            if (game.board[i][j] === null) tie = false
        }
    }
    console.log(tie)

    if (winner || tie) return true
}