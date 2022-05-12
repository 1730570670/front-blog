<template>
  <div class="BreadCrumb">
      <el-tag @click="routerHome">首页</el-tag>
      <el-tag class="tagBreakCrumb" closable v-for="item,index in breakCrumbData" :key="index"
        @close="removeBreakCrumb(index)" @click="routerLink(item)">
          {{item.label}}
      </el-tag>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'BreadHead',
    data() {
        return {
            
        }
    },
    methods: {
        //移除面包屑
        removeBreakCrumb(index){
            //触发Vuex中removeBreakCrumb事件 index:下标
            this.$store.commit('removeBreakCrumb',index)
        },
        //首页 跳转到首页路由
        routerHome(){
            this.$router.push({path:'/home/'})
        },
        //点击面包屑,跳转对应的路由
        routerLink(item){
            this.$router.push({path:item.path})
        }
    },
    //计算属性
    computed:{
        ...mapState({
            //面包屑
            breakCrumbData:'breakCrumbData'
        })
    }
}
</script>

<style lang="less" scoped>
.BreadCrumb{
    width: 100%;
    height: 100px;
    // flex弹性布局
    display: flex;
    align-items: center;
    padding: 0 50px;
    // 标签
    .tagBreakCrumb{
        width: 80px;
        margin-left: 10px;
        text-align: center;
    }
}
</style>