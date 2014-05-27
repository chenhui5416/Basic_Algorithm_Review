/**
 * 素数判断
 */
function isPrime(num) {
  //TODO
  if (num<=2) {
  	return false;
  }
  var sqrtNum = Math.sqrt(num);
  for (var i = 2; i <= sqrtNum; i++) {
  	if (num % i ==0) {
  		return false;
  	}
  }
  return true;
}
