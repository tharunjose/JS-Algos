function productize_array (arr) {
  var op_array = [];
  for(var i = 0; i< arr.length; i++) {
    var current_number = arr[i];
    var product = 1;
      for(var j = 0; j < arr.length; j++) {
        if(i != j ) {
          product = product * arr[j];
        }
      }
    op_array.push(product);
  }
  return op_array
}
var input_array = [1,2,3,4,5,1];
console.log(productize_array(input_array));
