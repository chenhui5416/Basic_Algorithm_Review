/**
 * 题目：实现 文字加减 four(times(two())) 输出 8
 * 回去前做一道代码战争题目
 * 我的方法不够好。
 * 很简单，就是看你细节上的使用？没有使用到传入函数，这个性质，在别人实现中有使用传入函数参数
 * 其实复杂度相似，代码函数也差不多。可是我就没有直接想到那个，而想到的是这种。
 */
function handler(val, args) {
	if(!args) {
		return val;
	} else {
		switch(args[0]){
			case 1: {
				return val + args[1];
			}
			case 2: {
				return val * args[1];
			}
			case 3: {
				return val / args[1];
			}
			case 4: {
				return val - args[1];
			}
		}
	}
}
function zero() {
	var args = arguments[0];
	return handler(0, args)
}
function one() {
	var args = arguments[0];
	return handler(1, args)
}
function two() {
	console.log(2);
	var args = arguments[0];
	return handler(2, args)
}
function three() {
	var args = arguments[0];
	return handler(3, args)
}
function four() {
	console.log(4);
	var args = arguments[0];
	return handler(4, args)
}
function five() {
	var args = arguments[0];
	return handler(5, args)
}
function six() {
	var args = arguments[0];
	return handler(6, args)
}
function seven() {
	var args = arguments[0];
	return handler(7, args)
}
function eight() {
	var args = arguments[0];
	return handler(8, args)
}
function nine() {
	var args = arguments[0];
	return handler(9, args)
}

function plus() {
	var num = arguments[0];
	return [1, num];
}
function minus() {
	var num = arguments[0];
	return [4, num];
}
function times() {
	console.log('time')
	var num = arguments[0];
	return [2, num];
}
function dividedBy() {
	var num = arguments[0];
	return [3, num];
}

console.log(four(times(two())))
