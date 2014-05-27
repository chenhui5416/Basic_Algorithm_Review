/**
 * 查找数组中出现的元素次数
 */
//我的方法
Array.prototype.numberOfOccurrences = function(tip) {
  var count = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i] === tip) {
    	count++;
    }
  }
  return count;
}
//大神操作
Array.prototype.numberOfOccurrences = function(tip) {
	return this.filter( function(num){return tip === num}).length;
}

var arr = [4, 0, 4];
var occ = arr.numberOfOccurrences(4);
console.log(occ);

