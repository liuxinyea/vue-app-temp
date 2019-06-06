import Vue from 'vue'
import Router from 'vue-router'
import myPage from '@/page/my/myPage'
import identify from '@/page/identify'
import balance from '@/page/my/balance'
import credit from '@/page/my/creditGranting'
import price from '@/page/my/newPrice'
import feedback from '@/page/my/feedback'
import buyintention from '@/page/my/buyintention'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'identify',
      component: identify
    },
    {
      path: '/my',
      name: 'my',
      component: myPage
    },
    {
      path: '/my/balance',
      name: 'balance',
      component: balance
    },
    {
      path: '/my/creditGranting',
      name: 'credit',
      component: credit
    },
    {
      path: '/my/price',
      name: 'price',
      component: price
    },
    {
      path: '/my/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/my/buyintention',
      name: 'buyintention',
      component: buyintention
    },
  ]
})
