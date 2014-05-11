/**
 * 折半查找,折半查找适用于已经排好序的顺序表，时间复杂度o(logn)
 */
function binarySearch(arr, key) {
	var low = 0, high = arr.length-1, mid = parseInt((high + low) / 2);
	while(low <= high) {
		if (arr[mid] == key) {
			return mid;
		}
		if(arr[mid] > key) {
			high = mid - 1;
			mid = parseInt((high + low) / 2);
		} else {
			low = mid+1;
			mid = parseInt((high + low) / 2); 
		}
	}
	return -1;
}

var test = [1,3,5,6,7,9,10];
var res = binarySearch(test, 1);
console.log(res);