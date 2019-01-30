import React from 'react';
import Row from './row.jsx'


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ],
      turn: 0,
      winner: false,
      scoreboard: {
        player1: 0,
        player2: 0
      }
    }
    this.handleTurn = this.handleTurn.bind(this)
  }
  
  handleTurn() {
    console.log(event.target.data.x, event.target.data.y)
  }


  render() {
    const rows = this.state.board.map((row, index, array) => {
      return <tr key={index}><Row row={row} y={index} handleTurn={this.handleTurn}/></tr>
    }); 
    return (
      <table>
        <tbody>{rows}</tbody> 
      </table>
    );
  }
}

export default Board;
