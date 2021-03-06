import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PicsUp from '@/components/PicsUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'PicsUp',
      component: PicsUp
    }
  ]
})
