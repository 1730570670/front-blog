<template>
  <transition enter-active-class="animate__animated animate__bounceInDown">
    <div class="BlogInfoPage">
      <div class="PageHeader">
        <el-page-header @back="goBack" content="文章信息"></el-page-header>
      </div>
      <div class="blogContainer">
        <div class="LeftContainer">
          <!-- 标题区域 -->
          <div class="title">
            {{blogInfo.blogTitle}}
          </div>
          <!-- 内容 -->
          <div class="content">
            <!-- 文章内容 -->
            <div v-html="blogInfo.blogContent">
            </div>
            <!-- 分类标签,发布时间 -->
            <div style="float:right;margin-top:20px;">
              <el-tag type="danger" style="margin-right:20px;">{{blogInfo.blogType.blogTypename}}</el-tag>
              <el-tag>发布时间:{{blogInfo.blogCreateTime}}</el-tag>
            </div>
          </div>
        </div>
        <div class="RightTemplate">
          <RightTemplate/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import RightTemplate from '@/components/home/RightTemplate'//右边组件
export default {
    name:'BlogInfo',
    data() {
      return {
        // 博客信息
        blogInfo:{}
      }
    },
    methods: {
      // 回退路由(页头事件)
      goBack(){
        window.history.back(-1) 
      },
      // 请求博客信息(根据ID:信息由上个页面传,放置session中,防止数据刷新丢失)
      async requestBlogInfo(){
        var session=JSON.parse(sessionStorage.getItem('blog'));
        var i = await this.$Ajax('get','/blog/blogId/'+session.blogId,{})
        // 请求发生错误,返回错误信息
        if(i.message){
          this.$message.error('请求发生了错误:'+i.message)
          return ;
        }
        // 将时间格式化
        i.data.data.blogCreateTime=this.$formatDate(i.data.data.blogCreateTime)
        this.blogInfo=i.data.data //赋值
      }
    },
    components:{
      RightTemplate//右边组件
    },
    mounted() {
      // 发送查询博客信息请求
      this.requestBlogInfo()
    },
}
</script>

<style lang="less" scoped>
.BlogInfoPage{
  // 页头
  .PageHeader{
    margin-left: 36px;
    height: 60px;
    color: white;
  }
  // 主要信息容器
  .blogContainer{
    color: white;
    width: 100%;
    display: flex;
    height: auto;
    justify-content: space-around;
    // 左边容器
    .LeftContainer{
      width: 70%;
      background: rgba(0, 0, 0, 0.3);
      // 标题
      .title{
        font-size: 26px;
        padding: 10px 10px;
        width: 100%;
        border-bottom:1px solid;
        display: flex;
        justify-content: center;
      }
      // 内容
      .content{
        padding: 20px 20px;
      }
    }
    .RightTemplate{
      // 右边容器
      width: 20%;
    }
  } 
}
</style>