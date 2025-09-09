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
      <b-col>
        <img class="img-thumb" @click="toggler1 = !toggler1" src="https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/perth.jpg" alt="Angelfire">
        <p>Vintage</p>
      </b-col>
      <!-- <b-col>
        <img class="img-thumb" @click="toggler2 = !toggler2" src="https://pgcc.s3.nl-ams.scw.cloud/photos/angelfire/perth.jpg" alt="Angelfire">
        <p>Angelfire</p>
      </b-col> -->
    </b-row>

  <div>
    <FsLightbox
      :toggler="toggler1"
      :sources="[
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
      ]"
      type="image"
    />
  </div>
  </b-container>
</template>
<style>
.img-thumb {
  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px;  /* Rounded border */
  padding: 5px; /* Some padding */
  margin: 5px;
  width: 200px; /* Set a small width */
}

/* Add a hover effect (blue shadow) */
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
      toggler1: false
    };
  }
};
</script>
