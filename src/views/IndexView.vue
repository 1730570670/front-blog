<template>
  <div class="indexContainer">
    <!-- 左边容器(个人信息) -->
    <div class="leftContainer">

    </div>
    <!-- 中间容器(博客信息) -->
    <div class="centerContainer">

    </div>
    <!-- 右边容器(其他信息) -->
    <div class="rightContainer">
      <MyCalendar></MyCalendar>
    </div>
  </div>
</template>

<script>
import MyCalendar from '@/components/home/MyCalendar';//日历组件
export default {
  name:'IndexView',
  data() {
    return {

    }
  },
  components:{
    MyCalendar//日历组件
  }
}
</script>

<style lang="less" scoped>
//容器样式,设置大小,宽高,定位
.indexContainer{
  width: 100%;
  height: 800px;
  /**
  * flex弹性布局
  */
  display: flex;
  justify-content: space-around;
  // 左边容器(个人信息)
  .leftContainer{
    width: 20%;
    height: 200px;
    background: blue ;
  }
  // 中间容器(博客信息列表)
  .centerContainer{
    width: 50%;
    height: 300px;
    background: blue;
  }
  // 右边容器(其他信息)
  .rightContainer{
    width: 20%;
    height: auto;
    background: rgba(0, 0, 0, 0.5);

  }
}
</style>