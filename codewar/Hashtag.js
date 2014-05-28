/**
 * You start working for a fancy new startup hoping to revolutionize social networking! GASP! They had this great idea that users should be able to specify relevant keywords to their posts using an ingenious idea by prefixing those keywords with the pound sign (#). Your job is to extract those keywords so that they can be used later on for whatever purposes.
 * Input: String of words, where some words may contain a hashtag.
 * Output: Array of strings that were prefixed with the hashtag, but do not contain the hashtag.
 * 看到题目就想到直接用正则表达式匹配结果
 * 其实题意前还可以用其他方式进行去除特殊情况，这样正则表达式就可以写的简单一些，现在的正则表达式有点复杂
 * 返回arr 是题目要求的 
 */
function getHashtags(post) {
  var pattern = new RegExp("([a-z]*\\s|^)#+(([a-z]|[A-z])([^#|\\s]*))(\\s|$)", "i"); 
  var res = pattern.exec(post), arr = [];
  if(res && res.length>=2) {
    res = res[2];
    arr.push(res);
    return arr;
  } else {
    return arr;
  }
}
console.log(getHashtags('Hello #world'));
console.log(getHashtags('#blue#red#yellow#green'));

