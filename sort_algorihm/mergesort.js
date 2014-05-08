/**
 * 二路归并算法
 * 时间复杂度o(nlogn) 空间复杂度o(n)
 * 最坏情况下，合并两个大小为n的已排序数组所需的比较次数为2n-1
 */
function mergesort(arr, low, high) { 
	if (low < high) {
		var mid = parseInt((low + high)/2);
		mergesort(arr, low, mid);
		mergesort(arr, mid+1, high);
		arr = merge(arr, low, mid, high);
	}
	return arr;
}

function merge(arr, low, mid, high) {
	var b = [];
	for (var k = low; k <= high; k++) {
		b[k] = arr[k];
	}
	for (var i = low, j = mid+1, k = i; i <= mid && j <= high; k++) {
		if(b[i] < b[j]) {
			arr[k] = b[i++];
		} else {
			arr[k] = b[j++];
		}
	}
	while (i <= mid) {
		arr[k++] = b[i++];
	}
	while (j<=high) {
		arr[k++] = b[j++];
	}
	return arr;
}

var a = [5,6,8,7,1,4,3];
var temp = mergesort(a, 0, 6);
console.log(temp);
