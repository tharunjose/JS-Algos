function range(a) {
  var op_array = [], str = '';
  for(var i=0; i<a.length; i++) {
    if(a[i+1] == a[i]+1) {
      // continue range
      if(str.length == 0) {
        str += a[i];
      }
    } else {
      // start new range
      str = str + '-' + a[i];
      op_array.push(str);
      str='';
    }
  }
  return op_array;
}
var arr = [1,2,3,4,5,6,7,9,10];
console.log(range(arr));
