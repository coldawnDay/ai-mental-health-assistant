<!-- 顶部导航栏组件 -->
<template>
    <div class="navbar">
        <!-- 导航栏左侧 -->
        <div class="flex-box">
            <!-- 导航栏左侧图标 -->
            <el-button @click="handleCollapse">
                <el-icon><Expand /></el-icon>
            </el-button>
            <!-- 导航栏标题内容 -->
             <p class="page-title">导航栏</p>
        </div>
        <!-- 导航栏右侧 -->
        <div class="flex-box">
            <el-dropdown @command="handleCommand"><!--自定义-->
                <!-- 导航栏右侧用户信息 -->
                <div class ="flex-box">
                    <!-- 用户头像 -->
                    <el-avatar src="@/assets/images/用户.png" />
                    <p class="user-name">admin</p>
                    <el-icon><ArrowDown /></el-icon>
                </div>
                <!-- 导航栏右侧下拉菜单 -->
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup>

import {ref} from 'vue'// 引入ref函数,用于创建响应式数据
import {useAdminStore} from '@/stores/admin'// 引入admin模块的状态管理

const adminStore = useAdminStore()

// 点击下拉菜单
const handleCommand = (command) =>{
    console.log(command)
    if(command === 'logout'){
        // 退出登录
    }
}

const handleCollapse = () =>{
    useAdminStore().toggleCollapsed()// 切换状态
}

</script>
<style lang="scss" scoped>
/* 导航栏样式 */
.navbar {
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    border-bottom: 1px solid #e5e7eb;
    /* 导航栏标题 */
    .flex-box{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* 导航栏标题字体样式 */
    .page-title{
        margin-left: 20px;
        font-size: 26px;
        font-weight: bold;
        color: #1f2937;
    }
}
</style>
