import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import host from '@/pages/host'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'host',
      component: host
    }
  ]
})
