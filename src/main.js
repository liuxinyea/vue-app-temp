// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import MintUI from 'mint-ui'
// import {MessageBox} from 'mint-ui'
// import VueScroller from 'vue-scroller'

import 'mint-ui/lib/style.css'
Vue.use(MintUI);
// Vue.use(VueScroller);

axios.defaults.baseURL="";

// Vue.component(Header.name, Header);
// Vue.prototype.$message=MessageBox;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
