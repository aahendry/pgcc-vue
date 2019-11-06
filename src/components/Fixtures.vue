<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Fixtures</h3>
      </b-col>
    </b-row>

    <hr/>

    <b-row>
      <b-col>
        <table class="table table-striped table-hover table-sm table-bordered">
        <thead>
          <tr>
            <th v-for="(header, index) in tableHeader" :key="index">{{header}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fixture in fixtures" :key="fixture.id">
            <td>{{ fixture.competition.name }}</td>
            <td>{{ fixture.round }}</td>
            <td>{{ fixture.when | short-date-time }}</td>
            <td :class="fixture.shots1 < fixture.shots2 ? 'text-muted' : ''">{{ fixture.competition.hasLeagueTable ? fixture.team1.skip : fixture.team1OtherName }}</td>
            <td>v</td>
            <td :class="fixture.shots1 > fixture.shots2 ? 'text-muted' : ''">{{ fixture.competition.hasLeagueTable ? fixture.team2.skip : fixture.team2OtherName }}</td>
            <td>{{ fixture.shots1 ? fixture.shots1 + ' - ' + fixture.shots2 : '' }}</td>
            <td>{{ fixture.ends1 ? fixture.ends1 + ' - ' + fixture.ends2 : '' }}</td>
          </tr>
        </tbody>
      </table>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import FixtureService from '@/services/fixture.service';

export default {
  name: 'Fixtures',
  data() {
    return {
      fixtures: [],
      tableHeader: []
    };
  },
  created() {
    FixtureService.getAll().then((response) => {
      this.fixtures = response.data;
    });

    this.tableHeader = ['Competition', 'Round', 'When', 'Team', '', 'Team', 'Shots', 'Ends'];
  }
};
</script>

<style scoped>
h4 {
  padding-bottom: 20px;
}
</style>
