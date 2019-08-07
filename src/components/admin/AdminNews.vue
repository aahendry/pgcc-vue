<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>News Administration</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <b-button
          variant="info"
          :to="{ name: 'AdminNewsCreate' }">Create news item</b-button>
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
                <th>Title</th>
                <th>Text</th>
                <th>Visible</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <admin-news-row
              v-for="newsItem in newsItems"
              :key="newsItem.id"
              :newsItem="newsItem"
              @update="updateNewsItem"
              @delete="deleteNewsItem"/>
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
      <p class="my-4">Are you sure you want to delete this news item?</p>
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
import NewsService from '@/services/news.service';
import AdminNewsRow from '@/components/admin/AdminNewsRow';

export default {
  name: 'Admin News',
  components: {
    'admin-news-row': AdminNewsRow
  },
  data() {
    return {
      newsItems: [],
      selectedNewsItemId: null,
      alertModalTitle: '',
      alertModalContent: ''
    };
  },
  created() {
    this.fetchNewsItems();
  },
  methods: {
    updateNewsItem(newsItemId) {
      this.$router.push({ name: 'AdminNewsUpdate', params: { id: newsItemId } });
    },
    deleteNewsItem(newsItemId) {
      this.selectedNewsItemId = newsItemId;
      this.$refs.deleteConfirmModal.show();
    },
    fetchNewsItems() {
      NewsService.getAll().then((response) => {
        this.newsItems = response.data;
      });
    },
    onDeleteConfirm() {
      NewsService.delete(this.selectedNewsItemId).then(() => {
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully deleted news item';
        this.$refs.alertModal.show();
        this.fetchNewsItems();
      }).catch((error) => {
        this.alertModalTitle = 'Error';
        this.alertModalContent = error.response.data;
        this.$refs.alertModal.show();
      });
    },
    onDeleteModalHide() {
      this.selectedNewsItemId = null;
    }
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
