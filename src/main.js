import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './App';
import { router } from './router';
import ShortDateFilter from './filters/short-date';

Vue.config.productionTip = false;

Axios.defaults.baseURL = process.env.API_ENDPOINT;

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

/* filters */
Vue.filter('short-date', ShortDateFilter);
