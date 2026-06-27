import { createApp } from 'vue'
import './style.css'//引入默认样式
import App from './App.vue'
import ElementPlus from 'element-plus'//引入element-plus
import 'element-plus/dist/index.css'//引入element-plus的样式
import router from './router'//引入路由
import * as ElementPlusIconsVue from '@element-plus/icons-vue'//引入element-plus的图标组件
import { createPinia } from 'pinia'//引入pinia状态管理

const app = createApp(App)//创建应用实例
const pinia = createPinia()//创建pinia实例

// 全局注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(router).use(pinia).mount('#app')//挂载应用
 
