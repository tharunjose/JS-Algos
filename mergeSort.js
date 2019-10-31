function mergeSorted(a, b){
	var c= [];
	while(a.length && b.length){
		if(b[0]<= a[0]) c.push(b.shift());
		else c.push(a.shift());
	}
  console.log(b);
	if(a.length) c.push(a);
	if(b.length) c.push(b);
	return c;
}
var a1= [1, 3, 5, 7];
var b1= [2, 4, 5, 6, 8, 9];
console.log(mergeSorted(a1, b1));
