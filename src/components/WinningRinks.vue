<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Winning Rinks</h3>
      </b-col>
    </b-row>

    <hr/>

    <div v-for="table in tables" :key="table.competition.id">
      <div v-if="table.table.length > 0">
      <b-row>
        <b-col>
          <h4>{{table.competition.name}}</h4>
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
            <tr v-for="rink in table.table" :key="rink.id">
              <td>{{ rink.season.name }}</td>
              <td>{{ rink.skip }}</td>
              <td>{{ rink.third }}</td>
              <td>{{ rink.second }}</td>
              <td>{{ rink.lead }}</td>
            </tr>
          </tbody>
        </table>
        </b-col>
      </b-row>
      </div>
      <br/>
    </div>

  </b-container>
</template>

<script>
import CompetitionService from '@/services/competition.service';
import RinkService from '@/services/rink.service';

export default {
  name: 'Winning Rinks',
  data() {
    return {
      tableHeader: [],
      tables: []
    };
  },
  created() {
    CompetitionService.getAllLeagues().then((competitions) => {
      competitions.data.forEach((competition) => {
        RinkService.getAllWinning(competition.id).then((table) => {
          this.tables.push({ competition, table: table.data });
        });
      });
    });

    this.tableHeader = ['Season', 'Skip', 'Third', 'Second', 'Lead'];
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
