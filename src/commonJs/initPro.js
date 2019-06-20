import {axios,post,postJson,get,postProgress,postJsonProgress,getProgress} from './ajax';
import {MessageBox,Header,Popup,Picker,Button,Toast,Indicator,Field} from 'mint-ui'
import bus from './bus'
import store from '../store/myStore'
import Qs from 'qs'
import {doAdapter,rem} from './adapterScreen'
export default function  (Vue,router) {
     Vue.prototype.$baseUrl=process.env.BASE_API;
     Vue.prototype.$axios=axios;
     Vue.prototype.$post=post;
     Vue.prototype.$postJson=postJson;
     Vue.prototype.$get=get;
     Vue.prototype.$postProgress=postProgress;
     Vue.prototype.$postJsonProgress=postJsonProgress;
     Vue.prototype.$getProgress=getProgress;
     Vue.prototype.$bus=bus;
     Vue.prototype.$store=store;
     doAdapter(750,1360);
     Vue.prototype.$rem=rem;

     Vue.prototype.$message=MessageBox;
     Vue.prototype.$toast=Toast;
     Vue.prototype.$indicator=Indicator;
     Vue.prototype.$query=function () {
       return Qs.parse(window.location.href.split("?")[1]);
     };

     Vue.component(Field .name, Field );
     Vue.component(Picker.name, Picker);
     Vue.component(Popup.name, Popup);
     Vue.component(Button.name, Button);
     Vue.component(Header.name, Header);
     Vue.config.productionTip = false;
     //params前端用界面之间传参，query用来获取或者动态给URL添加？后面的查询参数
     // router.beforeEach((to,from,next)=>{
     //   // 判断是否带有特殊标记
     //   if( to.matched.some( record => record.meta.requiresAuth ) ){
     //     let login = localStorage.getItem( 'userInfo' ) ;// 验证是否登录
     //     if( login==null ){
     //       next({
     //         path : '/my/identify', // 登录页
     //         query : { redirect : to.fullPath }
     //       })
     //     }else{
     //       next()
     //     }
     //   }else{
     //     // alert(login)
     //     next()
     //   }
     // })
}
