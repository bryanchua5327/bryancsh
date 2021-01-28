<template>
  <v-app>
    <v-main fluid class="pa-0 ma-0">
      <v-container fluid color="#000f2a">
        <div
          style="height: 100vh; background-color: #000f2a"
          class="d-flex flex-column justify-center align-center"
        >
          <h1>{{ pageNotFound }}</h1>
          <h2 class="mb-10">{{ otherError }}</h2>
          <a href="/"><button class="button main-color">Go Home</button></a>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Page Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
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
  letter-spacing: 0.291em;
}
h3 {
  font-family: "Open Sans";
  font-size: 20px;
  color: #707070;
  letter-spacing: 0.291em;
}
.background-color {
  color: #000f2a;
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
.main-color {
  color: #00eaf2;
}
</style>
