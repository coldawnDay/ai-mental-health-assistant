import { createApp } from 'vue'
import './style.css'//引入默认样式
import App from './App.vue'
import ElementPlus from 'element-plus'//引入element-plus
import 'element-plus/dist/index.css'//引入element-plus的样式
import router from './router'//引入路由
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 全局注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(router).mount('#app')//挂载应用
 
