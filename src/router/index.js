import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Rinks from '@/components/Rinks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rinks',
      name: 'Rinks',
      component: Rinks
    }
  ]
});
