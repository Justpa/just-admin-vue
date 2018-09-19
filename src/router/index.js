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
      path: '/dashboard',
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
      redirect:'/user',
      children: [
        {
          path: '/user',
          component: function (resolve) { require(['../views/example/user.vue'], resolve)},
          name: '用户',
          hidden:true
        },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '表格',
      redirect:'/echarts',
      icon:'el-icon-edit',
      children: [
        {
          path: '/echarts',
          component: function (resolve) { require(['../views/charts/echarts.vue'], resolve)},
          name: 'echarts',
          hidden:true
        }
      ]
    }

  ]
})
