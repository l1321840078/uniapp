import Vue from 'vue'
import App from './App'
import loading from './utils/loading'
import toast from './utils/toast'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.config.productionTip = false
Vue.prototype.$loading = loading
Vue.prototype.$toast = toast

Vue.component('cu-custom', cuCustom)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
