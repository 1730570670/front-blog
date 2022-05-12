<template>
  <div class="home">
    <!-- 导航栏 -->
    <Navbar/>
    <!-- 面包屑 -->
    <BreadCrumb/>
    <!-- 内容区域 -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/home/Navbar'//导航栏
import BreadCrumb from '@/components/home/BreadCrumb'//面包屑
export default {
  name: 'HomeView',
  components: {
    Navbar,//导航栏
    BreadCrumb//面包屑
  }
}
</script>
<style lang="less" scoped>
.home{
  height: 100%;
  width: 100%;
}
</style>
