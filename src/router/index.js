import { createRouter, createWebHistory } from 'vue-router'//删去Hash,让网址不显示#
import BackendLayout from '@/components/BackendLayout.vue'

//路由配置
const backendRoutes = [
    {
        path: '/back',
        component: BackendLayout,//后台布局
        redirect: '/back/dashboard',//默认跳转到dashboard
        //子路由
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard.vue'),
                meta: {
                    title: '数据分析',
                    icon: 'DataAnalysis'
                }
            },

            {
                path: 'knowledge',
                component: () => import('@/views/knowledge.vue'),
                meta: {
                    title: '知识文章',
                    icon: 'Document'
                }

            },

            {
                path: 'consultations',
                component: () => import('@/views/consultations.vue'),
                meta: {
                    title: '咨询记录',
                    icon: 'Notebook'
                }

            },

            {
                path: 'emotional',
                component: () => import('@/views/emotional.vue'),
                meta: {
                    title: '情感日志',
                    icon: 'Collection'
                }

            },
        ]
    }
]
//创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes: backendRoutes
})

export default router//导出路由