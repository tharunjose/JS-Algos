function is_anagram(str1, str2) {
  var hashMap = {}, ch;
  for(var i in str2) {
    ch = str2[i];
    if(ch in hashMap) {
      hashMap[ch]++;
    } else {
      hashMap[ch] = 1;
    }
  }
  var char;
  for(var j in str1) {
    char = str1[j];
    if(char in hashMap && hashMap[char] != 0) {
      hashMap[char]--;
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(is_anagram('laap', 'apal'));
