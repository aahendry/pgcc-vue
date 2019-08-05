<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>News Administration</h3>
      </b-col>
    </b-row>
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
              <tr
                v-for="newsItem in newsItems"
                :key="newsItem.id">
                <td>{{ newsItem.when }}</td>
                <td>{{ newsItem.title }}</td>
                <td>{{ newsItem.text }}</td>
                <td>{{ newsItem.isVisible }}</td>
                <td>
                  <b-button variant="success">Update</b-button>
                </td>
                <td>
                  <b-button variant="danger">Delete</b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NewsService from '@/services/news.service';

export default {
  name: 'Admin News',
  data() {
    return {
      newsItems: []
    };
  },
  created() {
    NewsService.getAll().then((response) => {
      this.newsItems = response.data;
    });
  }
};
</script>
<style scoped>
h3 {
  padding-bottom: 20px;
}

</style>
