/**
 * 原型模式，使用ES 5 中Object.create()实现
 */
var car = {
	name: 'Das Auto',
	drive: function() {
		console.log('drive the car');
	}
}

var marteng = Object.create(car);

marteng.drive();
console.log(Object.getPrototypeOf(marteng)); //输出{name: 'Das Auto' ...}

console.log(marteng.name);   //原型继承，输出Das Auto
console.log(car.name);              
car.name = 'focus';      //修改原型属性，动态影响
console.log(marteng.name); //输出 focus
marteng.name = 'Auto';     //自定义原型同名属性，覆盖
console.log(marteng.name); //输出auto
console.log(car.isPrototypeOf(marteng)); //判断car是否是marteng的原型,输出true 
// console.log(marteng instanceof car); //出错，报typeof 因为instanceof 不能使用对象作为输入
console.log('-----------------------')
/**
 * 传统实现方法，可扩展定义构造函数
 */
function Car() {

}
Car.prototype.name = 'Das Auto';
Car.prototype.drive = function() {
	console.log('drive the car');
}
var suteng = new Car();
suteng.drive();
console.log(suteng.name);
Car.prototype.name = 'focus';
console.log(suteng.name);
console.log(Object.getPrototypeOf(suteng));
console.log(suteng instanceof Car); //使用Object.create()的不能使用instanceof判断原型
console.log(Car.prototype.isPrototypeOf(suteng)); //输出true，注意Car.prototype，原型都是
