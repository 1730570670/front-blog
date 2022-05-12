<template>
  <div class="home">
    <!-- 导航栏 -->
    <Navbar/>
    <!-- 内容区域 -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/home/Navbar'
export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
<style lang="less" scoped>
.home{
  height: 100%;
  width: 100%;
}
</style>
