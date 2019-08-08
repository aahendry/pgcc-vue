<template>
  <tr>
    <td>{{ rink.season }}</td>
    <td>{{ rink.competition }}</td>
    <td>{{ rink.skip }}</td>
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
  name: 'AdminRinkRow',
  props: ['rink'],
  methods: {
    onUpdateClick() {
      this.$emit('update', this.rink.id);
    },
    onDeleteClick() {
      this.$emit('delete', this.rink.id);
    }
  }
};
</script>
