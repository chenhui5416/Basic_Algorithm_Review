/**
 * 中介者模式 ， 基本思想就是将所有通信交予一个中介者进行处理。
 * 其他组件 对其进行订阅 
 * 好处，解耦，各组件可以干自己的事情，将多对多的关系 变为一对多，通信统一。缺点，中介者坏了就坏了
 * 简单示例，参考javascript 设计模式
 */

var mediator = (function () {
	var topics = {};
	var subscribe = function (topic, fn) {
		if (!topics[topic]) {
			topics[topic] = [];
		}
		topics[topic].push({
			context: this,
			callback: fn
		});
		return this;
	};
	var publish = function (topic) {
    var args;
    if(!topics[topic]) {
    	return false;
    }
    args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0, l = topics[topic].length; i < 1; i++) {
    	var subscription = topics[topic][i];
    	// console.log(args);
    	subscription.callback.apply(subscription.context, args);
    }
    return this;
	};

	return {
		Publish: publish,
		Subscribe: subscribe,
		installTo: function (obj) {
			obj.subscribe = subscribe;
			obj.publish = publish;
			return this; //为了后面使用
		}
	};
})();

/**
 * 使用示例,这个是我探索过程留下的。不好的使用示例，没有使用installTo
 */
function Component(name) {
  this.name = name;
}
Component.prototype.send = function(mes) {
	mediator.Publish(mes, Array.prototype.slice.call(arguments,1));
}
Component.prototype.on = function(mes, callBack) {
	mediator.Subscribe(mes, callBack);
}

function callBack() {
	console.log('消息:' + Array.prototype.slice.call(arguments));
}
var com1 = new Component('com1');
var com2 = new Component('com2');
var com3 = new Component('com3');
com1.on('com2', callBack);
com2.on('com3', callBack);
com2.send('com2', '来自com2');
com3.send('com3', '来自com3');

/**
 * 较好的使用示例,使用installlTO
 */
function nComponent(name) {
	this.name = name;
}
var com1 = new nComponent('NCom1');
var com2 = new nComponent('NCom2');
var com3 = new nComponent('NCom3');
function nCallBack() {
	console.log(this.name + ':' + Array.prototype.slice.call(arguments));
}
mediator.installTo(com1).installTo(com2).installTo(com3);
com1.subscribe('ncom2', nCallBack);
com2.subscribe('ncom3', nCallBack);
com2.publish('ncom2', '来自ncom2');
com3.publish('ncom3', '来自ncom3');
