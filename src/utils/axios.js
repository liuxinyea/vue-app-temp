import axios from 'axios';
import router from '../router';

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = "11";
axios.defaults.timeout=5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers['x-auth-token'] =localStorage.getItem('x-auth-token');
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);
//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.code===-99){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
);
const instance={
  /**
   * 封装get方法
   * @param url
   * @param params
   * @returns {Promise}
   */
  get(url,params={}){
    return new Promise((resolve,reject) => {
      axios({
        method:'get',
        url:url,
        params:params
      }).then(response => {
        resolve(response.data);
      })
        .catch(err => {
          reject(err)
        })
    })
  },
  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  post(url,data = {}){
    return new Promise((resolve,reject) => {
      axios({
        method:'post',
        url:url,
        params:data
      }).then(response => {
        if(url!=='/login/userLogin'){
          resolve(response.data);
        }else {
          resolve(response);
        }

      },err => {
        reject(err)
      })
    })
  }
};
export default instance;


