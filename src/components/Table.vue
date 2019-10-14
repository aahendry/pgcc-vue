<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Gourdie Table</h3>
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col>
        <b-table striped hover :items="table" small></b-table>
      </b-col>
    </b-row> -->
    <b-row>
      <b-col>
        <table class="table table-striped table-hover table-sm">
          <thead>
            <tr>
              <th v-for="(header, index) in table2Head" :key="index">{{header}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in table2Data" :key="index">
              <td v-for="(data, index) in row" :key="index">{{data}}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      table: [],
      table2: [],
      table2Head: [],
      table2Data: []
    };
  },
  created() {
    this.table = [
      // row: { data: { rink: '', played: 'Played', won: 'Won', drawn: 'Drawn', lost: 'Lost', for: 'For', against: 'Against', shots: 'Shots', points: 'Points'} },
      { rink: 'R. Rushton', played: '14', won: '9', drawn: '2', lost: '3', for: '103', against: '76', shots: '27', points: '20' },
      { rink: 'J. MacDougall', played: '14', won: '9', drawn: '1', lost: '4', for: '110', against: '74', shots: '36', points: '19' }
    ];
    this.table2 = [
      ['Gourdie 2018/2019', 'Played', 'Won', 'Drawn', 'Lost', 'For', 'Against', 'Shots', 'Points'],
      ['R. Rushton', '14', '9', '2', '3', '103', '76', '27', '20'],
      ['J. MacDougall', '9', '9', '1', '4', '110', '74', '36', '19']
    ];
    this.table2Head = this.table2[0];
    this.table2Data = this.table2.slice(1, this.table2.length);
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
