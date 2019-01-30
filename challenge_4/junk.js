// // import React, {Component} from 'react';

// // // import React from 'react';

// // // function Cell(props) {
// // //   return (
// // //     <td className="cell">
// // //       <button style={boardStyles} data-x={props.x} data-y={props.y}></button>
// // //     </td>
// // //   )
// // // }

// // // export default Cell;
// // // import React from 'react';
// // // import Cell from './cells.jsx'

// // // const cellColors = {
// // //   'player1': 'black',
// // //   'player2': 'red',
// // //   'none': 'none'
// // // }


// // // function Row(props) {
  
// // //   const columnIndexes = [0,1,2,3,4,5,6];
// // //   return row = props.row.map(function(cell, x) {

// // //   })
// // //     <tr><Cell x={0}/><Cell x={1}/><Cell x={2}/><Cell x={3}/><Cell x={4}/><Cell x={5}/><Cell x={6}/></tr>
// // //   )
// // // }

// // // export default Row;






// // function Cell(props) {
// //   return (
// //     <button className="cell" 
// //       onClick={props.onClick} >
// //       {props.value}
// //     </button>
// //   )
// // } 

// // class Board extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       board: [
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0]
// //       ],
// //       playerOneIsNext: true,
// //       winner: false,
// //       scoreboard: {
// //         pOne: 0,
// //         pTwo: 0
// //       }
// //     };
// //   }


// //   handleTurn() {

// //   }


// //   renderRow() {

// //   }

// //   render() {

// //     // const gameStatus = `Player ${player} ready?`; 
// //     // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
// //     //use map to map out array of rows
// //     return (
// //       <div>
// //       <div className="status">{status}</div>
// //         <div className="board">
// //           {this.renderCell(0)}
// //           {this.renderCell(1)}
// //           {this.renderCell(2)}
// //           {this.renderCell(3)}
// //           {this.renderCell(4)}
// //           {this.renderCell(5)}
// //           {this.renderCell(6)}
// //         </div>
// //         <div className="board-row">
// //           {this.renderCell(0)}
// //           {this.renderCell(1)}
// //           {this.renderCell(2)}
// //           {this.renderCell(3)}
// //           {this.renderCell(4)}
// //           {this.renderCell(5)}
// //           {this.renderCell(6)}
// //         </div>
// //         <div className="board-row">
// //           {this.renderCell(0)}
// //           {this.renderCell(1)}
// //           {this.renderCell(2)}
// //           {this.renderCell(3)}
// //           {this.renderCell(4)}
// //           {this.renderCell(5)}
// //           {this.renderCell(6)}
// //         </div>
// //         <div className="board-row">
// //           {this.renderCell(0)}
// //           {this.renderCell(1)}
// //           {this.renderCell(2)}
// //           {this.renderCell(3)}
// //           {this.renderCell(4)}
// //           {this.renderCell(5)}
// //           {this.renderCell(6)}
// //         </div>
// //         <div className="board-row">
// //           {this.renderCell(0)}
// //           {this.renderCell(1)}
// //           {this.renderCell(2)}
// //           {this.renderCell(3)}
// //           {this.renderCell(4)}
// //           {this.renderCell(5)}
// //           {this.renderCell(6)}
// //         </div>
// //         <div className="board-row">
// //           {this.renderCell(0)}
// //           {this.renderCell(1)}
// //           {this.renderCell(2)}
// //           {this.renderCell(3)}
// //           {this.renderCell(4)}
// //           {this.renderCell(5)}
// //           {this.renderCell(6)}
// //         </div>

// //       </div>
// //     );
// //   }
// // }













// // // function calculateWinner(squares) {
// // //   const lines = [
// // //     [0, 1, 2],
// // //     [3, 4, 5],
// // //     [6, 7, 8],
// // //     [0, 3, 6],
// // //     [1, 4, 7],
// // //     [2, 5, 8],
// // //     [0, 4, 8],
// // //     [2, 4, 6],
// // //   ];
// // //   for (let i = 0; i < lines.length; i++) {
// // //     const [a, b, c] = lines[i];
// // //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
// // //       return squares[a];
// // //     }
// // //   }
// // //   return null;
// // // }



// // export default Board;



// // import React, {Component} from 'react';







// // class Board extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       board: [
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0],
// //         [0, 0, 0, 0, 0, 0, 0]
// //       ],
// //       playerOneIsNext: true,
// //       winner: false,
// //       scoreboard: {
// //         pOne: 0,
// //         pTwo: 0
// //       }
// //     };
// //   }


// //   handleTurn(x, y) {

// //   }

// //   renderCell(x, y) {
// //     return (
// //       <Cell value={this.state.cells[x]}
// //             onClick={() => this.handleTurn(x)} />
// //     );
// //   }


