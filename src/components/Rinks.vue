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
          <h4>{{competition.competition.name}}</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <table class="table table-striped table-hover table-sm table-bordered">
          <thead>
            <tr>
              <th v-for="(header, index) in tableHeader" :key="index">{{header}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rink in competition.rinks" :key="rink.id">
              <td>{{ rink.skip }}</td>
              <td>{{ rink.third }}</td>
              <td>{{ rink.second }}</td>
              <td>{{ rink.lead }}</td>
            </tr>
          </tbody>
        </table>
        </b-col>
      </b-row>
      <br/>
      </div>
    </div>

  </b-container>
</template>

<script>
import RinkService from '@/services/rink.service';
import CompetitionService from '@/services/competition.service';

export default {
  name: 'Rinks',
  data() {
    return {
      competitions: [],
      tableHeader: []
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

    this.tableHeader = ['Skip', 'Third', 'Second', 'Lead'];
  }
};
</script>

<style scoped>
h4 {
  padding-bottom: 20px;
}
</style>
