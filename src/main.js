import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Recharge from '~/vue/recharge.vue'

Vue.use(ElementUI)


new Vue({
  el: '#recharge',
  render: h => h(Recharge)
})
