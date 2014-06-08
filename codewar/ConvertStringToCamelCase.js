// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
// Examples:
// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior") 
// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){
	var arr = [], upCase;
	arr = str.split(/-|_/);
	for(var i = 1, j = arr.length; i < j; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
	} //可以使用map。。。。
	return arr.join('');
}
var a = toCamelCase('The-Stealth-Warrior');
console.log(a);
