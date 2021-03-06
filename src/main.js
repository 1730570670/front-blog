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
//引入封装axios
import {Ajax} from '@/http/axios'
//注册全局插件
Vue.prototype.$Ajax=Ajax;

Vue.use(ElementUI);//ElementUI
//关闭控制台提示
Vue.config.productionTip = false

//引入封装格式化时间函数
import formatDate from './common/formatDate';
//注册全局函数
Vue.prototype.$formatDate=formatDate

import 'animate.css';//引入animate样式
//创建实例
new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
