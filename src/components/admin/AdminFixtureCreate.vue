<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h3>Add Fixture</h3>
      </b-col>
    </b-row>
    <div class="form-wrapper">
      <b-form @submit.prevent="createFixture">

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
            @change="onUpdateSeason"
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
            @change="onUpdateCompetition"
            required>
          </b-form-select>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="When:"
          for="when">
          <datepicker
            id="when"
            use-utc
            minute-interval="5"
            v-model="formData.when"/>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Final?:"
          for="isFinal">
          <b-col :md="5">
            <b-form-checkbox
              id="isFinal"
              v-model="formData.isFinal"
              switch/>
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Round:"
          for="round">
          <b-col :md="5">
            <b-input
              id="round"
              v-model="formData.round"
              maxlength="255" />
          </b-col>
        </b-form-group>

        <b-form-group
          v-show="this.isLeagueTableSeason"
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Team 1:"
          for="team1">
          <b-form-select
            id="team1"
            v-model="formData.team1Id"
            :options="rinks"
            :disabled="!(formData.competitionId && formData.seasonId)">
          </b-form-select>
        </b-form-group>

        <b-form-group
          v-show="this.isLeagueTableSeason"
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Team 2:"
          for="team2">
          <b-form-select
            id="team2"
            v-model="formData.team2Id"
            :options="rinks"
            :disabled="!(formData.competitionId && formData.seasonId)">
          </b-form-select>
        </b-form-group>

        <b-form-group
          v-show="!(this.isLeagueTableSeason)"
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Team 1:"
          for="team1OtherName">
          <b-col :md="5">
            <b-input
              id="team1OtherName"
              v-model="formData.team1OtherName"
              maxlength="255" />
          </b-col>
        </b-form-group>

        <b-form-group
          v-show="!(this.isLeagueTableSeason)"
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Team 2:"
          for="team2OtherName">
          <b-col :md="5">
            <b-input
              id="team2OtherName"
              v-model="formData.team2OtherName"
              maxlength="255" />
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
            :to="{ name: 'AdminFixtures' }"
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
import FixtureService from '@/services/fixture.service';
import Datepicker from 'vue-ctk-date-time-picker';

export default {
  name: 'AdminRinkCreate',
  components: {
    Datepicker
  },
  data() {
    return {
      formData: {
        seasonId: null,
        competitionId: null,
        team1Id: null,
        team2Id: null,
        team1OtherName: null,
        team2OtherName: null,
        shots1: null,
        shots2: null,
        ends1: null,
        ends2: null,
        when: null,
        round: null,
        isFinal: false
      },
      seasons: [],
      competitions: [],
      competitionsFull: [],
      rinks: [],
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessful: false,
      isLeagueTableSeason: false
    };
  },
  created() {
    this.formData.when = new Date(new Date().toUTCString());
    this.formData.when.setHours(17, 40);
    SeasonService.getAll().then((response) => {
      this.seasons = [];
      this.seasons.push({ text: 'Please Select:', value: null });
      response.data.forEach((element) => {
        this.seasons.push({ text: element.name, value: element.id });
      });
    });
    CompetitionService.getAll().then((response) => {
      this.competitions = [];
      this.competitionsFull = response.data;
      this.competitions.push({ text: 'Please Select:', value: null });
      response.data.forEach((element) => {
        this.competitions.push({ text: element.name, value: element.id });
      });
    });
    this.rinks = [];
  },
  methods: {
    onUpdateSeason() {
      this.tryUpdateRinks();
    },
    onUpdateCompetition() {
      this.isLeagueTableSeason = this.competitionsFull.find(o => o.id === this.formData.competitionId).hasLeagueTable;
      this.tryUpdateRinks();
    },
    tryUpdateRinks() {
      if (this.formData.competitionId && this.formData.seasonId) {
        if (this.isLeagueTableSeason) {
          this.fetchRinks();
        }
      }
    },
    fetchRinks() {
      RinkService.getAll(this.formData.competitionId, this.formData.seasonId).then((response) => {
        this.rinks = [];
        this.rinks.push({ text: 'Please Select:', value: null });
        response.data.forEach((element) => {
          this.rinks.push({ text: element.skip, value: element.id });
        });
      });
    },
    createFixture() {
      FixtureService.create(this.formData).then(() => {
        this.isSuccessful = true;
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully added fixture';
        this.$refs.alertModal.show();

        this.formData = {
          seasonId: null,
          competitionId: null,
          team1Id: null,
          team2Id: null,
          team1OtherName: null,
          team2OtherName: null,
          shots1: null,
          shots2: null,
          ends1: null,
          ends2: null,
          when: null,
          round: null,
          isFinal: false
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
        this.$router.push({ name: 'AdminFixtures' });
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
