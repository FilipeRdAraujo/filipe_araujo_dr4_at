import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import css from './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  css,
  render: h => h(App)
}).$mount('#app')
