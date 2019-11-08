<template>
  <tr>
    <td>{{ season.name }}</td>
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
  name: 'AdminSeasonRow',
  props: ['season'],
  methods: {
    onUpdateClick() {
      this.$emit('update', this.season.id);
    },
    onDeleteClick() {
      this.$emit('delete', this.season.id);
    }
  }
};
</script>
