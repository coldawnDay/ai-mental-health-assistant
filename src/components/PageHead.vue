<!-- 内容顶部标题组件 -->
<template>
    <div class="page-head">
        <!-- 动态标题 -->
        <p class="page-title">{{ props.title }}</p>
        <!-- 多个按钮一行显示 -->
         <div class="action-btn">
            <!-- 按钮插槽 -->
            <slot name="buttons"></slot>
         </div>
    </div>
</template>

<script setup>
// 定义内容标题属性
const props = defineProps({
    title: {
        type: String,
        default: '内容标题'
    }
})
</script>

<!-- 内容顶部标题组件样式 -->
<style lang="scss" scoped>
.page-head{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .page-title{
        font-size: 24px;
        color: #2d3748;
    }
}
</style>