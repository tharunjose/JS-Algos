function spiralify( matrix ) {
  if ( matrix.length == 1 ) {
    return matrix[0];
  }
  var firstRow= matrix[0],
    numRows= matrix.length,
    nextMatrix= [],
    newRow,
    rowId,
    colId= matrix[1].length - 1
  ;
  for ( colId; colId >= 0; colId-- ) {
    newRow = [];
  for ( rowId = 1; rowId < numRows; rowId++ ) {
      newRow.push( matrix[ rowId ][ colId ] );
    }
    nextMatrix.push( newRow );
  }
  
  firstRow.push.apply( firstRow, spiralify( nextMatrix ) );
  return firstRow;
}
var input_array=[
  [11, 12, 13, 14, 15],
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
  [41, 42, 43, 44, 45]
];
