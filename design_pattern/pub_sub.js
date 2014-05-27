/**
 * 订阅发布者模式 简单实现 参考javascript设计模式
 */
var pubsub = {};
(function (q) {
  var topics = {};
  var subUid = -1;
  q.publish = function (topic, args) {
  	if (!topics[topic]) {
  	  return false;
  	}
  	var subscribers = topics[topic], len = subscribers ? subscribers.length : 0;
  	while (len--) { //这样，所以触发顺序是根据订阅的时间倒序的。
  	  subscribers[len].func(topic, args);//调用订阅者函数，其实就是通知订阅者
  	}
  	return this;
  };
  q.subscribe = function (topic, func) {
  	if(!topics[topic]) {
  		topics[topic] = [];
  	}
  	var token = (++subUid).toString();//订阅者标记
  	topics[topic].push({
  		token: token,
  		func:func
  	});
  	return token;
  };
  q.unsubscribe = function (token) {
  	for (var m in topics) {
  		if (topics[m]) {
  			for (var i = 0, j = topics[m].length; i < j; i++){
  				if(topics[m][i].token === token) {
  					topics[m].splice(i, 1);
  					return token;
  				}
  			}
  		}
  	}
  	return this;
  };
}(pubsub));

/**
 * 使用示例
 */

var messageLogger1 = function (topics, data) {
	console.log('logging1: ' + topics + ':' + data);
};
var messageLogger2 = function (topics, data) {
	console.log('logging2: ' + topics + ':' + data);
};
var subscription1 = pubsub.subscribe('message', messageLogger1);
var subscription2 = pubsub.subscribe('message', messageLogger2);
pubsub.publish('message', '两个都触发');
pubsub.unsubscribe(subscription1);        // 取消订阅
pubsub.publish('message', '只有第二个');
