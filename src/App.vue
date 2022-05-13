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
import Particles from '@/components/backgroundTemplate/Particle.vue'//背景粒子组件
export default {
  name:'App',
  components:{
    Particles
  },
  // 挂载是手机端电脑端
  methods: {
    _isMobile() {
      // 适配方案
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      //将session会话存自身储存中,防止刷新将路由跳转会来
      if(sessionStorage.getItem("isMobile")){
        return;
      }
      sessionStorage.setItem("isMobile",true)
      //判断是PC端手机端,跳转对应的路由
      if (!flag) {
        this.$router.push({path:'/home'});
      } else {
        this.$router.push({path:'/phome'});
      }
    },
    //获取屏幕位置
    outTest(){
      //点击事件(window)
      window.addEventListener('click',(e)=>{
        var textArr=['❤富强❤','❤民主❤','❤文明❤','❤和谐❤','❤自由❤','❤平等❤','❤公正❤','❤法治❤',
                     '❤爱国❤','❤敬业❤','❤诚信','❤友善❤','❤Java❤','❤Vue❤','❤小胡❤'];//出现的文字(随机:用法Math.random)
        var textColor=['#FF0088','#FF8800','#99FFFF','#409EFF','#67C23A','#E6A23C','#909399','#F56C6C']//文字颜色,随机             
        let love = document.createElement("div");//创建div容器
        love.setAttribute("class","heart")//设置类名
        love.setAttribute("style",`color:${textColor[Math.floor((Math.random()*textColor.length))]};
        cursor:default;position: fixed;left:${e.clientX-30}px;top:${e.clientY-10}px;`)//设置样式(点击屏幕出现)
        love.innerHTML=textArr[Math.floor((Math.random()*textArr.length))];//设置内容
        var i =document.getElementById('app');//获取父亲节点
        i.appendChild(love)//创建节点
        setTimeout(()=>{//节点在2秒后移除
          love.remove();
        },1500)
      })
    }
  },
  mounted() {
    // 加载适配方案
      this._isMobile();
      //挂载时加载点击事件(window)
      this.outTest();
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
  }
  // 点击屏幕出现爱心以及文字样式(创建出的节点)
  .heart{
    animation: heart 1.5s;
  }
  @keyframes heart {
    0%{}
    100%{
      transform: translateY(-35px);
      opacity: 0;
    }
  }
}
</style>