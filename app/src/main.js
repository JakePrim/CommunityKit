import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VeeValidate, { Validator } from 'vee-validate'
import './local/index'
Vue.use(VeeValidate)
const validator = new Validator()
validator.localize('zh-CN')

Vue.config.productionTip = false

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3110'
    : 'http://your.domain.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