// //   renderRow(y) {
// //     return (
// //       <Row value={this.state.rows[y]}
// //             onClick={() => this.handleTurn(y) }>
// //         <tr className="board-row">
// //           {this.renderCell(0)}
// //           {this.renderCell(1)}
// //           {this.renderCell(2)}
// //           {this.renderCell(3)}
// //           {this.renderCell(4)}
// //           {this.renderCell(5)}
// //           {this.renderCell(6)}
// //         </tr>
// //       </Row>
// //     )
// //   }

// //   render() {

// //     // const gameStatus = `Player ${player} ready?`; 
// //     // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
// //     //use map to map out array of rows
// //     return (
// //       <div>
// //       <div className="status">{status}</div>
// //         <div className="board">
// //           {this.renderRow(0)}
// //           {this.renderRow(1)}
// //           {this.renderRow(2)}
// //           {this.renderRow(3)}
// //           {this.renderRow(4)}
// //           {this.renderRow(5)}
// //         </div>
// //       </div>
// //     );
// //   }
// // }


// import React from 'react';

// const boardStyles = {
//   borderWidth:1,
//   borderColor:'rgba(0,0,0,0.2)',
//   alignItems:'center',
//   justifyContent:'center',
//   width:100,
//   height:100,
//   backgroundColor:'#fff',
//   borderRadius:100
// }

// function Cell(props) {
//   return (
//     <button className="cell" 
//       onClick={props.onClick} >
//       {props.value}
//     </button>
//   )
// } 


// function Row(props) {
//   return (
//     <div></div>
//   )
// }

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       board: [
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0]
//       ],
//       playerOneIsNext: true,
//       winner: false,
//       scoreboard: {
//         pOne: 0,
//         pTwo: 0
//       }
//     }
//   }

//   renderCell(x, y) {
//     return (
//       <Cell value={this.state.cells[x]}
//             onClick={() => this.handleTurn(x, y)} />
//     );
//   }

//   renderRow(x, y) {
//     return (
//       <Row value={this.state.rows[y]}
//             onClick={() => this.handleTurn(y, x) }>
//         <tr className="board-row">
//           {this.renderCell(0)}
//           {this.renderCell(1)}
//           {this.renderCell(2)}
//           {this.renderCell(3)}
//           {this.renderCell(4)}
//           {this.renderCell(5)}
//           {this.renderCell(6)}
//         </tr>
//       </Row>
//     )
//   }


//   render() {
//     return (
//       <div className="board">
//         {this.renderRow(0)}
//         {/* {this.renderRow(1)}
//         {this.renderRow(2)}
//         {this.renderRow(3)}
//         {this.renderRow(4)}
//         {this.renderRow(5)} */}
//       </div>
//     )
//   }
// }

// export default Board;










// // // function calculateWinner(squares) {
// // //   const lines = [
// // //     [0, 1, 2],
// // //     [3, 4, 5],
// // //     [6, 7, 8],
// // //     [0, 3, 6],
// // //     [1, 4, 7],
// // //     [2, 5, 8],
// // //     [0, 4, 8],
// // //     [2, 4, 6],
// // //   ];
// // //   for (let i = 0; i < lines.length; i++) {
// // //     const [a, b, c] = lines[i];
// // //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
// // //       return squares[a];
// // //     }
// // //   }
// // //   return null;
// // // }



// // export default Board;

// import React, {Component} from 'react';


// const boardStyles = {
//   borderWidth:1,
//   borderColor:'rgba(0,0,0,0.2)',
//   alignItems:'center',
//   justifyContent:'center',
//   width:100,
//   height:100,
//   backgroundColor:'#fff',
//   borderRadius:100,
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       board: [
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0]
//       ],
//       turn: 0,
//       winner: false,
//       scoreboard: {
//         player1: 0,
//         player2: 0
//       }
//     }
//   }
  

//   render() {
//     //use map to map out array of rows
//     // const boardRows = 
//     return (
//       <div>
//         <Board  
//         />
//       </div>
//     );
//   }
// }

// function Board(props) {

//   return (
//   <tbody> 
//     <tr><Row /></tr>
//     <tr><Row /></tr>
//     <tr><Row /></tr>
//     <tr><Row /></tr>
//     <tr><Row /></tr>
//     <tr><Row /></tr>
//   </tbody> 
//   )
// }



// function Row(props) {
//   return (
//     <div><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></div>
//   )
// }


// function Cell(props) {
//   return (
//     <td className="cell">
//       <button style={boardStyles}></button>
//     </td>
//   )
// }

// export default App; 



// handleClick(i) {
//   //handles the state change of squares
//   //create a copy of the whole state
//   const squares = this.state.squares.slice();
//   if (calculateWinner(squares) || squares[i]) {
//     return;
//   }
//   squares[i] = this.state.xIsNext ? 'X' : 'O';
//   this.setState({ 
//     squares: squares,
//     xIsNext: !this.state.xIsNext, 
//   });
// }

// renderSquare(i) {
//   return (
//     <Square value={this.state.squares[i]}
//     onClick={() => this.handleClick(i) }
//   />
//   );
// }