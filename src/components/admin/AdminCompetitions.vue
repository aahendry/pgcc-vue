<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Competition Administration</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <b-button
          variant="info"
          :to="{ name: 'AdminCompetitionCreate' }">Create competition</b-button>
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
              <admin-competition-row
              v-for="competition in competitions"
              :key="competition.id"
              :competition="competition"
              @update="updateCompetition"
              @delete="deleteCompetition"/>
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
      <p class="my-4">Are you sure you want to delete this competiton?</p>
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
import CompetitionService from '@/services/competition.service';
import AdminCompetitionRow from '@/components/admin/AdminCompetitionRow';

export default {
  name: 'Admin Competitions',
  components: {
    'admin-competition-row': AdminCompetitionRow
  },
  data() {
    return {
      competitions: [],
      selectedCompetitionId: null,
      alertModalTitle: '',
      alertModalContent: ''
    };
  },
  created() {
    this.fetchCompetitions();
  },
  methods: {
    updateCompetition(competitionId) {
      this.$router.push({ name: 'AdminCompetitionUpdate', params: { id: competitionId } });
    },
    deleteCompetition(competitionId) {
      this.selectedCompetitionId = competitionId;
      this.$refs.deleteConfirmModal.show();
    },
    fetchCompetitions() {
      CompetitionService.getAll().then((response) => {
        this.competitions = response.data;
      });
    },
    onDeleteConfirm() {
      CompetitionService.delete(this.selectedCompetitionId).then(() => {
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully deleted competition';
        this.$refs.alertModal.show();
        this.fetchCompetitions();
      }).catch((error) => {
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    onDeleteModalHide() {
      this.selectedCompetitionId = null;
    }
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
