import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import host from '@/pages/host'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/host',
      name: 'host',

      component: host
    },
    {
      path: '/',
      name: 'login',
      redirect:"login",
      component:resolve => require(['../pages/login.vue'], resolve),
      children: [{
        name:"login_in",
        path: '/login_in',
        component: resolve => require(['../layout/login_layout.vue'], resolve)
      }, {
        path: '/register',
        component:resolve => require(['../layout/register_layout.vue'], resolve)
      }]
    }
  ]
})
