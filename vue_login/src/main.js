import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('icon', Icon)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
