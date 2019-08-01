<template>
  <b-container>
    <b-row>
      <b-col lg="8" md="12">
        <h3>News</h3>
        <ul>
          <li><p>01/01/2001 - News 2</p></li>
          <li><p>01/01/2000 - News 1</p></li>
        </ul>
      </b-col>
      <b-col lg="4" md="12">
        <h3>About PGCC</h3>
        <p>Port Glasgow Curling Club was formed in 1827
           and admitted to the Royal Caledonian Curling Club in 1840.</p>
        <p>Part of the Renfrewshire (12th) province of Area 3,
           the club plays the majority of games at the Waterfront Leisure Complex
            curling rink in Greenock.</p>
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
p {
  text-align: justify;
}

</style>
