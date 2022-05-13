<template>
  <div class="indexContainer">
    <!-- 左边容器(个人信息) -->
    <div class="leftContainer">
      <!-- 头像 -->
      <el-avatar :size="80" :src="circleUrl" style="margin:10px 20px;"></el-avatar>
      <!-- 信息卡片 -->
      <el-card v-for="item,key,index in UserInfo" :key="index">
        <el-tag style="width:80px;text-align:center;">{{key}}</el-tag>
        <span style="margin-left:10px">{{item}}</span>
      </el-card>
    </div>
    <!-- 中间容器(博客信息) -->
    <transition appear enter-active-class="animate__animated  animate__fadeInLeft">
      <div class="centerContainer">

      </div>
    </transition>
    <!-- 右边容器(其他信息) -->
    <div class="rightContainer">
      <!-- 日历组件 -->
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
      //头像地址
      circleUrl:'https://img2.baidu.com/it/u=242459013,2498743607&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500',
      //个人信息
      UserInfo:{}
    }
  },
  methods: {
    //请求到个人信息(左边容器信息)
    async requestUserInfo(){
      var i =await this.$Ajax('get','/AdminInfo',{});
      //请求发生了错误,返回错误信息
      if(i.message){
        this.$message.error('请求发生了错误:'+i.message)
        return;
      }
      this.UserInfo=i.data.data//将值赋给Data数据
    },
  },
  // 组件
  components:{
    MyCalendar//日历组件
  },
  // 挂载生命周期钩子
  mounted() {
    //挂载时加载请求个人信息函数
    this.requestUserInfo()
  },
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
    height: auto;
    background: white ;
    .el-card{
      height: 60px;
      display: flex;
      align-items: center;
      white-space: nowrap;
      background: rgba(255, 255, 255, 0.2);
    }
  }
  // 中间容器(博客信息列表)
  .centerContainer{
    width: 50%;
    height: 300px;
    background: rgba(0, 0, 0, 0.3);
  }
  // 右边容器(其他信息)
  .rightContainer{
    width: 20%;
    height: auto;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>