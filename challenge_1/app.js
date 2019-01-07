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

var currentBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null] ];




// let boxes = document.querySelectorAll('td');

//grab all the table data cells
let board = document.getElementById('game-board');
let boxes = document.getElementsByClassName('game-box');


var handleSpaceOnClick = function(el) {
  if(el.classList.contains('game-box')) {
    //check if the playCount is odd or even
    if(playCount % 2 === 0) {
      //update board on browser
      el.innerHTML = player2;
      //update currentBoardState by passing el data attribute value for row and index
      updateCurrentBoard(el.dataset.row, el.dataset.index, player2);
    } else {
      el.innerHTML = player1;
      updateCurrentBoard(el.dataset.row, el.dataset.index, player1);
    }
    playCount += 1;
  }
}

var updateCurrentBoard = function(row, col, player) {
  currentBoardState[row][col] = player;
}


/*
// saving the game in place
// */

// var saveGameInPlace = function() {

// }



var handleGameRestart = function(el) {
  if(el.classList.contains('new-game')) {
    //invoke the createNewGame
    startNewGameBoard()
  }
}

/*
resetting the game
*/


var startNewGameBoard = function() {
  //empty all the boxes and refresh the playCount to 1
  Array.from(boxes).forEach(box => {
    box.innerHTML = null;
    playCount = 1;
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









