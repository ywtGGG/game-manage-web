import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from '~/vue/App.vue'
import MyApp from '~/vue/MyApp.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#myApp',
  render: h => h(MyApp)
})
