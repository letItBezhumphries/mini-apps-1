var player1 = "X";
var player2 = "O";
var playCount = 1;

//event listener that listens for a click event on a table data cell
// document.addEventListener('click', function(event) {
//   var clickedElem = event.target;
//   if(clickedElem.classList.contains("game-box")) {
//     handleTurn(clickedElem);
//   }
// }, false);



// let boxes = document.querySelectorAll('td');

//grab all the table data cells
let board = document.getElementById('game-board');
let boxes = document.getElementsByClassName('game-box');

var toggleElemClassOnClick = function(el) {
  if(el.className === "game-box") {
    el.className = "disabled"
  }
}

var handleSpaceOnClick = function(el) {
  if(el.classList.contains('game-box')) {
    //check if the playCount is odd or even
    if(playCount % 2 === 0) {
      el.innerHTML = player2;
    } else {
      el.innerHTML = player1;
    }
    playCount += 1;
    toggleElemClassOnClick(el)
    console.log(el.className)
  }
}


/*
// saving the game in place
// */

// var saveGameInPlace = function() {

// }

/*
resetting the game
*/
var toggleElemClassOnRestart = function(el) {
  // if(el.className === "game-box" || el.className === "disabled") {
  //   el.className = "game-box"
  // }
  el.className = "game-box";
}

var handleGameRestart = function(el) {
  if(el.classList.contains('new-game')) {
    //invoke the createNewGame
    startNewGameBoard()
  }
}

var startNewGameBoard = function() {
  //empty all the boxes and refresh the playCount to 1
  var elems = board.getElementsByTagName('td');
  Array.from(elems).forEach(elem => {
    elem.innerHTML = null;
    playCount = 1;
    toggleElemClassOnRestart(elem);
  });
}

/*
Below are functions for checking if there is a winner
*/

checkForWinnerRows = function() {
  
}

checkForWinnerColums = function() {

}

checkForWinnerDiagonals = function() {

}

checkForScratchGame = function() {

}

// var Board = function(topRow, midRow, bottomRow, colIndex0, colIndex1, colIndex2, diagTopLeft, diagTopRight) {
//   this.gameId = 
//   this.topRow = topRow; 
//   this.midRow = midRow;
//   this.bottomRow = bottomRow;
//   this.colIndex0 = colIndex0;
//   this.colIndex1 = colIndex1;  
//   this.colIndex2 = colIndex2;
//   this.diagTopLeft = diagTopLeft;
//   this.diagTopRight = diagTopRight;
// } 


// document.addEventListener('DOMContentLoaded', function(event) {
//   handleGameRestart();
// })

// var updateCurrentBoard = function(row, col, player) {
//   currentBoardState[row][col] = player;
//   console.log(row);
//   console.log(col);
//   console.log(player);
// }


















