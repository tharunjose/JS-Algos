function check_palindrome (str) {
  var len = str.length;
  for(var i=0; i<len/2; i++) {
    if(str[i] == str[len-1-i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(check_palindrome('toyota'))
