<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Merchandise</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="merchandise" small></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      merchandise: []
    };
  },
  created() {
    this.merchandise = [
      { item: 'Lambswool V-Neck', cost: '£37', sizes: '38, 40, 42, 44, 46 (1 size up is recommended)' },
      { item: 'Round Neck Sweatshirt', cost: '£12', sizes: 'S, M, L, XL, XXL' },
      { item: 'Polo Shirt', cost: '£11', sizes: 'S, M, L, XL, XXL' },
      { item: 'Zip Neck Sweatshirt', cost: '£16', sizes: 'S, M, L, XL, XXL' },
      { item: 'Gilet (Fleece)', cost: '£19', sizes: 'S, M, L, XL, XXL' },
      { item: 'Fleece Jacket', cost: '£23', sizes: 'S, M, L, XL' },
      { item: 'Padded Body Warmer', cost: '£23', sizes: 'S, M, L, XL' },
      { item: 'Tie', cost: '£10', sizes: '' }
    ];
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
