<template>
    <el-form ref="ruleFormRef" :model="formDate">
        <!-- 三格布局,gutter是什么?gutter是行之间的间距 -->
        <el-row gutter="20">
             <!-- 遍历formItemAttrs数组,动态渲染组件 -->
            <template v-for="item in formItemAttrs" :key="item.prop">
                <!-- 读取col属性,动态绑定到el-col组件,效果是根据xs,sm,md,lg,xl的值,动态调整列数 -->
                <el-col v-bind="item.col">
                    <el-form-item :label="item.label" :prop="item.prop">
                    <!-- 动态渲染组件,v-model让页面显示响应式数据formDate[item.prop]的值 -->
                        <component v-model="formDate[item.prop]" :is="isComp(item.comp)" :placeholder="item.placeholder">
                            <!-- 下拉选择框 -->
                            <template v-if="item.comp === 'select'">
                                <el-option label="全部" value=""/>
                                <el-option v-for="opt in item.options" :key="opt.value" :label="opt.label" :value="opt.value"/>
                            </template>
                        </component>
                    </el-form-item>
                </el-col>
            </template>
        </el-row>
        <!-- 一格布局 -->
        <el-row>
             <!-- 查询和重置按钮 -->
            <el-button type="primary" @click="handleSearch">查询</el-button>
            <el-button @click="handleReset(ruleFormRef)">重置</el-button>
        </el-row>
    </el-form>
</template>

<script setup>
// 定义响应式数据
import { ref, reactive, computed } from 'vue'
// 定义表格,搜索表单数据
const props = defineProps({
    formItem: {
        type: Array,// 表单数据数组
        default: () => []
    }
})
// 定义查询事件
const emit = defineEmits(['search'])
// 定义计算属性,用于处理formItemAttrs数组,添加col属性
const formItemAttrs = computed(() => {
    const {formItem} = props // 解构props,获取formItem数组
    // 遍历formItem数组,添加col属性
    formItem.forEach(item => {
        item.col = {xs: 24, sm: 12, md: 8, lg: 6, xl: 6 }
    })
    return formItem// 返回处理后的formItem数组,不加return会导致formItemAttrs数组为空,导致组件渲染失败
   })
// 定义表单实例
const ruleFormRef = ref()
// 存储表单数据
const formDate = reactive({})
// 定义判断组件类型函数
const isComp = (comp) => {
    return {
        input: 'el-input',
        select: 'el-select'
    }[comp]
}
// 定义查询函数
const handleSearch = () => {
    console.log(formDate)
    // 触发查询事件,子组件传递表单数据给父组件
    emit('search', formDate)
}
// 定义重置函数
const handleReset = (formEl) => {
    // !formEl表示如果formEl为空,则返回,不执行后面的操作
    if(!formEl) return
    // 重置表单数据并触发查询事件,子组件传递表单数据给父组件
    formEl.resetFields()
    emit('search', formDate)
}
</script>