import React, {Component} from 'react';


const boardStyles = {
  borderWidth:1,
  borderColor:'rgba(0,0,0,0.2)',
  alignItems:'center',
  justifyContent:'center',
  width:100,
  height:100,
  backgroundColor:'#fff',
  borderRadius:100,
}

class App extends React.Component {
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
  }
  

  render() {
    //use map to map out array of rows
    // const boardRows = 
    return (
      <div>
        <Board  
        />
      </div>
    );
  }
}

function Board(props) {

  return (
  <tbody> 
    <tr><Row /></tr>
    <tr><Row /></tr>
    <tr><Row /></tr>
    <tr><Row /></tr>
    <tr><Row /></tr>
    <tr><Row /></tr>
  </tbody> 
  )
}



function Row(props) {
  return (
    <div><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></div>
  )
}


function Cell(props) {
  return (
    <td className="cell">
      <button style={boardStyles}></button>
    </td>
  )
}

export default App;