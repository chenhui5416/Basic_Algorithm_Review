/**
 * 函数柯理化,没完全做出来，查看博客chenhui5416.duapp.com
 */
function defaultArguments(func, params) {
  var arr = [], str = func.toString();
  if(func.type != 'return'){
  	console.log(func)
  	str = str.split(')')[0];
  	str = str.split('(')[1];
  	str = str.split(',')
  	var arr = {};
  	for(var i = 0; i < str.length; i++) {
  		arr[str[i]] = params[str[i]];
  	}
  	  for(var i = 0; i<str.length; i++){
  	returnFun[str[i]] = params[str[i]];
  }
  // console.log(returnFun)
  returnFun.type = 'return';
	} else {
  	var para1 = params[func.para1];
  	var para2 = params[func.para2];
	}  
  function returnFun() {
  	var args = Array.prototype.slice.call(arguments);
  	for(var i = 0; i < str.length; i++) {
  		if(args[i] == undefined) { args[i] = arr[str[i]]};
  	}
  	console.log(args)
  	return func.apply(null, args);
  }

  return returnFun;
}


function add(a,b) { return a + b; }
var add_ = defaultArguments(add,{b:9});
console.log(add_(10));
console.log(add_(10,5));
var add_1 = defaultArguments(add_, {a:3,b:2});
console.log(add_1(10));


function defaultArguments(func, params) {
  var arr = [], funStr = func.toString();
  if(func.type != 'return'){

  var reg = new RegExp('\\(([a-z])\\,(|\\s)([a-z])');
  res = reg.exec(funStr);
  // console.log(res);
  var para1 = res[1], para2 = res[3];
  para1 = params[para1];
  para2 = params[para2];
}
else{
	// console.log(params)
  var para1 = params[func.para1];
  var para2 = params[func.para2];
}
  function returnFun() {
  	var args = Array.prototype.slice.call(arguments);
  	if(args[0] == undefined) { args[0] = para1};
  	if(args[1] == undefined) { args[1] = para2};
  	console.log(para2)
  	return func.apply(null, args);
  }
  returnFun.para1 = res[1];
  returnFun.para2 = res[3];
  returnFun.type = 'return';
  return returnFun;
}