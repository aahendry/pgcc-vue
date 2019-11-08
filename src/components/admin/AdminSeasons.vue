<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Season Administration</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <b-button
          variant="info"
          :to="{ name: 'AdminSeasonCreate' }">Create season</b-button>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <admin-season-row
              v-for="season in seasons"
              :key="season.id"
              :season="season"
              @update="updateSeason"
              @delete="deleteSeason"/>
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
      <p class="my-4">Are you sure you want to delete this season?</p>
      <p class="my-4">This is a serious action and might break a lot of stuff.</p>
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
import SeasonService from '@/services/season.service';
import AdminSeasonRow from '@/components/admin/AdminSeasonRow';

export default {
  name: 'Admin Seasons',
  components: {
    'admin-season-row': AdminSeasonRow
  },
  data() {
    return {
      seasons: [],
      selectedSeasonId: null,
      alertModalTitle: '',
      alertModalContent: ''
    };
  },
  created() {
    this.fetchSeasons();
  },
  methods: {
    updateSeason(seasonId) {
      this.$router.push({ name: 'AdminSeasonUpdate', params: { id: seasonId } });
    },
    deleteSeason(seasonId) {
      this.selectedSeasonId = seasonId;
      this.$refs.deleteConfirmModal.show();
    },
    fetchSeasons() {
      SeasonService.getAll().then((response) => {
        this.seasons = response.data;
      });
    },
    onDeleteConfirm() {
      SeasonService.delete(this.selectedSeasonId).then(() => {
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully deleted season';
        this.$refs.alertModal.show();
        this.fetchSeasons();
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
