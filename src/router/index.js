import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: (resolve)=> {
        require(['../views/Login.vue'], resolve)
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
          component: function (resolve) {require(['../views/dashboard/index.vue'], resolve)},
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
          component: function (resolve) { require(['../views/examples/table.vue'], resolve)},
          name: '表格',
        },
        {
          path: '/examples/button',
          component: function (resolve) { require(['../views/examples/button.vue'], resolve)},
          name: '按钮',
        },
        {
          path: '/examples/form',
          component: function (resolve) { require(['../views/examples/form.vue'], resolve)},
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
          component: function (resolve) { require(['../views/charts/echarts.vue'], resolve)},
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
          component: function (resolve) { require(['../views/counter/index.vue'], resolve)},
          name: '计数器',
        }
      ]
    },
  ]
})
