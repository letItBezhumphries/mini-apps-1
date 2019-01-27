var player1 = "X";
var player2 = "O";
var playCount = 1;



const createState = function() {
  return {
    topRow: [],
    midRow: [],
    botRow: [], 
    colIndex0: [],
    colIndex1: [],
    colIndex2: [],
    diagLeft: [],
    diagRight: [],
    board: []
  }  
};



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
  var newState = createState();
  
  //checks if the el classList has our className
  if(el.classList.contains('game-box')) {
    //check if the playCount is odd or even to determine the turn
    if(playCount % 2 === 0) {
      el.innerHTML = player2;
    } else {
      el.innerHTML = player1;
    }
    playCount += 1; //increment the playCount
    toggleElemClassOnClick(el);  //disable a square from being clicked again
    updateState(newState); 
  }
}

var updateState = function(stateBoard) {
  var elems = board.getElementsByTagName('td');
  //iterate over the cells
  Array.from(elems).forEach(elem => {
    if(elem.className === "disabled") {
      var index = elem.dataset.index;
      var value = elem.innerHTML;
      getDiagonalsLeft(elem, stateBoard);
      getDiagonalsRight(elem, stateBoard);
      getTopRow(elem, stateBoard);
      getMidRow(elem, stateBoard);
      getBotRow(elem, stateBoard);
      getColIndex0(elem, stateBoard);
      getColIndex1(elem, stateBoard);
      getColIndex2(elem, stateBoard);
    }
  });
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

/* Update state helpers that check for wins *********
Below are functions for checking if there is a winner
by populating the currentBoard every time a box is clicked
*/

var checkForWin = function(array) {
  if(array.length === 3) {
    if(array.every(isPlayer1Value)) {
      window.alert("Player 1 won!");
      boardRefresh();
      return true;
    } else if(array.every(isPlayer2Value)) {
      window.alert("Player 2 won!");
      boardRefresh();
      return true;
    } else {
      return false;
    }
  }
}

var isPlayer1Value = function(val) {
  return val === "X"
}

var isPlayer2Value = function(val) {
  return val === "O";
}

var getTopRow = function(el, stateBoard) {
  //create an array or string
  // var diagonalLeft = [];
  if(el.dataset.row === "0") {
    stateBoard.topRow.push(el.innerHTML);
  }
  console.log(stateBoard.topRow);
  checkForWin(stateBoard.topRow);
}

var getMidRow = function(el, stateBoard) {
  //create an array or string
  // var diagonalLeft = [];
  if(el.dataset.row === "1") {
    stateBoard.midRow.push(el.innerHTML);
  }
  console.log(stateBoard.midRow);
  checkForWin(stateBoard.midRow)
}

var getBotRow = function(el, stateBoard) {
  if(el.dataset.row === "2") {
    stateBoard.botRow.push(el.innerHTML);
  }
  console.log(stateBoard.botRow);
  checkForWin(stateBoard.botRow)
}

var getColIndex0 = function(el, stateBoard) {
  if(el.dataset.column === "0") {
    stateBoard.colIndex0.push(el.innerHTML);
  }
  console.log(stateBoard.colIndex0);
  checkForWin(stateBoard.colIndex0)
}

var getColIndex1 = function(el, stateBoard) {
  if(el.dataset.column === "1") {
    stateBoard.colIndex1.push(el.innerHTML);
  }
  console.log(stateBoard.colIndex1);
  checkForWin(stateBoard.colIndex1)
}

var getColIndex2 = function(el, stateBoard) {
  if(el.dataset.column === "2") {
    stateBoard.colIndex2.push(el.innerHTML);
  }
  console.log(stateBoard.colIndex2);
  checkForWin(stateBoard.colIndex2)
}

var getDiagonalsLeft = function(el, stateBoard) {
  if(el.dataset.diag === "both") {
    stateBoard.diagLeft.push(el.innerHTML);
  }
  if(el.dataset.diag === "left") {
    stateBoard.diagLeft.push(el.innerHTML);
  } 
  checkForWin(stateBoard.diagLeft);
}

var getDiagonalsRight = function(el, stateBoard) {
  if (el.dataset.diag === "both") {
    stateBoard.diagRight.push(el.innerHTML);
  } 
  if (el.dataset.diag === "right") {
    stateBoard.diagRight.push(el.innerHTML);
  }
  checkForWin(stateBoard.diagRight);
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

/*
*********************** model ************************** 
managing of state
*/


/*
************************ views ************************** 
what the user sees 
how state is displayed 
*/




/* 
*********************** controller **********************
user interface --forms, buttons, event listener
*/