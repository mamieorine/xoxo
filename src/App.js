import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Squares.js';


class Board extends React.Component {
  state = { 
    squares:[
      null, null, null,
      null, null, null,
      null, null, null,
    ],
    turn: 'X',
    winner: '',
  };

  renderSquare = (i) => {
    return (
      <Square
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)} 
      />
    );
  }

  checkWin = (squares) => { 
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]

    for (let i=0; i < lines.length; i++ ) {
      const [a, b, c] = lines[i];
      console.log(lines[i])
      if (squares[a] === squares[b] && squares[b] === squares[c] && squares[a] !== null) {
        console.log(squares[a] + ' is Winner!');
        
        return squares[a];
      }
    }
    return '';
  }

  handleClick = (i) => {
    const squares = this.state.squares;
    const turn    = this.state.turn;
    let newTurn;

    if (squares[i] == null) {
      squares[i] = turn;
    }
    if (turn === 'X') {
      newTurn = 'O';
    } else {
      newTurn = 'X';
    }

    const theWinner = this.checkWin(squares);
    this.setState({squares: squares, turn: newTurn, winner: theWinner});
  }

  render() {
    let winner = '';
    console.log(this.state)
    if (this.state.winner !== '') {
      winner = <h3>The winner is {this.state.winner} </h3>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="game">
            <div className="row row-1">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="row row-2">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="row row-3">
              {this.renderSquare(7)}
              {this.renderSquare(8)}              
              {this.renderSquare(9)}
            </div>
          </div>
          <div className="info">
            <h5> Turn: {this.state.turn}</h5> 
            {winner}
          </div>
        </header>
      </div>
    ) 
}
}

export default Board;
