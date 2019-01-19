import Vue from 'vue'
//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import router from './router'
import App from './App'
import store from '../store/index'

import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://litc.pro:9999/v1';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
