import home from './home.vue'
import Longin from '@/components/Longin'

const businRouter = [
  {
    path: '/login',
    name: 'Longin',
    component: Longin
  },
  {
    path: '/businPage/home',
    name: 'home',
    component: home
  }
]

export default businRouter
