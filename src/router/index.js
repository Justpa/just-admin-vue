import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: resolve => {
        require(['@/views/Login.vue'], resolve)
      },
      hidden:true
    },
    {
      path: '/',
      component: Home,
      icon:'el-icon-edit',
      children:[
        {
          path: '/dashboard',
          component: resolve=> {require(['@/views/dashboard/index'], resolve)},
          name: '首页',
        },
      ]
    },
    {
      path: '/',
      component: Home,
      icon:'el-icon-edit',
      name: '组件库',
      children: [
        {
          path: '/examples/table',
          component: resolve=> { require(['@/views/examples/table'], resolve)},
          name: '表格',
        },
        {
          path: '/examples/button',
          component: resolve=> { require(['@/views/examples/button'], resolve)},
          name: '按钮',
        },
        {
          path: '/examples/form',
          component: resolve=> { require(['@/views/examples/form'], resolve)},
          name: '表单',
        },
      ]
    },

    {
      path: '/',
      component: Home,
      icon:'el-icon-edit',
      children: [
        {
          path: '/echarts',
          component: resolve=> { require(['@/views/charts/echarts'], resolve)},
          name: '图表',
        },
      ]
    },
    {
      path: '/',
      component: Home,
      icon:'el-icon-edit',
      name: '其他',
      children: [
        {
          path: '/counter',
          component: resolve=> { require(['@/views/counter/index'], resolve)},
          name: '计数器',
        }
      ]
    },
  ]
})
