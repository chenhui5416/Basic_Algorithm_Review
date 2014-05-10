/**
 * 循环顺序表的查找，不适用与有重复元素出现情况
 */
function cycleSearch(arr, key) {
	var low = 0, high = arr.length - 1;
	while(low <= high) {
		var mid = parseInt( (low + high) /2);
		if(arr[mid] == key) {
			return mid;
		}
		if(arr[low] <= arr[mid]) {
			if(key > arr[mid]) {
				low = mid + 1;
			} else {
				if (key >= arr[low]) {
					high = mid - 1;
				} else {
					low = mid + 1;
				}
			}
		} else {
			if(key < arr[mid]) {
				high = mid - 1;
			} else {
				if(key <= arr[high]) {
					low = mid + 1;
				} else {
					high = mid - 1;
				}
			}
		}
	}
	return -1;
}

var test = [7,8,9,0,1,2,3,4,5,6];
var res = cycleSearch(test, 7);console.log(res);
var res = cycleSearch(test, 8);console.log(res);
var res = cycleSearch(test, 9);console.log(res);
var res = cycleSearch(test, 0);console.log(res);
var res = cycleSearch(test, 1);console.log(res);
var res = cycleSearch(test, 2);console.log(res);
var res = cycleSearch(test, 3);console.log(res);
var res = cycleSearch(test, 4);console.log(res);
var res = cycleSearch(test, 5);console.log(res);
var res = cycleSearch(test, 6);console.log(res);
