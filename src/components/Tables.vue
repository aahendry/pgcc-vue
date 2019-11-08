<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>League Tables</h3>
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
            <tr v-for="tableRow in table.table" :key="tableRow.rink.id">
              <td>{{ tableRow.rink.skip }}</td>
              <td>{{ tableRow.played }}</td>
              <td>{{ tableRow.won }}</td>
              <td>{{ tableRow.drawn }}</td>
              <td>{{ tableRow.lost }}</td>
              <td>{{ tableRow.for }}</td>
              <td>{{ tableRow.against }}</td>
              <td>{{ tableRow.shots }}</td>
              <td>{{ tableRow.endsWon }}</td>
              <td>{{ tableRow.points }}</td>
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

export default {
  name: 'Tables',
  data() {
    return {
      tables: [],
      tableHeader: []
    };
  },
  created() {
    CompetitionService.getAllLeagues().then((competitions) => {
      competitions.data.forEach((competition) => {
        CompetitionService.getTable(competition.id).then((table) => {
          this.tables.push({ competition, table: table.data });
        });
      });
    });

    this.tableHeader = ['', 'Played', 'Won', 'Drawn', 'Lost', 'For', 'Against', 'Shots', 'Ends Won', 'Points'];
  }
};
</script>
<style scoped>
h4 {
  padding-bottom: 20px;
}

</style>
