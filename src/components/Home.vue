<template>
  <b-container>
    <b-row>
      <b-col lg="8" md="12">
        <h3>News</h3>
        <b-row>
          <b-col v-for="newsItem in newsItems" :key="newsItem.id" sm="12" md="6">
            <b-card
              style="max-width: 40rem;"
              class="mb-2"
        >
        <b-card-title>{{newsItem.title}}</b-card-title>
        <b-card-sub-title class="mb-2">{{newsItem.when | short-date}}
           <b-badge
            variant="success"
             v-if="newsItem.new">
             New
             </b-badge>
           </b-card-sub-title>
          <b-card-text>
            <p>{{newsItem.text}}</p>
          </b-card-text>
        </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4" md="12">
        <h3>Join the Club</h3>
        <p>Curling's a very social game, great fun,
         and we're always looking for new members.
         If you've ever thought about having a go,
         or have played before and are interested
         in joining a rink, get in contact with us.</p>
        <h3>About PGCC</h3>
        <p>Port Glasgow Curling Club was formed in 1827
           and admitted to the Royal Caledonian Curling Club in 1840.</p>
        <p>Part of the Renfrewshire (12th) province of Area 3,
           the club plays the majority of games at the Waterfront Leisure Complex
            curling rink in Greenock.</p>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Port_Glasgow_Curling_Club"
            target="_blank">Wikipedia</a>
          </p>
        <p>
          <a
            href="http://rcccmembers.org/index.php?CLUB_NO=472&CATEGORY=1-Membership&SC=Club&FUNCTIONS=2"
            target="_blank">RCCC Contact Info</a>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import NewsService from '@/services/news.service';

export default {
  name: 'Home',
  data() {
    return {
      newsItems: []
    };
  },
  created() {
    NewsService.getAllVisible().then((response) => {
      this.newsItems = response.data;
      // Set property for badge visibility
      this.newsItems.forEach((o) => {
        o.new = (new Date(o.when).getTime()) > (Date.now() - (1000 * 60 * 60 * 24 * 7)); // eslint-disable-line no-param-reassign
      });
    });
  }
};
</script>
<style scoped>
p, h4, h6 {
  text-align: justify;
}

</style>
