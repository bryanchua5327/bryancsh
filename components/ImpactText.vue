<template>
  <div>
    <div v-if="imageOnly">
      <v-responsive aspect-ratio="16/9" class="image-container">
        <v-img :src="src" max-width="100%" height="auto"> </v-img>
        <div class="titleContent glassCard">
          <div
            style="width: 70%"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h1 class="title1">{{ title1 }}</h1>
            <h2 class="subtitle1 mb-6">{{ subtitle1 }}</h2>
            <p class="subtitle2" v-if="subtitle2">{{ subtitle2 }}</p>
            <p class="subtitle2" v-if="paragraph1">{{ paragraph1 }}</p>
          </div>
        </div>
      </v-responsive>
    </div>
    <v-parallax
      :src="src"
      style="opacity: 1"
      class="pa-0"
      :height="height"
      width="auto"
      v-else
    >
      <div class="titleContent glassCard" data-aos="fade1" data-aos-delay="0">
        <div
          style="width: 70%"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 class="title1">{{ title1 }}</h1>
          <h2 class="subtitle1 mb-6">{{ subtitle1 }}</h2>
          <p class="subtitle2" v-if="subtitle2">{{ subtitle2 }}</p>
          <p class="subtitle2" v-if="paragraph1">{{ paragraph1 }}</p>
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  props: [
    "title1",
    "subtitle1",
    "subtitle2",
    "src",
    "height",
    "imageOnly",
    "paragraph1 ",
  ],
};
</script>

<style lang="scss">
$opacity: 0.7;
.image-container {
  background-color: black;
  opacity: 1;
}

.title1 {
  font-size: 60px;
  // text-shadow: 0px 3px 0px #b2a98f, 0px 14px 10px rgba(0, 0, 0, 0.15),
  //   0px 24px 2px rgba(0, 0, 0, 0.1), 0px 34px 30px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
.subtitle1 {
  font-size: 30px;
  letter-spacing: 10px;
  text-align: justify;
}

.subtitle2 {
  font-size: 20px;
  opacity: 1;
  letter-spacing: 5px;
  text-align: justify;
}
.titleContent {
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);

  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.v-parallax__content {
  padding: 0;
}
// .v-parallax__image-container > img {
//   height: 100%;
// }
</style>