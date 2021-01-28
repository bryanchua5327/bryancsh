<template>
  <v-main fluid class="pa-0 ma-0">
    <v-container fluid color="blue">
      <AppHeader
        class="appheader"
        data-aos="fade-down"
        data-aos-offset="0"
      ></AppHeader>
      <nuxt />
    </v-container>
  </v-main>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations});
});
export default {
  components: {
    AppHeader: () => import("~/components/AppHeader.vue"),
  },
};
</script>


<style>
html {
  font-family: "Courier New", monospace;
  scroll-behavior: smooth;
}
body {
  overflow: hidden;
}
h1 {
  font-family: "Staatliches", cursive;
  letter-spacing: 30px;
  font-size: 96px;
}
h2 {
  font-family: "Century Gothic", sans-serif;
  font-weight: 100;
  font-size: 50px;
}
p {
  font-family: "Century Gothic", sans-serif;
  font-style: italic;
}

.container {
  padding: 0px;
}
a {
  font-family: "Staatliches";
  letter-spacing: 10px;
  font-size: 1.1em;
}
.appheader {
  z-index: 1;
}
.glassCard {
  background: transparent;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  /* Note: currently only Safari supports backdrop-filter */
  backdrop-filter: blur(29px);
  --webkit-backdrop-filter: blur(29px);
  background-color: rgba(255, 255, 255, 0.568);
  /* (plus shape's fill blended on top as a separate layer with 33% opacity) */
}

[aos="fade1"] {
  opacity: 0;
  transition-property: opacity;
}

[aos="fade1"].aos-animate {
  opacity: 1;
}
</style>