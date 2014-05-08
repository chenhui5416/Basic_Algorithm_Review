/**
 * 简单选择排序，将后面最小的排到当前已经排序序的位置
 * 时间复杂度o(n^2),空间复杂度o(1)
 * 
 */
var arr = [4,5,7,1,0,3,8];
function selectSort(arr){
	for(var i=0;i<arr.length-1;i++){
		var min = i;
		for(var j=i+1;j<arr.length;j++){
			if (arr[min]>arr[j]) {
				min = j;
			};
		}
		var temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return arr;
}
var tt = selectSort(arr);
console.log(tt);
