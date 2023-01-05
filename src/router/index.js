import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'    // 导入 router 目录下的 router.js


// 路由 createRouter 对象
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

//导出路由对象
export default router;

/*
    vue3 安装 vue-router:    npm install vue-router@4
    createRouter并不是Vue框架默认集成的，而是以外部依赖的形式存在，所以使用之前需要先引入。
    

*/