import Vue from 'vue'
import Router from 'vue-router'
import Longin from '@/components/Longin'

Vue.use(Router)

// 路径白名单路径
const whiteList = ['/login']

// 创建一个路由
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'Longin',
      component: Longin
    }
  ]
})

// 路由前进行逻辑或者特殊情况处理
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    next('/login')
  }
})

export default router
