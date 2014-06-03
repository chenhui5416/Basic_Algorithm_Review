/**
 * 抽象工厂, 可以动态添加一些构造函数。
 * 抽象工厂的存在意义应该也是做一些初始化操作，或者做一些公用操作，然后根据操作返回确定的对象
 * 这些操作是统一流程，所以可以这样做。
 */
var AbstractVehicleFactory = (function () {
	var types = {};
	return {
		getVehicle: function (type, customizations) {
			var Vehicle = types[type];
			var vehicle =  new Vehicle(customizations);
			return vehicle;
		},
		registerVehicle: function (type, Vehicle) {
			types[type] = Vehicle;
			return AbstractVehicleFactory;
		}
	}
})();

function Car(options) {
	this.doors = options.doors || 4;
	this.state = options.state || 'brand new';
	this.color = options.color || 'sliver';
} // the creator of car

function Truck(options) {
	this.state = options.state || 'used';
	this.wheelSize = options.wheelSize || 'large';
	this.color = options.color || 'blue';
}// the creator of trunk

AbstractVehicleFactory.registerVehicle('car', Car);
AbstractVehicleFactory.registerVehicle('truck', Truck);

var car = AbstractVehicleFactory.getVehicle('car', {
	state: 'like new',
	color: 'lime green'
});

var truck = AbstractVehicleFactory.getVehicle('truck', {
	wheelSize: 'medium',
	color: 'neon yellow'
});

console.log(car instanceof Car); //true 因为在工厂中使用了Car构造函数返回
console.log(car);

console.log(truck instanceof Truck);  //true
console.log(truck);
