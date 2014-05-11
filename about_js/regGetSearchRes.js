/**
 * 使用正则表达式获得指定名称的search结果
 */
function regGetSearcRes(str,key) {
	var pattern = new RegExp("(^|\\?|&)" + key + "=([^&]*)(\\s|&|$)", "i"); 
	// (^|\\?|&)子表达式匹配开始位置 为？ 或者 & 
	// 然后匹配 key 
	// = 匹配等号
	// ([^&]*) 匹配除了& 外的任意位数的任意字符
	// (\\s|&|$) 以任意空白字符或者 & 为结尾
	var res = pattern.exec(str);
	// 子表达式第二个为 需要匹配到的key ，所以 exec输出结果的 第三个元素就是它
	// 第一个元素 res[0]为整个结果，然后是第一个表达式。。。
	return res[2];
}
/**
 * 匹配hash
 */
function regGethash(str) {
	var pattern = new RegExp("(#)([^\\s]*)(\\s|$)", "i"); 
	var res = pattern.exec(str);
	return res[2];
}
/**
 * 匹配path
 */
function regGetPath(str) {
	var pattern = new RegExp("([^\\/{2}|:])(\\/{1})([^\\s|\\?|#]*)(\\s|\\?|#|$)", "i"); 
	var res = pattern.exec(str);
	return res[3];
}
/**
 * 匹配host
 */
function regGetHost(str) {
	var pattern = new RegExp("(\\/{2})([^\\s|\\/|\\?|#]*)(\\/|\\s|\\?|#|$)", "i"); 
	var res = pattern.exec(str);
	return res[2];
}

var res1 = regGetSearcRes('http://weibo.com/u/1761093415/home?wvr=5dff&weibo=12', "wvr");
console.log(res1);
var res2 = regGethash('http://developer.baidu.com/console#bcs/2661269/bucket/list/');
console.log(res2)
var res3 = regGetPath('http://developer.baidu.com/console/test#bcs/2661269/bucket/list/');
console.log(res3)
var res4 = regGetHost('http://developer.baidu.com/console/test#bcs/2661269/bucket/list/');
console.log(res4)
