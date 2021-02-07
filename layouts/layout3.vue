<template>
  <v-app>
    <v-main fluid class="pa-0 ma-0">
      <v-container fluid class="background-color">
        <Appheader class="appheader"></Appheader>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
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
    Appheader: () => import("~/components/Appheader.vue"),
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>


<style lang="scss">
$grey: #cbcbcb;
$grey-darken: #cbcbcb;

html {
  scroll-behavior: smooth;
}

h1 {
  font-family: "Open Sans";
  font-weight: 800px;
  font-size: 70px;
  color: #cbcbcb;
  letter-spacing: 0.1em;
}
h2 {
  font-family: "Open Sans";
  font-weight: Bold;
  font-size: 30px;
  color: #cbcbcb;
  letter-spacing: 0.1em;
}
h3 {
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #cbcbcb;

  letter-spacing: 0.3em;
}

h4 {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  color: #707070;
  text-align: justify;

  letter-spacing: 0.2em;
}
h5 {
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #707070;
  text-align: justify;

  letter-spacing: 0.15em;
}
p {
  font-family: "Lato", sans-serif;

  font-size: 20px;
  color: #707070;
  letter-spacing: 0.291em;
}

.button {
  background-color: transparent;
  padding: 10px 30px;
  border: 2px solid #00eaf2; /* Green */
  border-radius: 20px 0px 20px 0px;
  transition: all 1s;
}
.button:hover {
  border: 2px solid white;
  color: white;
  border-radius: 20px 0px 20px 0px;
}

.grey {
  color: #707070;
}
.grey-light {
  color: #cbcbcb;
}
.main-color {
  color: #00eaf2;
}
.background-color {
  color: #000f2a;
}
.work-card {
  background-color: #000f2a !important;
}
.word-card--text {
  background-color: #00eaf2 !important;
}

.background-color-lighter {
  color: #182c50;
  background-color: #182c50;
}

.container {
  padding: 0px;
}
a {
  font-family: "Open Sans";
  font-size: 16px;
  color: #cbcbcb;
  letter-spacing: 0.291em;
  text-decoration: none;
}
a:link {
  color: white;
}
a:hover {
  color: white;
}
.glassCard {
  background: transparent;

  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 20px 0px 20px 0px;
  transition: all ease 0.5s;
}
.glassCard:hover {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.landing {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.lines {
  position: absolute;
  left: 1200px;
}
.image-blur {
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
  filter: blur(3px);
  transition: filter 1s;
}
.image-blur:hover {
  filter: blur(0px);
}
.tech {
  filter: grayscale(100%);
  transition: all ease 1s;
}
.tech:hover {
  filter: grayscale(0%);
  transform: scale(1.02);
}

.project-card:hover {
  transition: all ease 0.5s;
  .image-project {
    filter: grayscale(0%);
    transform: scale(1.02);
  }
  .glassCard {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}

.email {
  font-size: 0.8em;
  transform-origin: center;

  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);

  /* Firefox */
  -moz-transform: rotate(90deg);

  /* IE */
  -ms-transform: rotate(90deg);

  /* Opera */
  -o-transform: rotate(90deg);
  position: fixed;
  top: 1000px;
  right: -470px;
  z-index: 100;
}

.email:hover {
  h5 {
    color: #00eaf2;
  }
  svg > line {
    stroke: #00eaf2;
  }
}

.image-project {
  filter: grayscale(100%);
  transition: all 0.2s ease-in-out;
  border-radius: 0px 20px 0px 20px;
}
.image-project.left {
  border-radius: 20px 0px 20px 0px;
}
.image-project:hover {
  filter: grayscale(0%);
  transform: scale(1.02);
}

#next {
  position: absolute;
  bottom: 20px;
  right: 50%;
  left: 50%;
  z-index: 1000;
}

#home {
  z-index: 1;
}
#contact {
  height: 100vh;
}
.cutterheadImg {
  opacity: 0.2;
  position: absolute;
  left: -600px;
  -webkit-animation: spin 150s infinite;
  -moz-animation: spin 150s infinite;
  animation: spin 150s infinite;
  transition: all 0.2s ease-in-out;
}
.cutterheadImg:hover {
  opacity: 0.7;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
/* fonts */

/* Animation */
[aos="fade1"] {
  opacity: 0;
  transition-property: opacity;
}

[aos="fade1"].aos-animate {
  opacity: 1;
}

@media screen and (min-width: 0px) and (max-width: 960px) {
  #diamond {
    display: none;
  } /* show it on small screens */

  .heading {
    display: flex;
    justify-items: center;
  }
  h1 {
    font-family: "Open Sans";
    font-weight: 800px;
    font-size: 40px;
    color: #cbcbcb;
    letter-spacing: 0.05em;
  }
  h2 {
    font-family: "Open Sans";
    font-weight: Bold;
    font-size: 25px;
    color: #cbcbcb;
    letter-spacing: 0.05em;
  }
  h3 {
    font-family: "Open Sans";
    font-size: 16px;
    color: #707070;
    letter-spacing: 0.291em;
  }

  h4 {
    font-family: "Open Sans";
    font-size: 14px;
    color: #707070;
    letter-spacing: 0.2em;
  }
  h5 {
    font-family: "Open Sans";
    font-weight: lighter;
    font-size: 12px;
    color: #707070;
    letter-spacing: 0.15em;
  }
}
</style>