function spacify () {
	var str = "hello world";
	var opstr = '';
	for(var i in str) {
		opstr += expand(str[i])
	}
	console.log(opstr);
}
function expand (char) {
	if(char !== ' ' ) {
		return char + ' ';
	}
	return char;
}
spacify();
