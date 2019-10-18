<template>
  <tr>
    <td>{{ enquiry.when | short-date }}</td>
    <td>{{ enquiry.name }}</td>
    <td>{{ enquiry.email }}</td>
    <td>{{ enquiry.message }}</td>
    <td>
      <b-button
      variant="danger"
      @click="onDeleteClick">Delete</b-button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'AdminEnquiryRow',
  props: ['enquiry'],
  methods: {
    onDeleteClick() {
      this.$emit('delete', this.enquiry.id);
    }
  }
};
</script>
