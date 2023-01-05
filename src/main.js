import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // 加载 router 底下的 index.js 路由配置文件
//将store加入vue实例
import store from './store'
 // 导入Element Plus 
import ElementPlus from 'element-plus';

//全部引入 样式
import 'element-plus/dist/index.css'
//统一导入及注册全局el-icon组件 Element Plus 使用icom图标 1 引入
import * as ELIcons from '@element-plus/icons-vue'

// 时间中文;
import locale from 'element-plus/lib/locale/lang/zh-cn';//写了他就能变成中文




const app = createApp(App)
app.use(router)	
app.use(store)	
app.use(ElementPlus)	
app.use(locale)	

// 2 Element Plus 使用icom图标
for (let iconName in ELIcons) {
	app.component(iconName, ELIcons[iconName])
}	
app.mount('#app')

