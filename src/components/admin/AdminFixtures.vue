<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Fixtures Administration</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="5">
        <b-form-group
          :label-cols="3"
          breakpoint="sm"
          horizontal
          label="Season: "
          for="season">
          <b-form-select
            id="season"
            v-model="selectedSeasonId"
            :options="seasons"
            @change="onUpdateSeason"
            required>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col
        md="2"
        offset-md="5">
        <b-button
          variant="info"
          :to="{ name: 'AdminFixtureCreate' }">Add fixture</b-button>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Competition</th>
                <th>When</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Shots</th>
                <th>Ends</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <admin-fixture-row
              v-for="fixture in fixtures"
              :key="fixture.id"
              :fixture="fixture"
              :seasons="seasons"
              @update="updateFixture"
              @delete="deleteFixture"
              @copy="copyFixture"/>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal
      ref="deleteConfirmModal"
      title="Confirm your action"
      @ok="onDeleteConfirm"
      @hide="onDeleteModalHide">
      <p class="my-4">Are you sure you want to delete this fixture?</p>
    </b-modal>
    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>

<script>
import FixtureService from '@/services/fixture.service';
import SeasonService from '@/services/season.service';
import AdminFixtureRow from '@/components/admin/AdminFixtureRow';

export default {
  name: 'Admin Fixtures',
  components: {
    'admin-fixture-row': AdminFixtureRow
  },
  data() {
    return {
      fixtures: [],
      seasons: [],
      selectedFixtureId: null,
      selectedSeasonId: null,
      alertModalTitle: '',
      alertModalContent: ''
    };
  },
  created() {
    this.fetchFixtures();
    SeasonService.getAll().then((response) => {
      this.seasons = [];
      this.seasons.push({ text: 'This Season', value: null });
      response.data.forEach((element) => {
        this.seasons.push({ text: element.name, value: element.id });
      });
    });
  },
  methods: {
    updateFixture() {
      this.fetchFixtures();
    },
    deleteFixture(fixtureId) {
      this.selectedFixtureId = fixtureId;
      this.$refs.deleteConfirmModal.show();
    },
    copyFixture(fixtureId) {
      this.selectedFixtureId = fixtureId;
      FixtureService.copy(this.selectedFixtureId).then(() => {
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully copied fixture';
        this.$refs.alertModal.show();
        this.fetchFixtures();
      }).catch((error) => {
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    fetchFixtures() {
      FixtureService.getAll(this.selectedSeasonId).then((response) => {
        this.fixtures = response.data;
      });
    },
    onUpdateSeason() {
      this.fetchFixtures();
    },
    onDeleteConfirm() {
      FixtureService.delete(this.selectedFixtureId).then(() => {
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully deleted fixture';
        this.$refs.alertModal.show();
        this.fetchFixtures();
      }).catch((error) => {
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    onDeleteModalHide() {
      this.selectedSeasonId = null;
    }
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
