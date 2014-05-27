function sumStrings(a, b) {
	a = a.split('').reverse();
	b = b.split('').reverse();
	if (a.length == 0) return b.join('');
	if (b.length == 0) return a.join('');
	var ans = [];
	var length = (a.length < b.length) ? a.length : b.length;
	var tip = (a.length > b.length) 
	var temp = 0;
	for (var i = 0; i < length; i++) {
		var as = Number(a[i]);
		var bs = Number(b[i]);
		var ss = String(as + bs + temp);
		if (ss[1]) {
			temp = Number(ss[0]);
			ans.push(ss[1]);
		} else {
			temp = 0;
		  ans.push(ss[0]);
		}
	}
	if (tip) {
		for (var i = length; i < a.length; i++) {
		  var as = Number(a[i]);
		  var ss = String(as + temp);
		  if (ss[1]) {
      	temp = Number(ss[0]);
      	ans.push(ss[1]);
      } else {
      	temp = 0;
      	ans.push(ss[0]);
      }
		}
		if (temp != 0) {
			ans.push(temp);
		}
	} else {
		for (var i = length; i < b.length; i++) {
		  var bs = Number(b[i]);
		  var ss = String(bs + temp);
		  console.log(ss);
		  if (ss[1]) {
      	temp = Number(ss[0]);
      	ans.push(ss[1]);
      } else {
      	temp = 0;
      	ans.push(ss[0]);
      }
		}
		if (temp != 0) {
			ans.push(temp);
		}
	}
	ans = ans.reverse();
	while ( ans[0] == 0) {
		ans.shift();
	}
	return ans.join('');
}
var a = sumStrings('800', '9567');
console.log(String(a))

//其实都差不多，不过我代码写的太乱了！不好！不过暂时不想改了。。。后期有空改
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}
