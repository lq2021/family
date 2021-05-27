// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import headTop from '@/components/headTop.vue'
import Myfooter from '@/components/Myfooter.vue'
import classify from "@/components/classify.vue"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.component('head-top',headTop);
Vue.component('my-footer',Myfooter);
Vue.component('classify',classify);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
