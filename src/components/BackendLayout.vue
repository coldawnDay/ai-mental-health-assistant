<!-- 后台布局 -->
<template>
    <div class="backend-layout">
        <!-- 菜单区域 -->
        <el-container class="main-container">
            <Sidebar />
        <el-container>
            <!-- 导航栏区域 -->
            <el-header>
                <Navbar />
            </el-header>
            <!-- 内容区域 -->
            <el-main class="main-content">
                <router-view class="content-container"></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'//菜单区
import Navbar from './Navbar.vue'//导航区
</script>

<style lang="scss" scoped>
// 后台区域大小
.backend-layout{
    height: 100vh;
    // 导航栏高度为74px
    .el-header{
        height: 74px !important;
    }
    // 菜单区域大小
    .main-container{
        height: 100%;
        // 内容区域大小
       .content-container{
        padding: 20px;
        background-color: #fff;
        min-height: calc(100% - 74px);
       }
    }
}
</style>