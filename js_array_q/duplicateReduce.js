/**
 * js中一维数组去重
 * 使用对象的键值进行去重，然后取出键值存在原数组中
 * 优点：速度快，只要一次遍历，时间复杂度为o(n)
 * 缺点：元数组为非字符型，生成的数组元素都是字符型，但JS为弱类型，基本不影响使用
 * 缺点：去重后数组相对位置不能保证
 */
function duplicateReduce1(arr) {
	var temp = {};
	arr.forEach(function(item, index, arr) {
		if((typeof temp[item]) == 'undefined') {
			temp[item] = 1;
		}
	});
	arr.length = 0;
	for(var i in temp){
		arr.push(i);
	}
	return arr;
}

var test1 = [1,2,3,5,1,5,6,9,1,7,4,3];
var res1 = duplicateReduce1(test1);
console.log(res1); //输出：[ '1', '2', '3', '4', '5', '6', '7', '9' ] 都变为字符型了！

/**
 * 使用indexOf来实现
 * 优点：相对顺序不变，且不发生类型转换
 * 缺点：速度慢，时间复杂度o(n^2)
 */
function duplicateReduce2(arr) {
	var temp = new Array();
	arr.forEach(function(item, index, arr) {
		if(temp.indexOf(item) == -1) {
			temp.push(item);
		}
	});
	return temp;
}
var test2 = [1,2,3,5,1,5,6,9,1,7,4,3];
var res2 = duplicateReduce2(test2);
console.log(res2); //输出：[ 1, 2, 3, 5, 6, 9, 7, 4 ]
