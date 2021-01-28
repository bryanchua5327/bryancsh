<template>
  <v-app-bar
    fixed
    color="rgba(0,15,42,0.5)"
    dark
    hide-on-scroll
    flat
    prominent
    class="pa-auto glassCard"
    elevation="0"
  >
    <v-btn
      href="#home"
      :style="
        !$vuetify.breakpoint.mdAndDown
          ? 'margin-left: 100px; margin-top: 30px'
          : 'margin-left: 10px; margin-top: 30px'
      "
      color="transparent"
      flat
      tile
      elevation="0"
    >
      <object
        width="32px"
        type="image/svg+xml"
        id="svg-object"
        data="Blogo3.svg"
      ></object>
    </v-btn>

    <v-spacer></v-spacer>
    <div class="header1" v-if="!$vuetify.breakpoint.mdAndDown">
      <ul class="list1" data-aos="fade-down" data-aos-offset="0">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="Bryan_Chua Seck_How_CV.pdf" target="_blank"
            ><button class="button main-color">Resume</button></a
          >
        </li>
      </ul>
    </div>
    <a
      href="Bryan_Chua Seck_How_CV.pdf"
      target="_blank"
      v-if="$vuetify.breakpoint.mdAndDown"
      style="padding: 14px 16px; align-self: center"
      ><button class="button main-color">Resume</button></a
    >
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
.header1 > .list1 {
  list-style-type: none;
  margin: 20px;
  padding: 0px;
  overflow: hidden;

  display: flex;
  justify-items: space-between;
}

.header1 > .list1 > li {
  float: right;
  color: white;
  justify-self: center;
  align-self: center;
}

.header1 > .list1 > li > a {
  display: block;
  /* color: rgba(0, 0, 0, 0.582); */
  color: grey;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
.header1 > .list1 > li > a:hover {
  color: white;
}
</style>