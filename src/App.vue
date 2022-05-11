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
    // z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
}
</style>