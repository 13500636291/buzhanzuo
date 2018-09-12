import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/view/login'
import home from '@/view/home'
import overview from '@/view/overview/overview'
import manage from '@/view/manage/manage'
import account from '@/view/account/account'
import complaint from '@/view/complaint/complaint'
import permission from '@/view/permission/permission'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        // 登录 一级组件
        { path: '/login', name: 'login', component: login },
        // 首页 一级组件
        {
            path: '/',
            name: 'home',
            component: home,
            // 重定向至概况 二级组件
            redirect: 'overview',
            children: [
                // 概况 二级组件
                {
                    path: 'overview',
                    name: 'overview',
                    component: overview
                },
                // 学校管理 二级组件
                {
                    path: 'manage',
                    name: 'manage',
                    component: manage
                },
                // 学校账号 二级组件
                {
                    path: 'account',
                    name: 'account',
                    component: account
                },
                // 用户投诉 二级组件
                {
                    path: 'complaint',
                    name: 'complaint',
                    component: complaint
                },
                // 权限管理 二级组件
                {
                    path: 'permission',
                    name: 'permission',
                    component: permission
                },
            ]
        }
    ]
})