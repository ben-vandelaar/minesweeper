document.addEventListener('DOMContentLoaded', startGame);
// Define your `board` object here!
var board = {
  cells:[
    {     
      row : 0,
      col: 0,
      isMine: false,
      hidden:true
    },
    {     
      row : 0,
      col: 1,
      isMine: false,
      hidden:true
    },
    {     
      row : 0,
      col: 2,
      isMine: false,
      hidden:true
    },
    {     
      row : 1,
      col: 0,
      isMine: false,
      hidden:true
    },
    {     
      row : 1,
      col: 1,
      isMine: true,
      hidden:true
    },
    {     
      row : 1,
      col: 2,
      isMine: false,
      hidden:true
    },
    {     
      row : 2,
      col: 0,
      isMine: false,
      hidden:true
    },
    {     
      row : 2,
      col: 1,
      isMine:true,
      hidden:true
    },
    {     
      row : 2,
      col: 2,
      isMine: false,
      hidden:true
    }
  ]
};

let cellLen = board.cells.length;

function startGame () {
  
  for(let i = 0; i < cellLen; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);

  // Don't remove this function call: it makes the game work!
  lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
for (let i =0; i < cellLen; i++){
    if (board.cells[i].isMine && !board.cells[i].isMarked){
      return; 
    }
    if (board.cells[i].isMarked && !board.cells[i].isMine && board.cells[i].hidden) {
      return;
    }
    if (!board.cells[i].isMine && board.cells[i].hidden) {
      return;
    } 
  } 
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
   lib.displayMessage('You win!');
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let count = 0;
  for(let i = 0; i < surrounding.length; i++){
    if(surrounding[i].isMine === true){
      count ++;
    }
  }return count;
}