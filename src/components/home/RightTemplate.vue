<template>
  <div class="RightContainer">
    <!-- 日历组件 -->
    <MyCalendar></MyCalendar>
    <!-- 分类信息标签 -->
    <div class="classIfy" v-if="loading">
        <el-link>标签:</el-link><br>
        <el-tag v-for="classIfy in ClassIfyList" :key="classIfy.blogTypename">{{classIfy.blogTypename}}</el-tag>
    </div>
    <!-- 懒加载 -->
    <el-skeleton v-if="!loading" style="width: 100%" :loading="!loading" animated>
        <template slot="template">
        <div style="padding: 30px;">
            <el-skeleton-item variant="div" style="width: 20%;height:30px" />
            <el-skeleton-item variant="div" style="width: 100%;height:30px" />
            <el-skeleton-item variant="div" style="width: 100%;height:30px" />
            <el-skeleton-item variant="div" style="width: 100%;height:30px" />
            <el-skeleton-item variant="div" style="width: 100%;height:30px" />
            <el-skeleton-item variant="div" style="width: 100%;height:30px" />
        </div>
        </template>
    </el-skeleton>
  </div>
</template>

<script>
import MyCalendar from '@/components/home/MyCalendar';//日历组件
export default {
    name:'RightTemplate',
    data() {
        return {
            // 分类标签信息
            ClassIfyList:[],
            // 懒加载加载状态
            loading:false
        }
    },
    methods: {
        //查询分类标签
        async requestClassIfy(){
            // 异步请求(封装)
            var i = await this.$Ajax('get','/blog/type',{})
            // 发生错误,返回错误信息
            if(i.message){
                this.$message.error('请求发生了错误:'+i.message)
                return;
            }
            this.ClassIfyList=i.data.data;//将信息赋值给本地
            // 懒加载加载状态
            this.loading=true;
        }
    },
    components:{
        MyCalendar//日历组件
    },
    mounted() {
        // 分类标签
        this.requestClassIfy()
    },
}
</script>

<style lang="less" scoped>
.RightContainer{
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
}
// 分类
.classIfy{
    margin-top: 5px;
    border: 1px solid;
    width: 100%;
    padding: 15px 20px;
    .el-tag{
    width: 100px;
    text-align: center;
    margin: 10px 15px;
    }
}
</style>