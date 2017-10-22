
//	require 引用如下：
//	var Constant = require('~/components/common/constant');
//	然后就可以Constant.xxx出变量了

//const Constant ={
//	body_bg_img:"url(" + require("~/assets/1.png") + ")",
//	recharge_bg_img:"url(" + require("~/assets/1.png") + ")"
//}
//module.exports = Constant;



//	import * as Constant from xxx 引用如下：
//	Constant.xxx调用变量了

export const body_bg_img = "url(" + require("~/assets/1.png") + ")";
export const recharge_bg_img = "url(" + require("~/assets/1.png") + ")";


