/**
 * 命令模式，旨在将方法调用、请求或者操作封装到单一对象中，从而根据我们不同的请求对客户进行参数化和传递可供执行的方法调用
 * （ps：上面是js设计模式书写的，太绕了。）
 * 其实就是给了一个统一的函数，然后所有的命令从这个函数走。这样外部调用就很单一。
 * 修改时，只要修改命令就好。。好处
 * command 可以存储状态加一个state ，这样就可以
 */

(function () {
	var CarManager = {
		state:[],//可以用于存储状态，可以设置大小，多少个undo不记录等
		requestInfo: function (model, id) {
			// console.log(this);
			this.state.push('requestInfo');
			console.log('The info is ' + model + id);
		},
		buyVehicle: function (model, id) {
			this.state.push('buyVehicle');
			console.log('Buy the car ' + model + id);
		},
		undo: function(model, id) {
			this.state.pop();
			console.log(this.state);
		},
		execute: function(commandName, model, id) {
			return CarManager[commandName] && CarManager[commandName].apply(CarManager, Array.prototype.slice.call(arguments, 1));
		}
	}
	CarManager.execute('requestInfo', 'Das Auto', '5253');
	CarManager.execute('buyVehicle', 'Das Auto', '5253');
	CarManager.execute('undo', 'Das Auto', '5253');
})();
