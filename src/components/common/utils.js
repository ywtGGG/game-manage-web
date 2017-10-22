'use strict';

var axios = require('axios');

//正则表达式
var positive_integer = /^\+?[1-9][0-9]*$/;　　//正整数

/**
 * 通过axios请求后台获取数据
 * @param {Object} method：请求的方法类型
 * @param {Object} _url：请求的地址
 * @param {Object} parms：请求的参数
 */
function getData(method,_url,parms,){
	axios({
		method: method,
		url: _url,
		data: parms
		
	})
    .then(function (response) {
   		console.log(response);
   		})
	.catch(function (error) {
    		console.log(error);
   	});
}
function add(x,y){
	return x+y;
}

function isPositiveInteger(str){
	return positive_integer.test(str);
}

module.exports = {
	getData:getData,
	add:add,
	isPositiveInteger:isPositiveInteger
};
