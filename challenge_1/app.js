var player1 = "X";
var player2 = "O";
var playCount = 1;

var scoreBoard = {
  player1: {
    name: null,
    wins: 0,
    losses: 0
  },
  player2: {
    name: null,
    wins: 0,
    losses: 0
  }
}


// document.addEventListener('DOMContentLoaded', function(event) {
  
//   init();
//   handleGameRestart();  
// })

// var GameBoard = function() {
//   // this.gameId = gameId,
//   this.player1 = "X",
//   this.player2 = "O",
//   this.playCount = 1,
//   this.board = [null, null, null, null, null, null, null, null, null];
// }

// const currentBoard = [null, null, null, null, null, null, null, null, null];
const currentBoard = [];

// var init = function() {
//   new GameBoard()
// }

//event listener that listens for a click event on a table data cell
// document.addEventListener('click', function(event) {
//   var clickedElem = event.target;
//   if(clickedElem.classList.contains("game-box")) {
//     handleSpaceOnTurn(clickedElem);
//   }
// }, false);

//grab all the table data cells
const board = document.getElementById('game-board');
let boxes = document.getElementsByClassName('game-box');

var toggleElemClassOnClick = function(el) {
  if(el.className === "game-box") {
    el.className = "disabled"
  }
}

var handleTurnOnClick = function(el) {
  if(el.classList.contains('game-box')) {
    // var idx = el.dataset.index;
    //console.log(idx);
    //check if the playCount is odd or even
    if(playCount % 2 === 0) {
      el.innerHTML = player2;
    } else {
      el.innerHTML = player1;
    }
    playCount += 1;
    toggleElemClassOnClick(el);
    checkForWin(el);
  }
}

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
by populating the currentBoard every time a box is clicked
*/
var checkForWin = function(element) {
  var idx;
  //grab the data cells 
  var elems = board.getElementsByTagName('td');
  //iterate over the cells
  Array.from(elems).forEach(elem => {
    //populate the currentBoard use the data attribute index 
    //assign the matching currentBoard[idx] to that elem.innerHTML
    idx = elem.dataset.index    
    currentBoard[idx] = elem.innerHTML;
  }); 
  checkRows(currentBoard);
  checkColums(currentBoard);
  checkDiagonals(currentBoard);
  checkForDraw(currentBoard);
}


var checkRows = function(board) {
  //grab all the elements with dataset-row = 1
  if((board.slice(0, 3).join('') === "XXX") || (board.slice(3, 6).join('') === "XXX") || (board.slice(6).join('') === "XXX")) {
    window.alert("Player 1 won!");
    startNewGameBoard();
    return true;
    //player1.wins = player1.wins + 1
  } else if((board.slice(0, 3).join('') === "OOO") || (board.slice(3, 6).join('') === "OOO") || (board.slice(6).join('') === "OOO")) {
    window.alert("Player 2 won!");
    //player2.wins = player2.wins + 1;
    startNewGameBoard();
    return true;
  } else {
    return false;
  }
}

var checkColums = function(board) {
  var column1 = board[0] += board[3] += board[6];
  var column2 = board[1] += board[4] += board[7];
  var column3 = board[2] += board[5] += board[8];
  if((column1 === "XXX") || (column2 === "XXX") || (column3 === "XXX")) {
    window.alert("Player 1 won!");
    startNewGameBoard();
    return true;
  } else if((column1 === "OOO") || (column2 === "OOO") || (column3 === "OOO")) {
    window.alert("Player 2 won!");
    startNewGameBoard();
    return true;
  } else {
    return false;
  }
}                       

var checkDiagonals = function(board) {
  var diagTopLeft = board[0] += board[4] += board[8];
  console.log("√√√√√√", diagTopLeft);
  var diagTopRight = board[2] += board[4] += board[6];
  console.log("√√√√√√", diagTopRight);
  if((diagTopLeft === "XXX") || (diagTopRight === "XXX")) {
    window.alert("Player 1 won!");
    startNewGameBoard();
    return true;
  } else if((diagTopLeft === "OOO") || (diagTopRight === "OOO")) {
    window.alert("Player 2 won!");
    startNewGameBoard();
    return true;
  } else {
    return false;
  }
}

var checkForDraw = function(board) {
  //check if board contains an empty string
  if(playCount === 9) {
    if((checkRows === false) && (checkColums === false) && (checkDiagonals === false)) {
      window.alert('Shucks looks like a draw! Play again?');
      startNewGameBoard();
    }
  } 
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




// var updateCurrentBoard = function(row, col, player) {
//   currentBoardState[row][col] = player;
//   console.log(row);
//   console.log(col);
//   console.log(player);
// }

/*
// saving the game in place
// */

// var saveGameInPlace = function() {

// }
















