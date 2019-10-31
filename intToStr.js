function intToString (number) {
  var isNeg,op_str='',str = '';
  if(number < 0 ) {
    isNeg = true;
    number = number * -1;
  }
  if(number == 0) {
    return '0';
  }
  // mod the number to get chars of the str
  while (number > 0) {
    str += number%10;
  //divide the number to get the next part of substr
    number = Math.floor(number/10);
  }
   if(isNeg) {
     op_str += '-';
   }
   op_str += reverse(str);
   return op_str;
}
function reverse (str) {
  var newstr = '';
  for(var i = 0; i<=str.length-1; i++) {
      newstr += (str.charAt(str.length-i-1));
  }
  return newstr;
}
var num = 123;
console.log(intToString(num));
