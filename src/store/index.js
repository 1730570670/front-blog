import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //根据文章标题搜索数据
    searchTitle:'',
    // 面包屑
    breakCrumbData:[]
  },
  getters: {
  },
  mutations: {
    // 添加面包屑
    breakCrumb(state,router){
      //判断数组里面是否还有此路由
      var Status=true;
      state.breakCrumbData.forEach((item)=>{
          if(item.label==router.label){
            Status=false;//有路由,将状态改变
          }
      })
      //添加状态为true且路由不是首页的路由则添加
      if(Status && router.path!='/home/'){
        state.breakCrumbData.push(router)
      }
      
    },
    //移除面包屑
    removeBreakCrumb(state,index){
      state.breakCrumbData.splice(index,1)//将数组对应下标进行删除(点哪里删哪里)
    }
  },
  actions: {
  },
  modules: {
  }
})
