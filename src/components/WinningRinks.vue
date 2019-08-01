<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Gourdie Trophy</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="gourdieRinks" small></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import WinningRinkService from '@/services/winning-rink.service';

export default {
  name: 'Rinks',
  data() {
    return {
      gourdieRinks: []
    };
  },
  created() {
    this.gourdieRinks = [
      { year: '2017/2018', skip: 'R Goodall', third: 'D Gourdie', second: 'P Fraser', lead: 'C McNeil' }
    ];
    // WinningRinkService.getAll('gourdie').then((response) => {
    //   this.gourdieRinks = response.data;
    // });
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
