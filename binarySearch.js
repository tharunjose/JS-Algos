function binary_search(a, n, lower, upper) {
  //check center element
  //if target < center the look left
  //else look to the right of the array
  var len = a.length, center;
  if(a[0]>a[len-1]) {
    return 'Array is not sorted.';
  }
  while(true) {
    center = Math.floor((upper+lower)/2);
    if(n == a[center]) {
      return center;
    }
    if(n < a[center]) {
      //look to left of the center
      upper = center - 1;
      binary_search(a, n, lower, upper)
    } else {
      //look to right of the center
      lower = center + 1;
      binary_search(a, n, lower, upper)
    }
  }
}
var arr = [1,2,3,4,5,9,10];
var num = 3;
console.log(binary_search(arr, num, 0, arr.length-1));
