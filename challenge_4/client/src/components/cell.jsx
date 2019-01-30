import React from 'react';

const cellStyle = {
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor:'rgba(0,0,0,0.2)',
  alignItems:'center',
  justifyContent:'center',
  width:50,
  height:50,
  backgroundColor:'#fff',
  borderRadius:50
}


const Cell = (props) => {
  // console.log('playerCtrl inside cell',);
  // let color = 'white';
  // if (props.player === 1) {
  //   color = 'red';
  // } else if (props.player === 2) {
  //   color = 'yellow';
  // }
  // className={color}

  return <td className="cell"><button style={cellStyle} data-x={props.x} data-y={props.y} onClick={() => console.log(`data-x ${props.x} and data-y ${props.y}`)}></button></td>  
}

export default Cell;