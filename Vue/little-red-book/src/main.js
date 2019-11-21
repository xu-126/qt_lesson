// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont.js' //引入阿里巴巴图标库js
import './assets/icon/iconfont.css'//引入阿里巴巴图标库css
import {  Icon, Loading } from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import GarenLoadmore from 'garen-loadmore'



Vue.use(Icon).use(Loading).use(GarenLoadmore)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
