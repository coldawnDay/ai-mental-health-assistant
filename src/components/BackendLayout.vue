//后台布局
<template>
    <div class="backend-layout">
        <el-container class="container">
            <Sidebar />
        <el-container>
            <el-header>
                <Navbar />
            </el-header>
            <el-main>
                <!-- 路由出口 -->
                <router-view></router-view>
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
.backend-layout{
    height: 100vh;
    .container{
        height: 100%;
    }
}
</style>
