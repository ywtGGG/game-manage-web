import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router';
import axios from "axios"
import 'element-ui/lib/theme-default/index.css'
import App from '~/app.vue'

//引入路由组件
import recharge from '~/page/recharge/recharge.vue';

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$axios = axios


//创建路由
const router = new VueRouter({
	mode:'history',
  	routes: [
    		{
     		path: '/recharge',
      		component: recharge
    		}
  	]
})

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://127.0.0.1:8080';

new Vue({
el: '#app',
router,
render: h => h(App)
})
