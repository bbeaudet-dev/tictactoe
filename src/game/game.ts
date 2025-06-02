import { useState } from 'react'

export type Player = 'x' | 'o'
export type Cell = Player | null
export type Game = {
    board: Cell[][]
    currentPlayer: Player
}

export const initialGameState: Game = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    currentPlayer: 'x'
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

