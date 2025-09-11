<template>
<b-container>
    <b-row>
      <b-col>
        <h3>
          Photo Gallery
        </h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="album in albums" :key="album.name">
        <img class="img-thumb" @click="album.toggle = !album.toggle" :src=album.sources[album.thumbUrlIndex] :alt=album.name>
        <p>{{album.name}}</p>
        <FsLightbox
          :toggler="album.toggle"
          :sources="album.sources"
          type="image"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<style>
.img-thumb {
  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px;  /* Rounded border */
  padding: 5px;
  margin: 5px;
  width: 200px; /* Set a small width */
}
.img-thumb:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>
<script>
import FsLightbox from 'fslightbox-vue/v2';

export default {
  name: 'PhotoGallery',
  components: { FsLightbox },
  data() {
    return {
      toggler1: false,
      albums: [
        {
          name: 'AGM 2013',
          toggle: false,
          sources: [
            'https://pgcc.s3.nl-ams.scw.cloud/photos/agm-2013/1.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/agm-2013/2.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/agm-2013/3.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/agm-2013/4.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/agm-2013/5.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/agm-2013/6.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/agm-2013/7.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/agm-2013/8.jpg'
          ],
          thumbUrlIndex: 0
        },
        {
          name: 'Vintage',
          toggle: false,
          sources: [
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/perth.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/bonspeil.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/derby_champs.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/derby_finalists.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/derbywinners2003.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/derbywinners2004.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/grandmatch.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/lapsley_champs.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/lapsley_finalists.jpg',
            'https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/robert8.jpg'
          ],
          thumbUrlIndex: 0
        }
      ]
    };
  }
};
</script>
