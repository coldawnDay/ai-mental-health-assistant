<!-- 左侧菜单区 -->
<template>
    <el-aside :width="isCollapse ? '64px' : '264px'"> <!-- 折叠时菜单区域宽度为64px,展开时宽度为264px -->
        <el-menu
            :collapse="isCollapse" :collapse-transition="false"
            default-active="2" class="menu-style"
            > <!-- 控制菜单是否折叠,折叠时不显示过渡动画 -->

            <div class="brand">
                 <el-image style="width: 50px; height: 50px; margin-right: 10px;" :src="iconUrl" alt="logo" />
                 <div v-show="!isCollapse" class="info-card"> <!-- 如果菜单未折叠,则显示logo和标题 -->
                    <h1 class="brand-title">心理健康AI助手</h1>
                    <p class="brand-subtitle">管理后台</p>
                 </div>
            </div>
            <!-- index遍历子路由childern -->
            <el-menu-item @click="selectmenu" v-for=" item in router.options.routes[0].children" :key="item.path" :index="item.path">
                <!-- 图标 -->
                <el-icon><component :is="item.meta.icon" /></el-icon>
                <span>{{item.meta.title}}</span>
            </el-menu-item>

      </el-menu>
    </el-aside>
</template>

<script setup>

import { computed } from 'vue'// 引入computed函数,用于创建响应式数据
import { useAdminStore } from '@/stores/admin'// 引入admin模块的状态管理
import { useRouter } from 'vue-router'// 引入路由实例

// 导入路由实例
const router = useRouter()
// 导入logo图片
const iconUrl = new URL('@/assets/images/那由多.png', import.meta.url).href
// 监听admin模块的状态变化
const isCollapse = computed(() => useAdminStore().isCollapsed)
// 点击菜单切换路由,切换界面
const selectmenu = (key) =>{
    console.log(key)
    const currentRoute = router.options.routes[0]// 获取当前路由
    console.log(`${currentRoute.path}/${key.index}`)// 拼接路由路径
    router.push(`${currentRoute.path}/${key.index}`)// 切换路由
}

</script>

<!-- 调节网页logo大小 -->
 <style lang="scss " scoped>
 .menu-style{
    height: 100%;
     .brand {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background-color: #fff;
        border-bottom: 1px solid #e5e7eb;
        // logo字体大小
        .info-card {
            .brand-title {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 5px;
                color: #1f2937;
            }
            .brand-subtitle {
                font-size: 14px;
                color: #6b7280;
            }
        }
    }
 }
</style>