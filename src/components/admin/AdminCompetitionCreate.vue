<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h3>Create Competition</h3>
      </b-col>
    </b-row>
    <div class="form-wrapper">
      <b-form @submit.prevent="createCompetition">

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Name:"
          for="name">
          <b-col :md="5">
            <b-input
              id="name"
              v-model="formData.name"
              maxlength="255"
              required />
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
            :to="{ name: 'AdminCompetitions' }"
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
import CompetitionService from '@/services/competition.service';

export default {
  name: 'AdminCompetitionCreate',
  data() {
    return {
      formData: {
        name: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessful: false
    };
  },
  methods: {
    createCompetition() {
      CompetitionService.create(this.formData).then(() => {
        this.isSuccessful = true;
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully created competition';
        this.$refs.alertModal.show();

        this.formData = {
          name: ''
        };
      }).catch((error) => {
        this.isSuccessful = false;
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    onAlertModalOkClick() {
      if (this.isSuccessful) {
        this.$router.push({ name: 'AdminCompetitions' });
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
