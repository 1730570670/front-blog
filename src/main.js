import Vue from 'vue'
import App from './App.vue';//App实例
import router from './router';//路由
import store from './store';//Vuex

//外部特效插件
import VueParticles from "vue-particles";
//将外部特效插件注册全局使用
Vue.use(VueParticles)

import ElementUI from 'element-ui';//ElementUI组件
import 'element-ui/lib/theme-chalk/index.css';//ElementUI样式

//注册全局组件
Vue.use(ElementUI);
//关闭控制台提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
