<template>
    <b-container>
  <b-navbar id="navbar" toggleable="lg" type="dark">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item :to="{ name: 'Rinks' }">Rinks</b-nav-item>
        <b-nav-item href="#">Fixtures & Results</b-nav-item>
        <b-nav-item-dropdown
          id="nav-dropdown-competitions"
          text="Competitions"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item href="#">Gourdie</b-dropdown-item>
          <b-dropdown-item href="#">Derby</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          id="nav-dropdown-archive"
          text="Archive"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item href="#">Old Results</b-dropdown-item>
          <b-dropdown-item href="#">Winning Rinks</b-dropdown-item>
          <b-dropdown-item href="#">Photo Gallery</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Merchandise</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <b-container>
    <b-row>
      <b-col>
        <a href="#/">
          <img
          id="logo"
          src="./../assets/Logo-Small.png"
          alt="PGCC"/>
        </a>
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
export default {
  name: 'Navbar'
};
</script>
<style>
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
#brand {
  display: block;
  position: relative;
  --top: 60px;
}
.dropdown-menu {
  background-color: #345471;
}
</style>
