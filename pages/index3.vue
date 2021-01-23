<template>
  <v-app>
    <div style="height: 100vh; background-color: rgba(0, 0, 0, 1)">
      <v-row style="height: 100%" no-gutters>
        <v-col xs="12" sm="12" md="8" lg="8" xl="8" class="mainDiv">
          <transition appear>
            <div class="main-title">
              <h2 style="color: rgba(0, 0, 0, 0.6)">Hi, I'm</h2>
              <HeaderText></HeaderText>
            </div> </transition
        ></v-col>

        <v-col xs="0" sm="0" md="0" lg="4" xl="4" class="portraitDiv"
          ><div class="portrait">
            <img
              src="~assets/Untitled-6.png"
              alt=""
              class="portrait hidden-sm-and-down"
            /></div
        ></v-col>
      </v-row>
    </div>
    <div class="parallax-image">
      <div id="UTM" class="impact">
        <ImpactText
          title1="I graduated from UTM in 2019"
          subtitle1="with a mechanical engineering degree"
          height="1080"
          :src="require('@/assets/graduation.jpg')"
          class="impact"
        ></ImpactText>
      </div>
      <div id="#AIESEC" class="impact">
        <ImpactText
          title1="Founded Owlnext Education"
          subtitle1="To teach young kids how to code through an exciting VR experience"
          :src="require('@/assets/Untitled-3.jpg')"
          height="1000"
        ></ImpactText>
      </div>

      <div id="#nescafe" class="impact">
        <ImpactText
          title1="Founded Nescafe UTM "
          subtitle1="In the pursuit of understanding entrepreneurship"
          subtitle2="and for my addiction to coffee"
          height="1000"
          :src="require('@/assets/DIY_89572.JPG')"
          class="impact"
        ></ImpactText>
      </div>
      <!-- <div id="#pwc">
      <ImpactText
        title1="PwC Trust Builder 2019"
        subtitle1="Best Speaker Award"
        :src="require('@/assets/DSC013072.JPG')"
        height="1000"
        class="impact"
      ></ImpactText>
    </div> -->
      <!-- <div id="#USA" class="impact">
        <ImpactText
          title1="Worked in New Jersey"
          subtitle1="As a culinary staff for one summer"
          subtitle2="tossing pizzas and making philly cheesesteaks"
          height="1000"
          :src="
            require('@/assets/00100sPORTRAIT_00100_BURST20190916080315500_COVER-01.jpeg')
          "
          class="impact"
        ></ImpactText>
      </div> -->
      <div id="#tunnel" class="impact">
        <ImpactText
          title1="Tunnel Engineer"
          subtitle1="Building Malaysia's MRT SSP Line"
          height="1000"
          :src="require('@/assets/IMG_20200926_175017-012.jpg')"
          class="impact"
        ></ImpactText>
      </div>
      <div id="#dev" class="impact">
        <ImpactText
          title1="Now, a Full-Stack Dev"
          subtitle1="Working to digitalize the Tunneling Processes for Gamuda"
          :src="require('@/assets/pexels-lukas-574071.jpg')"
          height="1000"
          class="impact"
        ></ImpactText>
      </div>
    </div>
  </v-app>
</template>

<script>
import VueScrollTo from "vue-scrollto";
export default {
  layout: "layout2",
  components: {
    Headertext: () => import("~/components/HeaderText.vue"),
    ImpactText: () => import("~/components/ImpactText.vue"),
  },
};
</script>

<style lang="scss">
.mainDiv {
  position: relative;
  display: flex;
  background-color: black;
}
.main-title {
  position: absolute;
  align-self: center;
  left: 200px;
}
.portraitDiv {
  position: relative;
  display: flex;
}
.portrait {
  align-self: flex-end;
  max-width: 100%;
  height: auto;
  position: relative;
  top: 4px;
}
.col {
  padding: 0px;
  margin: 0px;
}
.parallax-image {
  scroll-snap-type: y proximity;
}
.impact {
  scroll-snap-align: start;
}
</style>