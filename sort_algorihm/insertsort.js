/**
 * 直接插入排序
 * 时间复杂度为o(n^2),空间复杂度o(1)
 */
var a = [4,2,5,7,1,3];
function charusuanfa(arr) {
	var temp; //需要哨兵！可以用a[0]
	for (var i = 1; i<arr.length; i++) {
		if (arr[i] < arr[i-1]) {
			var temp = arr[i];
			var j = i-1;
			for (j; temp < arr[j]; j--) {
				arr[j+1] = arr[j];
			}
			arr[j+1] = temp; //这里是j+1!
		}
	}
	return arr;
}
var arr = charusuanfa(a);
console.log(arr);