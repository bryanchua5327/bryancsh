<template>
  <div id="#home">
    <div id="#main" class="mainDiv">
      <div class="main-title">
        <h2 style="color: rgba(0, 0, 0, 0.6)">Hi, I'm</h2>
        <HeaderText></HeaderText>
        <v-btn icon x-large> <v-icon>mdi-chevron-down</v-icon></v-btn>
      </div>
      <img src="~assets/Untitled-6.png" alt="" class="portrait" />
    </div>

    <div id="#first"><ImpactText class="impact"></ImpactText></div>

    <ImpactText class="impact"></ImpactText>
    <ImpactText class="impact"></ImpactText>
  </div>
</template>

<script>
export default {
  layout: "layout2",
  components: {
    MainTitle: () => import("~/components/title.vue"),
    ImpactText: () => import("~/components/ImpactText.vue"),
    Headertext: () => import("~/components/HeaderText.vue"),
  },
  methods: {},
};
</script>

<style stylus="lang">
.mainDiv {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
}
.main-title {
  position: absolute;
  align-self: center;
  left: 200px;
}
.main-title > .v-btn {
  position: absolute;
  left: 30%;
}
.mainDiv > img {
  position: absolute;
  left: 70%;
  top: 24.5%;
  max-width: 100%;
  height: auto;
}
</style>