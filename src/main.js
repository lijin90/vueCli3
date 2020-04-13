import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'; /* 引入axios进行地址访问*/
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
// 引入公共的js
import * as baseUrl from '../public/common/base'
import * as DataStore from '../public/common/DataStore'
import * as GetApi from '../public/common/api'
Vue.prototype.DataStore=DataStore;
Vue.prototype.baseUrl=baseUrl;
Vue.prototype.GetApi=GetApi;

Vue.config.productionTip = false;
window.vueBase= baseUrl;
// window.storex= store;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
