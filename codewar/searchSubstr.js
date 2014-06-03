/**
 * 还可以使用正则表达式，可以使用API 如 indexof  ，使用indexof 效率和我后面代码应该差不多
 */

function searchSubstr( fullText, searchText, allowOverlap ){
	if(fullText.length < searchText || searchText.length == 0) return 0;
	if(fullText == searchText) return 1;
	if(allowOverlap == false) {
		var reg = new RegExp(searchText, 'g'), res = fullText.match(reg);
		console.log(res);
		return res.length;
	} else {
		var i = 0, j, num = 0;
		for(i; i < fullText.length; i++) {
			for(j = 0; j < searchText.length; j++) {
				if(fullText[i + j] != searchText[j]) {
					break;
				}
			}
			if(j == searchText.length) {
				num++;
			}
		}
		console.log(num)
		return num;
	}
}
searchSubstr('aa_bb_cc_dd_bb_e', 'bb')
searchSubstr('aaabbbcccc', 'bbb')
// searchSubstr('aaa', 'aa')

/**
 * 事实证明大神的正则
 */
function search_substr( fullText, searchText, allowOverlap ){
	// (?=pattern)匹配，该表达式 、 匹配 、 处于 、 匹配 pattern 的字符串 、 的起始点的  字符串。
	// 在大神写的中，匹配patter的 字符串 直接是 空
  var regex = new RegExp(allowOverlap ? '(?='+searchText+')' : searchText, 'g');
  return (searchText.length && fullText.match(regex) || []).length;
}

console.log(search_substr('aa_bb_cc_dd_bb_e', 'bb'));
console.log(search_substr('aaabbbcccc', 'bbb'))
console.log(search_substr('aaa', 'aa', true))

var reg = new RegExp('(?=aa)','g');
var aa = 'aaa'.match(reg)
console.log(aa)
