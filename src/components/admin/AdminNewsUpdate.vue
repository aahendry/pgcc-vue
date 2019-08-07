<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h3>Update News Item</h3>
      </b-col>
    </b-row>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateNewsItem">
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Title:"
          for="title">
          <b-col :md="5">
            <b-input
              id="title"
              v-model="formData.title"
              maxlength="255"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Text:"
          for="text">
          <b-col :md="5">
            <b-input
              id="text"
              v-model="formData.text"
              maxlength="255"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Visible:"
          for="isVisible">
          <b-col :md="5">
            <b-form-checkbox
              id="isVisible"
              v-model="formData.isVisible"
              switch/>
          </b-col>
        </b-form-group>
        <br/>
        <b-col
          :md="5"
          offset="4">
          <b-button
            type="submit"
            variant="info">Save</b-button>
          <b-button
            :to="{ name: 'AdminNews' }"
            variant="danger">Cancel</b-button>
        </b-col>
      </b-form>
    </div>
    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true"
      @ok="onAlertModalOkClick">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>
<script>
import NewsService from '@/services/news.service';

export default {
  name: 'AdminNewsUpdate',
  data() {
    return {
      formData: {
        title: '',
        text: '',
        isVisible: true,
        when: '',
        id: 0
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessful: false
    };
  },
  created() {
    NewsService.get(this.$router.currentRoute.params.id).then((response) => {
      this.formData.title = response.data.title;
      this.formData.text = response.data.text;
      this.formData.isVisible = response.data.isVisible;
      this.formData.when = response.data.when;
      this.formData.id = response.data.id;
    });
  },
  methods: {
    updateNewsItem() {
      NewsService.update(this.$router.currentRoute.params.id, this.formData).then(() => {
        this.isSuccessful = true;
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully updated news item';
        this.$refs.alertModal.show();
      }).catch((error) => {
        this.isSuccessful = false;
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    onAlertModalOkClick() {
      if (this.isSuccessful) {
        this.$router.push({ name: 'AdminNews' });
      }
    }
  }
};
</script>
<style>
.form-wrapper {
  margin-top: 20px;
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
}
</style>
