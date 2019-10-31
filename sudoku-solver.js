function solve (board) {
    var i,j, num, all_nums = [1,2,3,4,5,7,8,9];
    //Check if the board array exists
    if (board==null||board.length==0){
      return;
    }
    for(i = 0; i < board.length; i++) {
      //array which represents a single row
      var row = board[i];
      for(j = 0; j < row.length; j++) {
        //look for an zero element in the array
        if(row[j] == 0) {
          for(var k in all_nums) {
            num = all_nums[k];
            if(isValidPosition(board, i, j, num)) {
              board[i][j] = num;
              if(solved(board)) {
                return true;
              } else {
                board[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
      return true;
    }
  }
  function isValidPosition (board, row, col, n) {
    //checking each column
    for(var i = 0; i < 9; i++ ) {
      if(board[i][col] == n) {
        return false;
      }
    }
    //checking each column
    for(var j = 0; j < 9; j++ ) {
      if(board[row][j] == n) {
        return false;
      }
    }
    //checking 3 X 3 grid
    //Using math floor as javascript returns a floating point 1.33 if 4/3
    var initial_val = Math.floor(row/3*3);
    for( var i = initial_val; i < initial_val + 3; i++ ) {
      for(var j = initial_val; j < initial_val + 3; j++ ) {
        if (board[i][j] == n){
          return false;
        }
      }
    }
    return true;
  }
  var board = [[]]; //2d array
  console.log(solve(board));
