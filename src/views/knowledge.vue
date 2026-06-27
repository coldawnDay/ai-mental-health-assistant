<!-- 知识文章页面 -->
<template>
    <div>
        <PageHead title="知识文章">
            <template #buttons>
                <el-button type="primary">新增</el-button>
            </template>
        </PageHead>
        <!-- 表格搜索组件 -->
        <TableSearch :formItem="formItem" @search="handleSearch"/>
    </div>
</template>

<script setup>
//引入内容标题组件
import PageHead from '@/components/PageHead.vue'
//引入表格搜索组件
import TableSearch from '@/components/TableSearch.vue'
// 定义表格,搜索表单数据
const formItem = [
    {comp: 'input', prop: 'title', label: '文章标题', placeholder: '请输入文章标题'},
    //下拉框
    {comp: 'select', prop: 'categoryId', label: '分类', placeholder: '请选择分类', options: [{
        label: '心理健康基础',
        value: '1'
    },
    {
        label: '情绪管理',
        value: '2'
    }]}
]
// 搜索表单数据方法
const handleSearch = (formData) => {
    console.log(formData,'查询参数')
}
</script>
