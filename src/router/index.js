import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Rinks from '@/components/Rinks';
import WinningRinks from '@/components/WinningRinks';
import Login from '@/components/Login';
import Admin from '@/components/admin/Admin';
import AdminNews from '@/components/admin/AdminNews';
import AdminNewsCreate from '@/components/admin/AdminNewsCreate';
import AdminNewsUpdate from '@/components/admin/AdminNewsUpdate';
import NotFound from '@/components/NotFound';

Vue.use(Router);

// eslint-disable-next-line import/prefer-default-export
export const router = new Router({
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/news',
      name: 'AdminNews',
      component: AdminNews
    },
    {
      path: '/admin/news/create',
      name: 'AdminNewsCreate',
      component: AdminNewsCreate
    },
    {
      path: '/admin/news/update/:id',
      name: 'AdminNewsUpdate',
      component: AdminNewsUpdate
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const privatePages = ['/admin'];
  const authRequired = privatePages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});
