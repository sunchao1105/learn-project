import Longin from '@/components/Longin'
import framePage from './framePage.vue'
import home from './home.vue'

const businRouter = [
  {
    path: '/login',
    name: 'Longin',
    component: Longin
  },
  {
    path: '/businPage/framePage',
    name: 'framePage',
    component: framePage,
    children: [
      {
        path: '/businPage/home',
        name: 'home',
        component: home
      }
    ]
  }
]

export default businRouter
