import axios from 'axios';
import Vue from 'vue'

axios.defaults.baseURL=process.env.BASE_API;


function post(url,param,header) {
  if(header==null||header===undefined){
    header={"x-auth-token":localStorage.getItem('token')};
  }else{
    header["x-auth-token"]=localStorage.getItem('token');
  }
  return new Promise(function(resolve, reject) {
    axios({
      method: 'post',
      url:url,
      params:param,
      headers:header,
    }).then(function (res) {
      if(res.data.code===0){
        resolve(res)
      }else{
        reject(res.data.msg)
      }
    }).catch(function (error) {
       reject(error)
    })
  });
}
function postJson(url,param,header) {
  return new Promise(function(resolve, reject) {
    if(header==null||header===undefined){
      header={"x-auth-token":localStorage.getItem('token')};
    }else{
      header["x-auth-token"]=localStorage.getItem('token');
    }
    // alert(JSON.stringify(header))
    axios({
      method: 'post',
      url:url,
      data:param,
      headers:header,
      // validateStatus: function (status) {
      //   return status == 200; // 状态码在大于或等于500时才会 reject
      // }
    }).then(function (res) {
      if(res.data.code===0){
        resolve(res)
      }else{
        reject(res.data.msg)
      }
    }).catch(function (error) {
      reject(error)
    })
  });
}
function get(url,param,header) {
  return new Promise(function(resolve, reject) {
    if(header==null||header===undefined){
      header={"x-auth-token":localStorage.getItem('token')};
    }else{
      header["x-auth-token"]=localStorage.getItem('token');
    }
    axios({
      method: 'get',
      url:url,
      params:param,
      headers:header,
    }).then(function (res) {
      if(res.data.code===0){
        resolve(res)
      }else{
        reject(res.data.msg)
      }
    }).catch(function (error) {
      reject(error)
    })
  });
}
function postProgress(url,param,header) {
  let self=this;
  return new Promise(function (resolve, reject) {
    self.$indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    });
     post(url,param,header)
      .then(function (res) {
        resolve(res)
      }).catch(function (e) {
      reject(e)
    }).finally(function () {
      self.$indicator.close();
    })
  });
}
function postJsonProgress(url,param,header) {
  let self=this;
  return new Promise(function (resolve, reject) {
    self.$indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    });
     postJson(url,param,header)
      .then(function (res) {
        resolve(res)
      }).catch(function (e) {
      reject(e)
    }).finally(function () {
      self.$indicator.close();
    })
  });
}
function getProgress(url, param, header) {
  let self=this;
  return new Promise(function (resolve, reject) {
    self.$indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    });
    get(url,param,header)
      .then(function (res) {
        resolve(res)
      }).catch(function (e) {
        reject(e)
    }).finally(function () {
      self.$indicator.close();
    })
  });
}

export {axios,post,postJson,get,postProgress,postJsonProgress,getProgress};
