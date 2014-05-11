/**
 * js中任意维的多维数组降为一维,使用了原生的forEach，也可以使用循环解决。
 */

function dimensonReduce(arr) {
	var temp = new Array();
	function dReduce(item, index, arr) {
		if(item instanceof Array) {
			item.forEach(dReduce);
		} else {
			temp.push(item);
		}
	}
	arr.forEach(dReduce);
	return temp;
}

var test = [ 1, 2, [ 3, [ 4 ], 5, [ 3, 4, [ 5, [ 6, 7 ] ] ] ] ];
var res = dimensonReduce(test);
console.log(res); //输出 [1,2,3,4,5,3,4,5,6,7]