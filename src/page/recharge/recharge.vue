<template>
  <div id="recharge" class="recharge" :style="recharge_bg">
  	<el-form :model="data" ref="data" label-width="80px">
  		<el-form-item  label="服务器">
    			<el-radio-group v-model="data.server" class="recharge-radio">
    				<el-radio-button label="1">回忆童年</el-radio-button>
    				<el-radio-button label="0" :disabled="true">其他</el-radio-button>
  			</el-radio-group>
  		</el-form-item>
  		<el-form-item  label="角色id" prop="characterId" 
  			:rules="[
      				{ required: true, message: '角色id不能为空'},
     				 { type: 'number', message: '角色id必须为数字值'}
    					]"	
  			>
    			<el-input type="characterId" v-model.number="data.characterId" class="input-width-small" auto-complete="off"></el-input>
  		</el-form-item>
  		<el-form-item  label="角色名字" prop="characterName">
    			<el-input type="characterName" v-model="data.characterName" class="input-width-small" auto-complete="off"></el-input>
  		</el-form-item>
  		<el-form-item  label="支付方式">
    			<el-radio class="radio" v-model="data.payType" label="1">支付宝</el-radio>
 			<el-radio disabled class="radio" v-model="data.payType" label="2">联系管理员</el-radio>
  		</el-form-item>
  		<el-form-item  label="充值金额">
  			<el-radio-group v-model="money1" @change="changeMoney">
  				<el-tooltip class="item" effect="dark" content="充100送10元" placement="top">
  					<el-radio-button label="100" class="toolTip">100元</el-radio-button>
    				</el-tooltip>
    				<el-tooltip class="item" effect="dark" content="充200送30元" placement="top">
  					<el-radio-button label="200" class="toolTip">200元</el-radio-button>
    				</el-tooltip>
    				<el-tooltip class="item" effect="dark" content="充300送50元" placement="top">
  					<el-radio-button label="300" class="toolTip">300元</el-radio-button>
    				</el-tooltip>
    				<el-tooltip class="item" effect="dark" content="充500送100元" placement="top">
  					<el-radio-button label="500" class="toolTip">500元</el-radio-button>
    				</el-tooltip>
    				<el-tooltip class="item" effect="dark" content="充800送200元" placement="top">
  					<el-radio-button label="800" class="toolTip">800元</el-radio-button>
    				</el-tooltip>
    				<el-tooltip class="item" effect="dark" content="充1000送300元" placement="top">
  					<el-radio-button label="1000" class="toolTip">1000元</el-radio-button>
    				</el-tooltip>
  			</el-radio-group>
  		</el-form-item>
  		<el-form-item  label="其他金额">
    			<el-input class="input-money" v-model.number="money2" @blur="changeMoney2" placeholder="请输入金额">
  			</el-input>	
  		</el-form-item>
  		<el-form-item  label="应付金额">
    			<span class="realMoney">{{data.money}}元</span>
  		</el-form-item>
  		
  		<el-form-item>
    			<el-button type="primary" @click="confirm">确认</el-button>
    			<el-button>取消</el-button>
  		</el-form-item>
  		
  		<el-dialog title="信息确认" :visible.sync="recharge_confirm" size="tiny" :before-close="handleClose">
		  	<div>
		  		服务器：<span>{{serverStr}}</span>
		  	</div>
		  	<div>
		  		角色id：<span>{{data.characterId}}</span>
		  	</div>
		  	<div>
		  		角色金额：<span>{{data.characterName}}</span>
		  	</div>
		  	<div>
		  		充值金额：<span>{{data.money}}元</span>
		  	</div>
		  	<div>
		  		支付方式：<span>{{payTypeStr}}</span>
		  	</div>
  			<span slot="footer" class="dialog-footer">
  				<el-button type="primary" @click="submit">确 定</el-button>
    				<el-button @click="recharge_confirm = false">取 消</el-button>
  			</span>
		</el-dialog>
	</el-form>
  	
  </div>
</template>



<script>
	import * as Constant from '~/components/common/constant'
	var utils = require('~/components/common/utils');
	var qs = require('qs');
	export default {
  data() {
    return {
    		data:{
			characterId: '',
    			characterName: '',
    			server:'1',
    			payType:'1',
    			money:100
		},
		money1:100,
      	money2:'',
      	recharge_bg: {
//          backgroundImage: Constant.recharge_bg_img,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            position:"absolute"
          },
          recharge_confirm:false,
          serverStr:'',
          payTypeStr:''
          
    }
   
  },
  
  methods:{
  		changeMoney(e){
  			this.data.money = e;
  			if(e != this.money2){
  				this.money2 = '';
  			}
  		},
  		changeMoney2(e){
  			if(utils.isPositiveInteger(e.target.value)){
  				this.money1 = e.target.value;
				this.data.money = e.target.value;
  			}else{
  				this.$alert('请输入数字', '错误提醒', {
         			 confirmButtonText: '确定',
        			});
  				this.money1='';
  				this.data.money ='';
  			}
  			
  		},
  		confirm(){
  			this.recharge_confirm = true;
  			if(this.data.server == 1){
  				this.serverStr = '回忆童年';
  			}
  			if(this.data.payType == 1){
  				this.payTypeStr = '支付宝';
  			}
  		},
  		submit() {
			var formData = qs.stringify(this.data);
        		console.log(formData);
        		console.log(utils.add(3,4));
        		utils.getData('post','/api/index/hello',formData);
			this.recharge_confirm=false;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style>
	/*导航条*/
	.navbar{ 
		display: none;
	}
	.recharge{
		text-align:left;
		left: 38%;
		top: 10%;
	}
	.el-form-item__label{
		text-align: right;
		vertical-align: middle;
		float: left;
		font-size: 16px;
		/*color: #00070f;*/
		color: #FAFAFA;
		line-height: 1;
		padding: 11px 12px 11px 0;
		box-sizing: border-box;
	}
	.input-width-small{
		width: 150px;
		height: 40px;
	}
	.input-money{
		width: 100px;
		height: 40px;
	}
	.recharge-radio{
		height: 40px;
	}
	.realMoney{
		line-height: 40px;
		color: red;
		font-size: 24px;
		font-family:"Helvetica";
	}
</style>
