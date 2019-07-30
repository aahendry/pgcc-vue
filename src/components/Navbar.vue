<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand :to="{ name: 'Home' }">PGCC</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">Rinks</b-nav-item>
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
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
};
</script>
