import Vue from 'vue';
import Router from 'vue-router';
import { AuthService } from '@/services/auth.service';
import Home from '@/components/Home';
import Rinks from '@/components/Rinks';
import Fixtures from '@/components/Fixtures';
import WinningRinks from '@/components/WinningRinks';
import Tables from '@/components/Tables';
import Merchandise from '@/components/Merchandise';
import Contact from '@/components/Contact';
import Login from '@/components/Login';
import Admin from '@/components/admin/Admin';
import AdminNews from '@/components/admin/AdminNews';
import AdminNewsCreate from '@/components/admin/AdminNewsCreate';
import AdminNewsUpdate from '@/components/admin/AdminNewsUpdate';
import AdminEnquiry from '@/components/admin/AdminEnquiry';
import AdminRinks from '@/components/admin/AdminRinks';
import AdminRinkCreate from '@/components/admin/AdminRinkCreate';
import AdminRinkUpdate from '@/components/admin/AdminRinkUpdate';
import AdminCompetitions from '@/components/admin/AdminCompetitions';
import AdminCompetitionCreate from '@/components/admin/AdminCompetitionCreate';
import AdminCompetitionUpdate from '@/components/admin/AdminCompetitionUpdate';
import AdminSeasons from '@/components/admin/AdminSeasons';
import AdminSeasonCreate from '@/components/admin/AdminSeasonCreate';
import AdminSeasonUpdate from '@/components/admin/AdminSeasonUpdate';
import AdminFixtures from '@/components/admin/AdminFixtures';
import AdminFixtureCreate from '@/components/admin/AdminFixtureCreate';
import UnderConstruction from '@/components/UnderConstruction';
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
      path: '/fixtures',
      name: 'Fixtures',
      component: Fixtures
    },
    {
      path: '/winning-rinks',
      name: 'WinningRinks',
      component: WinningRinks
    },
    {
      path: '/tables',
      name: 'Tables',
      component: Tables
    },
    {
      path: '/merchandise',
      name: 'Merchandise',
      component: Merchandise
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
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
      path: '/admin/enquiries',
      name: 'AdminEnquiry',
      component: AdminEnquiry,
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
      path: '/admin/competitions',
      name: 'AdminCompetitions',
      component: AdminCompetitions,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/competitions/create',
      name: 'AdminCompetitionCreate',
      component: AdminCompetitionCreate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/competitions/update/:id',
      name: 'AdminCompetitionUpdate',
      component: AdminCompetitionUpdate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/seasons',
      name: 'AdminSeasons',
      component: AdminSeasons,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/seasons/create',
      name: 'AdminSeasonCreate',
      component: AdminSeasonCreate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/seasons/update/:id',
      name: 'AdminSeasonUpdate',
      component: AdminSeasonUpdate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/fixtures',
      name: 'AdminFixtures',
      component: AdminFixtures,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/admin/fixtures/create',
      name: 'AdminFixtureCreate',
      component: AdminFixtureCreate,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/underconstruction',
      name: 'UnderConstruction',
      component: UnderConstruction
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
