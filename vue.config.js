const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})


module.exports= {
  outputDir:'dist',    // 打包后文件目录
  assetsDir:'assets',   //静态资源目录
  lintOnSave:false,   //是否开启eslint
  
  devServer:{
    open:true,  //是否自动弹出浏览器页面
    host:"localhost",
    https:false,  //是否使用https协议
    // proxyTable: {
    //       "/api": {                                               //若请求的前缀不是这个'/api'，那请求就不会走代理服务器         
    //         target:"https://www.baidu.com/",            
    //         changeOrigin: true,                           
    //         pathRewrite: {                            
    //            "^/api": ""          //将所有含/api路径的，去掉/api转发给服务器         
    //         }
    //       },
    // },

      
  }
}
