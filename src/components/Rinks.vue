<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Gourdie Rinks</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="rink in gourdieRinks" :key="rink.id" sm="12" md="6" lg="3">
        <b-card
          style="max-width: 20rem;"
          class="mb-2"
          img-src="https://placekitten.com/400/200"
          img-alt="Image"
          img-top
        >
          <b-card-title>{{rink.skip}}</b-card-title>
          <b-card-text>
            <p>{{rink.third}}</p>
            <p>{{rink.second}}</p>
            <p>{{rink.lead}}</p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <hr/>
    <b-row>
      <b-col>
        <h3>Derby Rinks</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="rink in derbyRinks" :key="rink.id" sm="12" md="6" lg="3">
        <b-card
          style="max-width: 20rem;"
          class="mb-2"
          img-src="https://placekitten.com/600/300"
          img-alt="Image"
          img-top
        >
          <b-card-title>{{rink.skip}}</b-card-title>
          <b-card-text>
            <p>{{rink.third}}</p>
            <p>{{rink.second}}</p>
            <p>{{rink.lead}}</p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import RinkService from '@/services/rink.service';

export default {
  name: 'Rinks',
  data() {
    return {
      gourdieRinks: [],
      derbyRinks: []
    };
  },
  created() {
    RinkService.getAll('gourdie').then((response) => {
      this.gourdieRinks = response.data;
    });
    RinkService.getAll('derby').then((response) => {
      this.derbyRinks = response.data;
    });
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
h3 {
  padding-bottom: 20px;
}

</style>
