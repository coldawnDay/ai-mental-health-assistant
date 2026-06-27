// 定义admin模块的状态管理
import { defineStore } from 'pinia'//引入pinia状态管理
import { ref } from 'vue'//引入vue的ref函数

// 定义admin模块的状态管理
export const useAdminStore = defineStore('admin',() => {
    const isCollapsed = ref(false)//默认顶部导航栏左侧按钮功能为展开状态
    
    // 定义切换状态的方法
    const toggleCollapsed = () => {
        isCollapsed.value = !isCollapsed.value//切换状态
    }

    // 返回状态和方法
    return {
        isCollapsed,
        toggleCollapsed
    }
})