import Vue from 'vue'
import { Tag } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import router from './router'
import App from './App.vue'


Vue.config.productionTip = false
Vue.use(Tag)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
