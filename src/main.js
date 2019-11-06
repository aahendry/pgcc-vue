import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import Axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './App';
import EventBus from './EventBus';
import { router } from './router';
import ShortDateFilter from './filters/short-date';
import ShortDateTimeFilter from './filters/short-date-time';

Vue.config.productionTip = false;

Vue.prototype.$bus = EventBus;

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
Vue.filter('short-date-time', ShortDateTimeFilter);
