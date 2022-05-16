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
          <div class="blogList" v-for="blog in BlogList.records" :key="blog.blogId" @click="LinkBlogInfo(blog)">
              <!-- 博客头像 -->
              <div class="imageBlog">
                <img :src="blog.blogImgUrl" alt="图片加载失败或不存在" :title="blog.blogTitle">
              </div>
              <!-- 博客信息 -->
              <div class="blogInfo">
                <div class="title">
                  <div class="titleContainer">
                    <span>{{blog.blogCreateTime}}</span>
                    <el-tag>{{blog.blogType.blogTypename}}</el-tag>
                  </div>
                  <div class="titleText" v-html="blog.blogTitle">
                  </div>
                </div>
                <div class="content" v-html="blog.blogContent"></div>
              </div>
          </div>
          <!-- 分页组件 -->
          <div class="currentPage">
            <el-pagination
              background @current-change="pageSearch"
              layout="prev, pager, next" :current-page="BlogList.current"
              :total="BlogList.pages*10">
            </el-pagination>
          </div>
      </div>
    </transition>
    <transition appear enter-active-class="animate__animated animate__slideInDown">
      <!-- 右边容器(其他信息) -->
      <div class="rightContainer">
        <RightTemplate/>
      </div>
    </transition>
  </div>
</template>

<script>
import RightTemplate from '@/components/home/RightTemplate'//右边组件
export default {
  name:'IndexView',
  data() {
    return {
      // 头像地址
      circleUrl:'https://img2.baidu.com/it/u=242459013,2498743607&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500',
      // 个人信息
      UserInfo:{},
      // 博客信息 current查看的页数,records查询的数据,size本页数量,total总共数量,pages总页数
      BlogList:[],
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
    //请求到博客信息(分页查询)
    async requestBlogInfo(pageCurrent){
      var i = await this.$Ajax('post','/blog/'+pageCurrent,{})
      //请求发生错误,返回错误信息
      if(i.message){
        this.$message.error('请求出错啦:'+i.message)
        return ;
      }
      //将时间进行格式话(运用封装函数)
      this.$formatDate()
      i.data.data.records.forEach(el => {
        //遍历数据格式化时间
        el.blogCreateTime=this.$formatDate(el.blogCreateTime);
      });
      this.BlogList=i.data.data;//赋值给本地信息
    },
    // 分页组件触发分页事件
    pageSearch(currentPage){
      // 查询分页数据
      this.requestBlogInfo(currentPage)
      // 为了避免进入信息页面返回不是原先页数(无论后退多少页都会回到第一页),所以将信息存入会话中
      sessionStorage.setItem('currentPage',currentPage)
    },
    // 点击博客信息,跳转到博客信息详情路由
    LinkBlogInfo(blog){
      this.$router.push({path:'/home/blogInfo'})
      sessionStorage.setItem('blog',JSON.stringify(blog))
    },
  },
  // 组件
  components:{
    RightTemplate,
  },
  // 挂载生命周期钩子
  mounted() {
    //挂载时加载请求个人信息函数
    this.requestUserInfo();
    // 分页查询博客信息(默认查询第一页)
    if(sessionStorage.getItem('currentPage')){
      //如果session会话中存在信息则优先调用,return种植下面的操作
      this.requestBlogInfo(sessionStorage.getItem('currentPage'))
      return;
    }
    this.requestBlogInfo(1);   
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
    background: white ;
    height: 345px;
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
    // background: rgba(0, 0, 0, 0.3);
    // 博客信息列表容器
    .blogList{
      width: 100%;
      height: 260px;
      border: 1px solid;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      padding: 0 30px;
      justify-content: space-between;
      margin-top: 5px;
      // 博客头像
      .imageBlog{
        width: 200px;
        height: 200px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      // 博客内容
      .blogInfo{
        width: 460px;
        height: 200px;
        overflow: hidden;
        // 标题区域
        .title{
          width: 100%;
          height: 45%;
          border-bottom: 1px solid #909399;
          padding: 5px 5px;
          .titleContainer{
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            white-space: nowrap;
            .el-tag{
              width: 100px;
              text-align: center;
            }
          }     
          .titleText{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient: vertical;
          } 
        }
        // 内容
        .content{
          width: 100%;
          height: 55%;
          overflow: hidden;
        }
      }
    }
    // 分页组件
    .currentPage{
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  // 右边容器(其他信息)
  .rightContainer{
    width: 20%;
  }
}
</style>