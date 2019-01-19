import Vue from 'vue'
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router'
import App from './App'
import store from '../store/index'

import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem("token")
  if(token) {
    config.headers.Authorization = token;
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://litc.pro:9999/v1';
//配置全局的token
// axios.defaults.headers.common['Authorization'] = localStorage.getItem("token") || "";

//路由的导航守卫，在每一次跳转的时候都会触发一系列的回调函数，这些回调函数称为导航守卫
router.beforeEach((to, from, next) => {
  //在此处就需要判断，是否能够进入禁地
  console.log(to)
  let token = localStorage.getItem("token");
  if(!token && to.path != "/login") {
    return next("/login")
  }
  next();

//  添加了导航守卫的函数，必须使用next（）将其引导到某个页面,如果不传参数就是不干预跳转

})
router.afterEach((to, from) => {
  // to and from are both route objects.
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
