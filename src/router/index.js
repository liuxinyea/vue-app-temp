import Vue from 'vue'
import Router from 'vue-router'
import host from '@/pages/host'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'host',
      component: host
    }
  ]
})
