import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Rinks from '@/components/Rinks';
import WinningRinks from '@/components/WinningRinks';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/winning-rinks',
      name: 'WinningRinks',
      component: WinningRinks
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
