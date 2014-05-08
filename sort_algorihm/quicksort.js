/**
 * 快速排序算法
 * 理想情况下，时间复杂度为o(nlogn),最差为o(n^2)
 * 空间复杂度，最好为log(n+1),最坏o(n)
 */
var arr = [4,2,5,7,1,3];

function qiucksort(low,high){
	var pp;
	if(low<high){
		pp = partion(low,high);
		qiucksort(low,pp-1);
		qiucksort(pp+1,high);
	}
}
function partion(low,high){
	var temp = arr[low];
	while(low<high){
		while(low<high && arr[high]>temp){
			--high;
		} 
		arr[low] = arr[high];
		while(low<high && arr[low]<=temp){
			++low;
		}
		arr[high] = arr[low]
	}
	arr[low] = temp;
	return low;
}
qiucksort(0,5);
console.log(arr);