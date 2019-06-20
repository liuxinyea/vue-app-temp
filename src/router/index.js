import Vue from 'vue'
import Router from 'vue-router'
import myPage from '@/page/my/myPage'
import identify from '@/page/identify'
import balance from '@/page/my/balance'
import credit from '@/page/my/creditGranting'
import price from '@/page/my/newPrice'
import feedback from '@/page/my/feedback'
import buyIntention from '@/page/my/buyIntention'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/my/identify',
      name: 'identify',
      component: identify
    },
    {
      path: '/my/balance',
      name: 'balance',
      component: balance,
      meta : { requiresAuth : true },
    },
    {
      path: '/my/creditGranting',
      name: 'credit',
      component: credit,
      meta : { requiresAuth : true }
    },
    {
      path: '/my/price',
      name: 'price',
      component: price,
      meta : { requiresAuth : false }
    },
    {
      path: '/my/feedback',
      name: 'feedback',
      component: feedback,
      meta : { requiresAuth : true }
    },
    {
      path: '/my/price/buyIntention',
      name: 'buyIntention',
      component: buyIntention,
      meta : { requiresAuth : false }
    },
    {
      path: '/my/contract',
      name: 'contract',
      component: (resolve) => require(['@/page/contract/contractList'], resolve),
      meta : { requiresAuth : true }
    },
    {
      path: '/my/contract/contractDetails',
      name: 'contractDetails',
      component: (resolve) => require(['@/page/contract/contractDeatils.vue'], resolve),
      meta : { requiresAuth : true }
    },
    {
      path: '/',
      name: 'my',
      component: myPage
    },
    // 404页面
    {
      path: '*',
      component: myPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
