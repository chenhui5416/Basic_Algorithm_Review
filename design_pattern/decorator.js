/**
 * 提高代码复用，阚示例。
 * 提供了将行为动态添加到系统现有类的能力。
 * 可以用于修改现有的系统，希望在系统中对对象添加额外的功能，而不需要大量修改使用她们的底层代码。
 * 向基本对象本身添加属性和方法，而不是进行子类化。 就是不修改原型继承，而是修改实例化后的对象，对实例化后的对象进行装饰。
 */

function MacBook() {
	this.cost = function () {
		return 997;
	};
	this.screenSize = function () {
		return 11.6;
	};
}
//decorator 1
function Memory(macbook) { //这里涉及一个误区，虽然macbook 传递的是值，但是由于macbook是一个对象，他和原来对象指向同一个对象，所以改变他的属性也会影响原有对象属性，但这不是因为引用类型参数。js中都是值类型参数
	var v = macbook.cost();
	macbook.cost = function () {
		return v + 75;
	}
}
//decorator 2
function Engraving(macbook) {
	var v = macbook.cost();
	macbook.cost = function () {
		return v + 200;
	}
}
//第一台机器，加内存，价格为1072，但是两台屏幕大小事不变的
var mb1 = new MacBook();
console.log(mb1.cost());
Memory(mb1);
console.log(mb1.cost());
console.log(mb1.screenSize());
//第二台机器，进行装饰，价格为1197，但是两台屏幕大小事不变的
var mb2 = new MacBook();
console.log(mb2.cost());
Engraving(mb2);
console.log(mb2.cost());
console.log(mb2.screenSize());
