<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Enquiry Administration</h3>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>When</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <admin-enquiry-row
              v-for="enquiry in enquiries"
              :key="enquiry.id"
              :enquiry="enquiry"
              @delete="deleteEnquiry"/>
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
      <p class="my-4">Are you sure you want to delete this enquiry? has it been dealt with?</p>
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
import EnquiryService from '@/services/enquiry.service';
import AdminEnquiryRow from '@/components/admin/AdminEnquiryRow';

export default {
  name: 'Admin Enquiry',
  components: {
    'admin-enquiry-row': AdminEnquiryRow
  },
  data() {
    return {
      enquiries: [],
      selectedEnquiryId: null,
      alertModalTitle: '',
      alertModalContent: ''
    };
  },
  created() {
    this.fetchEnquiries();
  },
  methods: {
    deleteEnquiry(enquiryId) {
      this.selectedEnquiryId = enquiryId;
      this.$refs.deleteConfirmModal.show();
    },
    fetchEnquiries() {
      EnquiryService.getAll().then((response) => {
        this.enquiries = response.data;
      });
    },
    onDeleteConfirm() {
      EnquiryService.delete(this.selectedEnquiryId).then(() => {
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully deleted enquiry';
        this.$refs.alertModal.show();
        this.fetchEnquiries();
      }).catch((error) => {
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    onDeleteModalHide() {
      this.selectedEnquiryId = null;
    }
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
