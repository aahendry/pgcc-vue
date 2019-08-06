<template>
  <tr>
    <td>{{ newsItem.when | short-date }}</td>
    <td>{{ newsItem.title }}</td>
    <td>{{ newsItem.text }}</td>
    <td>{{ newsItem.isVisible }}</td>
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
  name: 'AdminNewsRow',
  props: ['newsItem'],
  methods: {
    onUpdateClick() {
      this.$emit('update', this.newsItem.id);
    },
    onDeleteClick() {
      this.$emit('delete', this.newsItem.id);
    }
  }
};
</script>
