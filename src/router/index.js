import Vue from 'vue';
import Router from 'vue-router';
import { AuthService } from '@/services/auth.service';
import Home from '@/components/Home';
import Rinks from '@/components/Rinks';
import WinningRinks from '@/components/WinningRinks';
import Table from '@/components/Table';
import Merchandise from '@/components/Merchandise';
import Login from '@/components/Login';
import Admin from '@/components/admin/Admin';
import AdminNews from '@/components/admin/AdminNews';
import AdminNewsCreate from '@/components/admin/AdminNewsCreate';
import AdminNewsUpdate from '@/components/admin/AdminNewsUpdate';
import AdminRinks from '@/components/admin/AdminRinks';
import AdminRinkCreate from '@/components/admin/AdminRinkCreate';
import AdminRinkUpdate from '@/components/admin/AdminRinkUpdate';
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
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/merchandise',
      name: 'Merchandise',
      component: Merchandise
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/news',
      name: 'AdminNews',
      component: AdminNews,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/news/create',
      name: 'AdminNewsCreate',
      component: AdminNewsCreate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/news/update/:id',
      name: 'AdminNewsUpdate',
      component: AdminNewsUpdate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/rinks',
      name: 'AdminRinks',
      component: AdminRinks,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/rinks/create',
      name: 'AdminRinkCreate',
      component: AdminRinkCreate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/rinks/update/:id',
      name: 'AdminRinkUpdate',
      component: AdminRinkUpdate,
      meta: {
        authRequired: true
      }
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
  const authRequired = to.meta.authRequired;
  const user = JSON.parse(localStorage.getItem('user'));
  let loggedIn = false;

  if (user) {
    if (new Date(user.tokenExpiry).getTime() >= Date.now()) {
      loggedIn = true;
    } else {
      AuthService.logout();
      // this.$bus.$emit('logged', 'User logged out');
    }
  }

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});
