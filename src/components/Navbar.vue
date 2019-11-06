<template>
    <b-container>
  <b-navbar id="navbar" toggleable="lg" type="dark">
    <b-navbar-brand :to="{ name: 'Home' }">PGCC</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Rinks' }">Rinks</b-nav-item>
        <b-nav-item-dropdown
          id="nav-dropdown-competitions"
          text="Competitions"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item :to="{ name: 'Fixtures' }">Fixtures & Results</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'Table' }">Gourdie Table</b-dropdown-item>
          <b-dropdown-item href="#">Derby Table</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="nav-dropdown-archive"
          text="Archive"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item href="#">Old Results</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'WinningRinks' }">Winning Rinks</b-dropdown-item>
          <b-dropdown-item href="#">Photo Gallery</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item :to="{ name: 'Merchandise' }">Merchandise</b-nav-item>
        <b-nav-item href="http://pgcc-reserves.net46.net" target="_blank">Reserve System</b-nav-item>
        <b-nav-item :to="{ name: 'Contact' }">Contact Us</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'Login' }" v-show="!IsLoggedIn">Login</b-nav-item>
        <b-nav-item-dropdown
          id="nav-dropdown-admin"
          text="Admin"
          toggle-class="nav-link-custom"
          right
          v-show="IsLoggedIn"
        >
          <b-dropdown-item :to="{ name: 'Admin' }">Admin Page</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'AdminNews' }">News</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'AdminEnquiry' }">Enquiries</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'AdminRinks' }">Rinks</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'AdminCompetitions' }">Competitions</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'AdminFixtures' }">Fixtures</b-dropdown-item>
          <b-dropdown-item @click.prevent="logout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <b-container id="banner">
    <b-row>
      <b-col>
        <img
          id="logo"
          src="./../assets/Logo-Small.png"
          alt="PGCC"
          class="d-none d-lg-inline-block"/>
        <img
          id="logo"
          src="./../assets/Logo-X-Small.png"
          alt="PGCC"
          class="d-lg-none"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="homeText h-100 d-inline-block">Port Glasgow Curling Club</p>
      </b-col>
    </b-row>
  </b-container>
  <hr/>
  </b-container>
</template>
<script>
import { AuthService } from '@/services/auth.service';
import { router } from '../router';

export default {
  name: 'Navbar',
  data() {
    return {
      IsLoggedIn: this.CheckIfIsLoggedIn()
    };
  },
  created() {
    this.$bus.$on('logged', () => {
      this.IsLoggedIn = this.CheckIfIsLoggedIn();
    });
  },
  methods: {
    logout() {
      AuthService.logout();
      this.$bus.$emit('logged', 'User logged out');
      router.push('/');
    },
    CheckIfIsLoggedIn() {
      const user = JSON.parse(localStorage.getItem('user'));
      return user && user.token;
    }
  }
};
</script>
<style scoped>
.homeText {
  font-size: 35px;
  color: #345471;
  text-align: center;
  position: relative;
  top: 10px;
  text-shadow: 2px 2px 2px gray;
}
#navbar {
  background-color: #345471;
  margin-bottom: 15px;
  --height: 60px;
}
#banner {
  background-image: url("./../assets/Rings-Background.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
}
</style>
