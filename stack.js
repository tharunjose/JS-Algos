function Stack() {
  var top;
}
Stack.prototype.push = function(data) {
    var node = {
      data: data,
      next: null
    };
    if(this.top) {
      node.next = this.top;
      this.top = node;
      return;
    }
    this.top = node;
  };
Stack.prototype.pop = function() {
    if(this.top) {
      var tmp = this.top;
      this.top = this.top.next;
      return tmp;
    }
    return null;
};
var sp = new Stack();
sp.push(1);
sp.push(2);
sp.push(3);
sp.pop();
console.log(sp);
