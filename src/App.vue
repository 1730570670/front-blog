<template>
  <div id="app">
    <!-- 特效背景插件 -->
    <div class="AppbgTemplate">
      <Particles/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Particles from '@/components/backgroundTemplate/Particle.vue'
export default {
  name:'App',
  components:{
    Particles
  },
  // 挂载是手机端电脑端
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  mounted() {
      sessionStorage.setItem("isMobile",true)
      //讲session会话存自身储存中,防止刷新将路由跳转会来
      if(sessionStorage.getItem("isMobile")){
        return;
      }   
      //判断是PC端手机端,跳转对应的路由
      if (!this._isMobile()) {
        this.$router.push({path:'/home'});
      } else {
        this.$router.push({path:'/phome'});
      }
   }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 设置全局大小 */
#app{
  width: 100%;
  height: 100vh;
  // 插件特效容器样式,将背景屏幕填满
  .AppbgTemplate{
    background-image: url('https://img0.baidu.com/it/u=3415031676,1265821426&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800');
    background-repeat: no-repeat;
    background-position: "center center";
    background-size:cover;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
}
</style>