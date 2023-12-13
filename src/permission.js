import router from './router'

import { getAccessToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  if (getAccessToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } 
    next()
  } else {
    // 没有token
    if (to.path === '/login') {
      // 直接进入
      next()
    } else if(to.path === '/register') {
      next() //这里不能加register，为什么？
    }
    else{
      next('/login') 
    }
    // 否则全部重定向到登录页
  }
})

router.afterEach(() => {
  
})