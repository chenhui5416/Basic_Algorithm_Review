/**
 * 堆排序！就因为我不想把a[0]不使用导致写了很久。。。坑啊！
 * 建堆最差时间复杂度为o(n),当这个一般小点
 * 堆排序最差时间复杂度o(n^2)
 * @type {Array}
 */
var arr=[20,16,22,18,30,19]

function buildMaxHeap(len){
	for(var i=parseInt(len/2);i>=0;i--){
		adjustDown(i,len);
	}
}

function adjustDown(k,len){
	var temp = arr[k];
	for(i=2*k+1;i<=len;i*=2+1){//因为我是从数组 0 开始，所以这里堆的位置得做处理
		if(i<len && arr[i]<arr[i+1]){
			i++;
		}
		if(temp>=arr[i]){
			break;
		}else{
			arr[k]=arr[i];
			k=i;
		}
	}
	arr[k] = temp;
}

function headSort(){
	buildMaxHeap(arr.length);
	for(var i=arr.length-1;i>=1;i--){
		var temp = arr[0];
		arr[0]=arr[i];
		arr[i]=temp;
		if (i==1) {	
			adjustDown(0,1);
		}else{
		  adjustDown(0,i-1);
		}
	}
		var temp = arr[0];
		arr[0]=arr[1];
		arr[1]=temp;
}
headSort(arr.length);
console.log(arr);

