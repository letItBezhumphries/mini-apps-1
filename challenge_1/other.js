var player1 = "X";
var player2 = "O";
var playCount = 1;



var createBoard = function() {
  // return {

  // }
  return [0, 0, 0, 0, 0, 0, 0, 0, 0];
}


const board = document.getElementById('game-board');
let boxes = document.getElementsByClassName('game-box');

var toggleElemClassOnClick = function(el) {
  if(el.className === "game-box") {
    el.className = "disabled"
  }
}

// function handles a players turn when user click on a square

var handleTurnOnClick = function(el) {
  //create a new board to pass down to updateBoard function and the boardWinChecker function
  var newBoard = createBoard();
  
  //checks if the el classList has the same class as table cell
  if(el.classList.contains('game-box')) {
    //check if the playCount is odd or even to determine the turn and if x or o is added
    if(playCount % 2 === 0) {
      el.innerHTML = player2;
    } else {
      el.innerHTML = player1;
    }
    playCount += 1; //increment the playCount
    toggleElemClassOnClick(el);  //disable a square from being clicked again
    updateStateBoard(newBoard); 
  }
}

var updateStateBoard = function(stateBoard) {
  var elems = board.getElementsByTagName('td');
  //iterate over the cells
  Array.from(elems).forEach(elem => {
    if(elem.className === "disabled") {
      var index = elem.dataset.index;
      if(elem.innerHTML === "X") {
        stateBoard[index] = 1;
      }
      if(elem.innerHTML === "O") {
        stateBoard[index] = 2;
      }
    }
  });
  console.log("STATE", stateBoard);
  checkRows(stateBoard);
  checkColums(stateBoard);
  checkDiagonals(stateBoard);
  // checkForDraw(stateBoard);
}

/*
resetting the game
*/
var toggleElemClassOnRestart = function(el) {
  el.className = "game-box";
}

var handleGameRestart = function(el) {
  if(el.classList.contains('new-game')) {
    //invoke the refreshBoard function to reset the page
    boardRefresh();
  }
}

var boardRefresh = function() {
  //empty all the boxes and refresh the playCount to 1
  var elems = board.getElementsByTagName('td');
  Array.from(elems).forEach(elem => {
    elem.innerHTML = null;
    playCount = 1;
    toggleElemClassOnRestart(elem);
  });
}

/* CHECKING FOR WINS *********
Below are functions for checking if there is a winner
by populating the currentBoard every time a box is clicked
*/

// var boardWinChecker = function(board) {

// }



var checkRows = function(board) {
  //grab all the elements with dataset-row = 1
  if((board.slice(0, 3).join('') === "XXX") || (board.slice(3, 6).join('') === "XXX") || (board.slice(6).join('') === "XXX")) {
    window.alert("Player 1 won!");
    boardRefresh();
    return true;
    //player1.wins = player1.wins + 1
  } else if((board.slice(0, 3).join('') === "OOO") || (board.slice(3, 6).join('') === "OOO") || (board.slice(6).join('') === "OOO")) {
    window.alert("Player 2 won!");
    //player2.wins = player2.wins + 1;
    boardRefresh();
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
    boardRefresh();
    return true;
  } else if((column1 === "OOO") || (column2 === "OOO") || (column3 === "OOO")) {
    window.alert("Player 2 won!");
    boardRefresh();
    return true;
  } else {
    return false;
  }
}                       

var checkDiagonals = function(board) {
  var diagTopLeft = board[0] += board[4] += board[8];
  console.log("DIAGONALTOPLEFT should be 0-4-8", diagTopLeft);
  var diagTopRight = board[2] += board[4] += board[6];
  console.log("DIAGONALTOPRIGHT should be 2-4-8", diagTopRight);
  if((diagTopLeft === "XXX") || (diagTopRight === "XXX")) {
    window.alert("Player 1 won!");
    boardRefresh();
    return true;
  } else if((diagTopLeft === "OOO") || (diagTopRight === "OOO")) {
    window.alert("Player 2 won!");
    boardRefresh();
    return true;
  } else {
    return false;
  }
}

// var checkForDraw = function(board) {
//   //iterate over the boardState and check if a null value exist in board
//   for(var i = 0; i < board.length; i++) {
//     if(board[i] === null) {
//       return;
//     } else if((checkRows(board) === false) && (checkColums(board) === false) && (checkDiagonals(board) === false)) {
//       window.alert('Shucks looks like a draw! Play again?');
//       //push that board onto the boardHistory
//       //increment the tally results
//       boardRefresh();
//     } 
//   } 
// }


// var checkRows = function(board) {
//   //grab all the elements with dataset-row = 1
//   if((board.slice(0, 3).join('') === "XXX") || (board.slice(3, 6).join('') === "XXX") || (board.slice(6).join('') === "XXX")) {
//     window.alert("Player 1 won!");
//     boardRefresh();
//     return true;
//     //player1.wins = player1.wins + 1
//   } else if((board.slice(0, 3).join('') === "OOO") || (board.slice(3, 6).join('') === "OOO") || (board.slice(6).join('') === "OOO")) {
//     window.alert("Player 2 won!");
//     //player2.wins = player2.wins + 1;
//     boardRefresh();
//     return true;
//   } else {
//     return false;
//   }
// }

// var checkColums = function(board) {
//   var column1 = board[0] += board[3] += board[6];
  
//   var column2 = board[1] += board[4] += board[7];
//   var column3 = board[2] += board[5] += board[8];
//   if((column1 === "XXX") || (column2 === "XXX") || (column3 === "XXX")) {
//     window.alert("Player 1 won!");
//     boardRefresh();
//     return true;
//   } else if((column1 === "OOO") || (column2 === "OOO") || (column3 === "OOO")) {
//     window.alert("Player 2 won!");
//     boardRefresh();
//     return true;
//   } else {
//     return false;
//   }
// }                       

// var checkDiagonals = function(board) {
//   var diagTopLeft = board[0] += board[4] += board[8];
//   // console.log("DIAGONALTOPLEFT should be 0-4-8", diagTopLeft);
//   var diagTopRight = board[2] += board[4] += board[6];
//   // console.log("DIAGONALTOPRIGHT should be 2-4-8", diagTopRight);
//   if((diagTopLeft === "XXX") || (diagTopRight === "XXX")) {
//     window.alert("Player 1 won!");
//     boardRefresh();
//     return true;
//   } else if((diagTopLeft === "OOO") || (diagTopRight === "OOO")) {
//     window.alert("Player 2 won!");
//     boardRefresh();
//     return true;
//   } else {
//     return false;
//   }
// }