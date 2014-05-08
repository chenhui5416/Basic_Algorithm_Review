/**
 * 冒泡 交换排序排序
 * 最坏时间复杂度(n^2),最优时间复杂度为o(n)空间复杂度o(1),平均为o(n^2)
 */
var a = [4,2,5,7,1,3];
// var a = [1,2,3,4,5,6];
function bubblesort(arr){
	for(var i=0;i<arr.length;i++){
		var flag = false;          //用来标记是否冒泡过，若本次没有冒泡则说明有序，不用继续
		for(var j=i;j<arr.length;j++){
			if(arr[j]<arr[i]){
				var temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
				flag = true;
			}
		}
		if(flag==false){
			console.log(i)
			break;
		}
	}
	return arr;
}
var arr = bubblesort(a);
console.log(arr);