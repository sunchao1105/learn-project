import Vue from 'vue'
import Router from 'vue-router'
import Longin from '@/components/Longin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Longin',
      component: Longin
    }
  ]
})
