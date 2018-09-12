// 初始化模块Vue/App
import Vue from 'vue'
import App from './App.vue'

// Element-ui模块
import ElementUI from 'element-ui'
// 路由模块
import router from '@/router/router.js'

// 引入全局样式
import './styles/index.scss'
import './styles/icon.scss'
import './styles/element.scss'
import './styles/reset.scss'
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 将element-ui绑定到全局
Vue.use(ElementUI)
console.log(process)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')