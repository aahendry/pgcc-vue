<template>
  <tr>
    <td>{{ competition.name }}</td>
    <td>{{ competition.hasLeagueTable }}</td>
    <td>
      <b-button
      variant="success"
      @click="onUpdateClick">Update</b-button>
    </td>
    <td>
      <b-button
      variant="danger"
      @click="onDeleteClick">Delete</b-button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'AdminCompetitionRow',
  props: ['competition'],
  methods: {
    onUpdateClick() {
      this.$emit('update', this.competition.id);
    },
    onDeleteClick() {
      this.$emit('delete', this.competition.id);
    }
  }
};
</script>
