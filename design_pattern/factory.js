/**
 * 工厂模式
 * tip: 除非为创建对象提供一个借口是我们正在编写的库或者框架的设计目标，否则建议坚持使用显示的构造函数，以避免不必要的开销。
 * 工厂模式中可以用于简化或者说统一创建某一批类别对象前需要实现处理的工作，比如需要查询数据库然后根据返回创建对象，这个时候用工厂模式可能比较合适？
 */
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

function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options) {
	if(options.vehicleType === 'car') {
		this.vehicleClass = Car;
	} else {
		this.vehicleClass = Truck;
	}
	return new this.vehicleClass(options);
};

var vehicleFactory = new VehicleFactory();

var car = vehicleFactory.createVehicle({
	vehicleType: 'car',
	color: 'yellow',
	doors: 6
});

console.log(car instanceof Car); //true 因为在工厂中使用了Car构造函数返回
console.log(car);

var trunk = vehicleFactory.createVehicle({
	vehicleType: 'truck',
	color: 'red',
	wheelSize: 'small'
})

console.log(trunk instanceof Trunk);  //true

console.log(trunk);
