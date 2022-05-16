import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err);
}
const routes = [
    {
      // 重定向路由
      path:'/',
      redirect:'/home'
    },{
      // 电脑端路由
      path: '/home',
      component: HomeView,
      children:[
        {
          path:'/home/',
          name:'index',
          component:()=>import('@/views/IndexView.vue')
        },{
          path:'/home/classify',
          name:'classify',
          component:()=>import('@/views/ClassIfy.vue')
        },{
          path:'/home/about',
          name:'about',
          component:()=>import('@/views/About.vue')
        },{
          path:'/home/other',
          name:'other',
          component:()=>import('@/views/Other.vue')
        },{
          path:'/home/blogInfo',
          name:'blogInfo',
          component:()=>import('@/views/BlogInfo.vue')
        }
      ]
    },{
      // 手机端路由
      path:'/phome',
      name:'phome',
      component:()=>import('@/views/Phone/PhoneHome.vue'),
      children:[
        {
          path:'/phome/',
          name:'pindex',
          component:()=>import('@/views/Phone/PhoneIndexView.vue')
        },{
          path:'/phome/classify',
          name:'pclassify',
          component:()=>import('@/views/Phone/PhoneClassIfy.vue')
        },{
          path:'/phome/about',
          name:'pabout',
          component:()=>import('@/views/Phone/PhoneAbout.vue')
        },{
          path:'/phome/other',
          name:'pother',
          component:()=>import('@/views/Phone/PhoneOther.vue')
        },{
          path:'/phome/blogInfo',
          name:'pblogInfo',
          component:()=>import('@/views/Phone/PhoneBlogInfo.vue')
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
