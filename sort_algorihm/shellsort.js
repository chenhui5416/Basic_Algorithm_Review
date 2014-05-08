/**
 * 希尔插入排序
 * 最坏时间复杂度(n^2),最优时间复杂度为(n^1.3)空间复杂度o(1)
 */
function shellpaixu(arr,n) {
	var len = arr.length;
	var temp;
	for (var dk = parseInt(len/2); dk>0; dk=parseInt(dk/2)) { 
		for (i = dk; i <= n; i++) {
			if (arr[i] < arr[i-dk]) {
				temp = arr[i];
				for (j = i-dk; temp < arr[j]; j -= dk) {
					arr[j+dk] = arr[j];
				}
				arr[j+dk] = temp;
			}
		}
	}
	return arr;
}

var a = [4,2,5,7,1,3];
var arr = shellpaixu(a,6);
console.log(arr);