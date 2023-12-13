import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout'

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
const routes = [
  {
    path: '/',
    component: Layout, // 修改为 Layout 组件
    children: [
      {
        path: '',
        component: () => import( '../views/HomeView.vue'),
        name: 'home'
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/rbac',
    component: Layout,
    children: [{
        path: 'user/list',
        component: () => import(/* webpackChunkName: "about" */ '../views/User/List.vue')
      },
      {
        path: 'user/add',
        component: () => import(/* webpackChunkName: "about" */ '../views/User/Reserve.vue')
      },
      {
        path: 'user/profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/User/Profile2.vue')
      },
      // {
      //   path: 'user/pwd',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/User/Pwd.vue')
      // },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
