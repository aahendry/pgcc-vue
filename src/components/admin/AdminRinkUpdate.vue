<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h3>Update Rink</h3>
      </b-col>
    </b-row>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateRink">

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Season:"
          for="season">
          <b-form-select
            id="season"
            v-model="formData.seasonId"
            :options="seasons"
            required>
          </b-form-select>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Competition:"
          for="competition">
          <b-form-select
            id="competition"
            v-model="formData.competitionId"
            :options="competitions"
            required>
          </b-form-select>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Skip:"
          for="skip">
          <b-col :md="5">
            <b-input
              id="skip"
              v-model="formData.skip"
              maxlength="255"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Third:"
          for="third">
          <b-col :md="5">
            <b-input
              id="third"
              v-model="formData.third"
              maxlength="255"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Second:"
          for="second">
          <b-col :md="5">
            <b-input
              id="second"
              v-model="formData.second"
              maxlength="255"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Lead:"
          for="lead">
          <b-col :md="5">
            <b-input
              id="lead"
              v-model="formData.lead"
              maxlength="255"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Was Winning Rink:"
          for="wasWinningRink">
          <b-col :md="5">
            <b-form-checkbox
              id="wasWinningRink"
              v-model="formData.wasWinningRink"
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
            :to="{ name: 'AdminRinks' }"
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
import RinkService from '@/services/rink.service';
import SeasonService from '@/services/season.service';
import CompetitionService from '@/services/competition.service';

export default {
  name: 'AdminRinkUpdate',
  data() {
    return {
      formData: {
        skip: '',
        third: '',
        second: '',
        lead: '',
        wasWinningRink: false,
        seasonId: null,
        competitionId: null,
        id: 0
      },
      seasons: [],
      competitions: [],
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessful: false
    };
  },
  created() {
    SeasonService.getAll().then((response) => {
      this.seasons = [];
      response.data.forEach((element) => {
        this.seasons.push({ text: element.name, value: element.id });
      });
    });
    CompetitionService.getAll().then((response) => {
      this.competitions = [];
      response.data.forEach((element) => {
        this.competitions.push({ text: element.name, value: element.id });
      });
    });
    RinkService.get(this.$router.currentRoute.params.id).then((response) => {
      this.formData.skip = response.data.skip;
      this.formData.third = response.data.third;
      this.formData.second = response.data.second;
      this.formData.lead = response.data.lead;
      this.formData.wasWinningRink = response.data.wasWinningRink;
      this.formData.seasonId = response.data.season.id;
      this.formData.competitionId = response.data.competition.id;
      this.formData.id = response.data.id;
    });
  },
  methods: {
    updateRink() {
      RinkService.update(this.$router.currentRoute.params.id, this.formData).then(() => {
        this.isSuccessful = true;
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully updated rink';
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
        this.$router.push({ name: 'AdminRinks' });
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
