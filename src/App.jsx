import React, { Component } from 'react'

export class App extends Component {
  state = {
    board: [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
    id: null,
    state: 'new',
    mines: 10,
    // winner: null,
  }

  handleClickCell = async (row, col) => {
    const url = `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`

    const body = { row: row, col: col }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (response.status === 200) {
      const game = await response.json()

      this.setState(game)
    }
  }

  handleRightClickCell = async (event, row, col) => {
    event.preventDefault()

    const url = `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`

    const body = { row: row, col: col }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (response.status === 200) {
      const game = await response.json()

      this.setState(game)
    }
  }

  handleNewGame = async () => {
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )

    if (response.status === 200) {
      const game = await response.json()

      this.setState(game)
    }
  }

  render() {
    return (
      <div>
        <h1>
          MineSweeper! - <button onClick={this.handleNewGame}>New Game</button>
        </h1>
        <h3>{this.state.state}</h3>
        <ul>
          <li
            onClick={() => this.handleClickCell(0, 0)}
            onContextMenu={event => this.handleRightClickCell(event, 0, 0)}
          >
            {this.state.board[0][0]}
          </li>
          <li
            onClick={() => this.handleClickCell(0, 1)}
            onContextMenu={event => this.handleRightClickCell(event, 0, 1)}
          >
            {this.state.board[0][1]}
          </li>
          <li
            onClick={() => this.handleClickCell(0, 2)}
            onContextMenu={event => this.handleRightClickCell(event, 0, 2)}
          >
            {this.state.board[0][2]}
          </li>
          <li
            onClick={() => this.handleClickCell(0, 3)}
            onContextMenu={event => this.handleRightClickCell(event, 0, 3)}
          >
            {this.state.board[0][3]}
          </li>
          <li
            onClick={() => this.handleClickCell(0, 4)}
            onContextMenu={event => this.handleRightClickCell(event, 0, 4)}
          >
            {this.state.board[0][4]}
          </li>
          <li
            onClick={() => this.handleClickCell(0, 5)}
            onContextMenu={event => this.handleRightClickCell(event, 0, 5)}
          >
            {this.state.board[0][5]}
          </li>
          <li
            onClick={() => this.handleClickCell(0, 6)}
            onContextMenu={event => this.handleRightClickCell(event, 0, 6)}
          >
            {this.state.board[0][6]}
          </li>
          <li
            onClick={() => this.handleClickCell(0, 7)}
            onContextMenu={event => this.handleRightClickCell(event, 0, 7)}
          >
            {this.state.board[0][7]}
          </li>
          <li
            onClick={() => this.handleClickCell(1, 0)}
            onContextMenu={event => this.handleRightClickCell(event, 1, 0)}
          >
            {this.state.board[1][0]}
          </li>
          <li
            onClick={() => this.handleClickCell(1, 1)}
            onContextMenu={event => this.handleRightClickCell(event, 1, 1)}
          >
            {this.state.board[1][1]}
          </li>
          <li
            onClick={() => this.handleClickCell(1, 2)}
            onContextMenu={event => this.handleRightClickCell(event, 1, 2)}
          >
            {this.state.board[1][2]}
          </li>
          <li
            onClick={() => this.handleClickCell(1, 3)}
            onContextMenu={event => this.handleRightClickCell(event, 1, 3)}
          >
            {this.state.board[1][3]}
          </li>
          <li
            onClick={() => this.handleClickCell(1, 4)}
            onContextMenu={event => this.handleRightClickCell(event, 1, 4)}
          >
            {this.state.board[1][4]}
          </li>
          <li
            onClick={() => this.handleClickCell(1, 5)}
            onContextMenu={event => this.handleRightClickCell(event, 1, 5)}
          >
            {this.state.board[1][5]}
          </li>
          <li
            onClick={() => this.handleClickCell(1, 6)}
            onContextMenu={event => this.handleRightClickCell(event, 1, 6)}
          >
            {this.state.board[1][6]}
          </li>
          <li
            onClick={() => this.handleClickCell(1, 7)}
            onContextMenu={event => this.handleRightClickCell(event, 1, 7)}
          >
            {this.state.board[1][7]}
          </li>
          <li
            onClick={() => this.handleClickCell(2, 0)}
            onContextMenu={event => this.handleRightClickCell(event, 2, 0)}
          >
            {this.state.board[2][0]}
          </li>
          <li
            onClick={() => this.handleClickCell(2, 1)}
            onContextMenu={event => this.handleRightClickCell(event, 2, 1)}
          >
            {this.state.board[2][1]}
          </li>
          <li
            onClick={() => this.handleClickCell(2, 2)}
            onContextMenu={event => this.handleRightClickCell(event, 2, 2)}
          >
            {this.state.board[2][2]}
          </li>
          <li
            onClick={() => this.handleClickCell(2, 3)}
            onContextMenu={event => this.handleRightClickCell(event, 2, 3)}
          >
            {this.state.board[2][3]}
          </li>
          <li
            onClick={() => this.handleClickCell(2, 4)}
            onContextMenu={event => this.handleRightClickCell(event, 2, 4)}
          >
            {this.state.board[2][4]}
          </li>
          <li
            onClick={() => this.handleClickCell(2, 5)}
            onContextMenu={event => this.handleRightClickCell(event, 2, 5)}
          >
            {this.state.board[2][5]}
          </li>
          <li
            onClick={() => this.handleClickCell(2, 6)}
            onContextMenu={event => this.handleRightClickCell(event, 2, 6)}
          >
            {this.state.board[2][6]}
          </li>
          <li
            onClick={() => this.handleClickCell(2, 7)}
            onContextMenu={event => this.handleRightClickCell(event, 2, 7)}
          >
            {this.state.board[2][7]}
          </li>
          <li
            onClick={() => this.handleClickCell(3, 0)}
            onContextMenu={event => this.handleRightClickCell(event, 3, 0)}
          >
            {this.state.board[3][0]}
          </li>
          <li
            onClick={() => this.handleClickCell(3, 1)}
            onContextMenu={event => this.handleRightClickCell(event, 3, 1)}
          >
            {this.state.board[3][1]}
          </li>
          <li
            onClick={() => this.handleClickCell(3, 2)}
            onContextMenu={event => this.handleRightClickCell(event, 3, 2)}
          >
            {this.state.board[3][2]}
          </li>
          <li
            onClick={() => this.handleClickCell(3, 3)}
            onContextMenu={event => this.handleRightClickCell(event, 3, 3)}
          >
            {this.state.board[3][3]}
          </li>
          <li
            onClick={() => this.handleClickCell(3, 4)}
            onContextMenu={event => this.handleRightClickCell(event, 3, 4)}
          >
            {this.state.board[3][4]}
          </li>
          <li
            onClick={() => this.handleClickCell(3, 5)}
            onContextMenu={event => this.handleRightClickCell(event, 3, 5)}
          >
            {this.state.board[3][5]}
          </li>
          <li
            onClick={() => this.handleClickCell(3, 6)}
            onContextMenu={event => this.handleRightClickCell(event, 3, 6)}
          >
            {this.state.board[3][6]}
          </li>
          <li
            onClick={() => this.handleClickCell(3, 7)}
            onContextMenu={event => this.handleRightClickCell(event, 3, 7)}
          >
            {this.state.board[3][7]}
          </li>
          <li
            onClick={() => this.handleClickCell(4, 0)}
            onContextMenu={event => this.handleRightClickCell(event, 4, 0)}
          >
            {this.state.board[4][0]}
          </li>
          <li
            onClick={() => this.handleClickCell(4, 1)}
            onContextMenu={event => this.handleRightClickCell(event, 4, 1)}
          >
            {this.state.board[4][1]}
          </li>
          <li
            onClick={() => this.handleClickCell(4, 2)}
            onContextMenu={event => this.handleRightClickCell(event, 4, 2)}
          >
            {this.state.board[4][2]}
          </li>
          <li
            onClick={() => this.handleClickCell(4, 3)}
            onContextMenu={event => this.handleRightClickCell(event, 4, 3)}
          >
            {this.state.board[4][3]}
          </li>
          <li
            onClick={() => this.handleClickCell(4, 4)}
            onContextMenu={event => this.handleRightClickCell(event, 4, 4)}
          >
            {this.state.board[4][4]}
          </li>
          <li
            onClick={() => this.handleClickCell(4, 5)}
            onContextMenu={event => this.handleRightClickCell(event, 4, 5)}
          >
            {this.state.board[4][5]}
          </li>
          <li
            onClick={() => this.handleClickCell(4, 6)}
            onContextMenu={event => this.handleRightClickCell(event, 4, 6)}
          >
            {this.state.board[4][6]}
          </li>
          <li
            onClick={() => this.handleClickCell(4, 7)}
            onContextMenu={event => this.handleRightClickCell(event, 4, 7)}
          >
            {this.state.board[4][7]}
          </li>
          <li
            onClick={() => this.handleClickCell(5, 0)}
            onContextMenu={event => this.handleRightClickCell(event, 5, 0)}
          >
            {this.state.board[5][0]}
          </li>
          <li
            onClick={() => this.handleClickCell(5, 1)}
            onContextMenu={event => this.handleRightClickCell(event, 5, 1)}
          >
            {this.state.board[5][1]}
          </li>
          <li
            onClick={() => this.handleClickCell(5, 2)}
            onContextMenu={event => this.handleRightClickCell(event, 5, 2)}
          >
            {this.state.board[5][2]}
          </li>
          <li
            onClick={() => this.handleClickCell(5, 3)}
            onContextMenu={event => this.handleRightClickCell(event, 5, 3)}
          >
            {this.state.board[5][3]}
          </li>
          <li
            onClick={() => this.handleClickCell(5, 4)}
            onContextMenu={event => this.handleRightClickCell(event, 5, 4)}
          >
            {this.state.board[5][4]}
          </li>
          <li
            onClick={() => this.handleClickCell(5, 5)}
            onContextMenu={event => this.handleRightClickCell(event, 5, 5)}
          >
            {this.state.board[5][5]}
          </li>
          <li
            onClick={() => this.handleClickCell(5, 6)}
            onContextMenu={event => this.handleRightClickCell(event, 5, 6)}
          >
            {this.state.board[5][6]}
          </li>
          <li
            onClick={() => this.handleClickCell(5, 7)}
            onContextMenu={event => this.handleRightClickCell(event, 5, 7)}
          >
            {this.state.board[5][7]}
          </li>
          <li
            onClick={() => this.handleClickCell(6, 0)}
            onContextMenu={event => this.handleRightClickCell(event, 6, 0)}
          >
            {this.state.board[6][0]}
          </li>
          <li
            onClick={() => this.handleClickCell(6, 1)}
            onContextMenu={event => this.handleRightClickCell(event, 6, 1)}
          >
            {this.state.board[6][1]}
          </li>
          <li
            onClick={() => this.handleClickCell(6, 2)}
            onContextMenu={event => this.handleRightClickCell(event, 6, 2)}
          >
            {this.state.board[6][2]}
          </li>
          <li
            onClick={() => this.handleClickCell(6, 3)}
            onContextMenu={event => this.handleRightClickCell(event, 6, 3)}
          >
            {this.state.board[6][3]}
          </li>
          <li
            onClick={() => this.handleClickCell(6, 4)}
            onContextMenu={event => this.handleRightClickCell(event, 6, 4)}
          >
            {this.state.board[6][4]}
          </li>
          <li
            onClick={() => this.handleClickCell(6, 5)}
            onContextMenu={event => this.handleRightClickCell(event, 6, 5)}
          >
            {this.state.board[6][5]}
          </li>
          <li
            onClick={() => this.handleClickCell(6, 6)}
            onContextMenu={event => this.handleRightClickCell(event, 6, 6)}
          >
            {this.state.board[6][6]}
          </li>
          <li
            onClick={() => this.handleClickCell(6, 7)}
            onContextMenu={event => this.handleRightClickCell(event, 6, 7)}
          >
            {this.state.board[6][7]}
          </li>
          <li
            onClick={() => this.handleClickCell(7, 0)}
            onContextMenu={event => this.handleRightClickCell(event, 7, 0)}
          >
            {this.state.board[7][0]}
          </li>
          <li
            onClick={() => this.handleClickCell(7, 1)}
            onContextMenu={event => this.handleRightClickCell(event, 7, 1)}
          >
            {this.state.board[7][1]}
          </li>
          <li
            onClick={() => this.handleClickCell(7, 2)}
            onContextMenu={event => this.handleRightClickCell(event, 7, 2)}
          >
            {this.state.board[7][2]}
          </li>
          <li
            onClick={() => this.handleClickCell(7, 3)}
            onContextMenu={event => this.handleRightClickCell(event, 7, 3)}
          >
            {this.state.board[7][3]}
          </li>
          <li
            onClick={() => this.handleClickCell(7, 4)}
            onContextMenu={event => this.handleRightClickCell(event, 7, 4)}
          >
            {this.state.board[7][4]}
          </li>
          <li
            onClick={() => this.handleClickCell(7, 5)}
            onContextMenu={event => this.handleRightClickCell(event, 7, 5)}
          >
            {this.state.board[7][5]}
          </li>
          <li
            onClick={() => this.handleClickCell(7, 6)}
            onContextMenu={event => this.handleRightClickCell(event, 7, 6)}
          >
            {this.state.board[7][6]}
          </li>
          <li
            onClick={() => this.handleClickCell(7, 7)}
            onContextMenu={event => this.handleRightClickCell(event, 7, 7)}
          >
            {this.state.board[7][7]}
          </li>
        </ul>
      </div>
    )
  }
}
