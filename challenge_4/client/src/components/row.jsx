import React from 'react';
import Cell from './cell.jsx'


function Row(props) {
  return props.row.map((cell, idx) => {
    return <Cell key={idx} cell={cell} y={props.y} x={idx} handleTurn={props.handleTurn}/> 
  })
}

// function Row(props) {
//   return props.row.map((cell, xIndex) => {
//     return <Cell key={xIndex} y={props.y} x={xIndex} />
//   });
// }
export default Row;
