import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import businRouter from '@/views/businPage/router-busin.js'

Vue.use(Router)

// 路径白名单路径
const whiteList = ['/login']
// 创建一个路由
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: businRouter
})

// 路由前进行逻辑或者特殊情况处理
router.beforeEach((to, from, next) => {
  let userToken = Cookies.get('userToken')
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else if (userToken) {
    // 登录后可能会涉及到特殊处理，暂时没处理
    next()
  } else {
    next('/login')
  }
})

export default router
