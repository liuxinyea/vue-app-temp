// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// // 按需引入部分组件
// import { Header,MessageBox,Loadmore,Tabbar, TabItem,Cell} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Loadmore.name, Loadmore);
// Vue.component(Header.name, Header);
// Vue.component(Cell.name, Cell);
// Vue.prototype.$message=MessageBox;

Vue.use(Mint);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
