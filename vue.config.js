const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',//设置打包之后的公共路径
  lintOnSave: false,//关闭语法检车
})
