<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>News</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <ul>
          <li><p>01/01/2001 - News 2</p></li>
          <li><p>01/01/2000 - News 1</p></li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'Home'
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

</style>
