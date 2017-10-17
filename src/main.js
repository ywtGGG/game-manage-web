import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-default/index.css'
import App from '~/app.vue'

//引入路由组件
import recharge from '~/page/recharge/recharge.vue';

Vue.use(ElementUI)
Vue.use(VueRouter)


const routes = [
{ path: '/recharge', component: recharge }
];

//创建路由实例
const router = new VueRouter({
routes  
});


new Vue({
el: '#app',
router,
render: h => h(App)
})
