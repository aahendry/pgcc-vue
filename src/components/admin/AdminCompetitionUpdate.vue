<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h3>Update Competition</h3>
      </b-col>
    </b-row>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateCompetition">

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

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Blurb:"
          for="blurb">
          <b-col :md="5">
            <b-input
              id="blurb"
              v-model="formData.blurb"
              maxlength="1000"
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
  name: 'AdminCompetitionUpdate',
  data() {
    return {
      formData: {
        name: '',
        blurb: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessful: false
    };
  },
  created() {
    CompetitionService.get(this.$router.currentRoute.params.id).then((response) => {
      this.formData.name = response.data.name;
      this.formData.blurb = response.data.blurb;
    });
  },
  methods: {
    updateCompetition() {
      CompetitionService.update(this.$router.currentRoute.params.id, this.formData).then(() => {
        this.isSuccessful = true;
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully updated competition';
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
