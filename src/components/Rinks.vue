<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Rinks</h3>
      </b-col>
    </b-row>
    <hr/>
    <div v-for="competition in competitions" :key="competition.id">
      <div v-if="competition.rinks.length > 0">
      <b-row>
        <b-col>
          <h3>{{competition.competition.name}}</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="rink in competition.rinks" :key="rink.id" sm="12" md="6" lg="3">
          <b-card
            style="max-width: 20rem;"
            class="mb-2"
            img-src="https://placekitten.com/400/200"
            img-alt="Image"
            img-top
          >
            <b-card-title>{{rink.skip}}<div v-if="rink.wasWinningRink"> *</div></b-card-title>
            <b-card-text>
              <p>{{rink.third}}</p>
              <p>{{rink.second}}</p>
              <p>{{rink.lead}}</p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      </div>
    </div>
    <!-- <b-row>
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
    </b-row> -->
  </b-container>
</template>
<script>
import RinkService from '@/services/rink.service';
import CompetitionService from '@/services/competition.service';

export default {
  name: 'Rinks',
  data() {
    return {
      competitions: []
      // gourdieRinks: [],
      // derbyRinks: []
    };
  },
  created() {
    CompetitionService.getAll().then((response) => {
      this.competitions = [];
      response.data.forEach((competition) => {
        RinkService.getAll(competition.id, null).then((rinks) => {
          this.competitions.push({ competition, rinks: rinks.data });
        });
      });
    });

    // RinkService.getAll(1, null).then((response) => {
    //   this.gourdieRinks = response.data;
    // });
    // RinkService.getAll(2, null).then((response) => {
    //   this.derbyRinks = response.data;
    // });
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
