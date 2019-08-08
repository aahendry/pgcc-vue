<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Rinks Administration</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Season:"
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
        offset-md="6">
        <b-button
          variant="info"
          :to="{ name: 'AdminRinkCreate' }">Create rink</b-button>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Season</th>
                <th>Competition</th>
                <th>Skip</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <admin-rink-row
              v-for="rink in rinks"
              :key="rink.id"
              :rink="rink"
              @update="updateRink"
              @delete="deleteRink"/>
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
      <p class="my-4">Are you sure you want to delete this rink?</p>
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
import RinkService from '@/services/rink.service';
import SeasonService from '@/services/season.service';
import AdminRinkRow from '@/components/admin/AdminRinkRow';

export default {
  name: 'Admin Rinks',
  components: {
    'admin-rink-row': AdminRinkRow
  },
  data() {
    return {
      rinks: [],
      seasons: [],
      selectedRinkId: null,
      selectedSeasonId: null,
      alertModalTitle: '',
      alertModalContent: ''
    };
  },
  created() {
    this.fetchRinks();
    SeasonService.getAll().then((response) => {
      this.seasons = [];
      this.seasons.push({ text: 'This Season', value: null });
      response.data.forEach((element) => {
        this.seasons.push({ text: element.name, value: element.id });
      });
    });
  },
  methods: {
    updateRink(rinkId) {
      this.$router.push({ name: 'AdminRinkUpdate', params: { id: rinkId } });
    },
    deleteRink(rinkId) {
      this.selectedRinkId = rinkId;
      this.$refs.deleteConfirmModal.show();
    },
    fetchRinks() {
      RinkService.getAll(null, this.selectedSeasonId).then((response) => {
        this.rinks = response.data;
      });
    },
    onUpdateSeason() {
      this.fetchRinks();
    },
    onDeleteConfirm() {
      RinkService.delete(this.selectedRinkId).then(() => {
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully deleted rink';
        this.$refs.alertModal.show();
        this.fetchRinks();
      }).catch((error) => {
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    onDeleteModalHide() {
      this.selectedRinkId = null;
    }
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
