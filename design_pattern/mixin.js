/**
 * oo中，mixin是可以被一个子类或者一组子类继承 功能 的类，目的是函数复用。
 * Mixin 有助于减少系统中重复功能及增加函数的复用当一个应用程序可能需要在各种对象实例中共享行为时，我们可以通过在mixin中维持这种共享功能并专注于仅实现系统中真正不同的功能，来轻松避免复用。
 * 缺点：(将功能注入对象原型中 会导致原型污染和函数起源的不确定性，在大系统中可能有问题。)
 * 选择性继承 ‘父类’ 的方法
 */

var Car = function (setting) {
	this.model = setting.model || 'no model provided';
	this.color = setting.color || 'no color provided';
};

var Mixin = function () {};
Mixin.prototype = {
	driveForward: function () {
		console.log('drive forward');
	},
	driveBackWard: function() {
		console.log('drive backward');
	},
	driveSideways: function() {
		console.log('drive sideways');
	}
};

function argument (rClass, gClass) {
	if (arguments[2]) {
		for (var i = 2, len = arguments.length; i < len; i++){
			rClass.prototype[arguments[i]] = gClass.prototype[arguments[i]];
		}
	} else {
		for(var methodName in gClass.prototype) {
			if (!Object.hasOwnProperty(rClass.prototype, methodName)) {
				rClass.prototype[methodName] = gClass.prototype[methodName];
			}
		}
	}
} 

argument(Car, Mixin, 'driveForward');
var myCar = new Car({
	model: 'tt',
	color: 'red'
});
myCar.driveForward();

argument(Car, Mixin);
var nextCar = new Car({
	model: 'ww',
	color: 'yellow'
});
nextCar.driveSideways();
