/**
 * 检验输入是否是ipv4地址，方法可以使用正则匹配，或者向我这样傻办法
 * 没有难度，主要是关注临界条件
 */

function isValidIP(str) {
  var arr = str.split('.');
  if(arr.length != 4 ) 	return false;
 	return ans = arr.every(function(item, index, arr){
    if(item[item.length-1] == ' ' || item[0] == ' ' || (item.length > 1 && item[0] ==0)) return false;
  	item = Number(item);
  	if(item >=0 && item <= 255)	return true;
  	return false;
  });
}
//这个方法更好，他思考的更多。。。。v==Number(v).toString() 这句是亮点，虽然看起来很简单。。却不易想到
function isValidIP(str) {
  return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
}

