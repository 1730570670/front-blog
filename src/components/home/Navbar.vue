<template>
   <!-- 导航栏 -->
    <div class="navBar">
      <!-- 搜索框 -->
      <div class="inputSearch">
        <i class="el-icon-s-comment"></i>
        <el-input placeholder="请输入标题查询内容"
          prefix-icon="el-icon-search" v-model="searchBlog" show-word-limit>
        </el-input>
      </div>
      <div class="navBarContainer">
        <!-- 导航栏选择项 -->
        <div class="navItem" v-for="item,index in navBar" :key="item.path"
         @click="RouterLink(item.path)" :style="index==index?'color':''">
          <i :class="item.icon"></i>
          <span>{{item.label}}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data() {
      return {
        // 导航栏数据
        navBar:[
          {
            label:'首页',
            path:'/home/',
            icon:'el-icon-s-home'
          },{
            label:'分类',
            path:'/home/classify',
            icon:'el-icon-menu'
          },{
            label:'关于',
            path:'/home/about',
            icon:'el-icon-news'
          },{
            label:'其他',
            path:'/home/other',
            icon:'el-icon-loading'
          }
        ],
        // 根据标题查询博客数据
        searchBlog:''
      }
    },
    methods: {
      //路由跳转
      RouterLink(path){
        //path  路由路径
        this.$router.push({path})
      }
    },
}
</script>

<style lang="less" scoped>
//导航栏容器
.navBar{
    width: 100%;
    height: 8%;
    // background: #d43c33;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    white-space: nowrap;
    // 搜索框
    .inputSearch{
      flex: 1;
      height: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
      //图标
      i{
        font-size: 25px;
        color: white;
      }
      .el-input{
        width: 260px;
        position: relative;
        left: 20px;
      }
    }
    // 导航栏大小
    .navBarContainer{
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        // font-size: 23px;
        color:white;
        justify-content: space-around;
    }
    .navBarContainer :hover{
      cursor: pointer;
    }
}
</style>