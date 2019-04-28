// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import Viser from 'viser-vue'
import axios from './utils/axios'
Vue.prototype.axios = axios;
Vue.use(Antd);

Vue.config.productionTip = false
/* eslint-disable no-new */
/* 新建一个vue实例,包含要插入的elementId，router路由，component组件和template模板 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
