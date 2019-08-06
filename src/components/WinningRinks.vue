<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Winning Rinks</h3>
      </b-col>
    </b-row>
    <hr/>
    <b-row>
      <b-col>
        <h3>Gourdie Trophy</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="gourdieRinks" :fields="tableFields" small></b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Derby Trophy</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="derbyRinks" :fields="tableFields" small></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RinkService from '@/services/rink.service';

export default {
  name: 'Winning Rinks',
  data() {
    return {
      tableFields: [],
      gourdieRinks: [],
      derbyRinks: []
    };
  },
  created() {
    this.tableFields = ['season', 'skip', 'third', 'second', 'lead'];

    RinkService.getAllWinning('gourdie').then((response) => {
      this.gourdieRinks = response.data;
    });

    RinkService.getAllWinning('derby').then((response) => {
      this.derbyRinks = response.data;
    });
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
