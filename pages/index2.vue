<template>
  <v-app>
    <div style="height: 100vh">
      <v-row
        style="height: 100%"
        no-gutters
        data-aos="fade-up"
        data-aos-offset="0"
      >
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

    <div class="parallax-image containerDiv">
      <div id="UTM" class="impact childDiv">
        <ImpactText
          title1="I've always loved tinkering"
          subtitle1="even from a young young age"
          subtitle2="`As a teen, I would normally tune to 'Mythbusters' and 'How Stuff Works' because I was reeled in by their adventurous experiments and descriptive explanation of the science behind simple daily technology. These people on television are my childhood heroes, they make me think out of the box, they exemplify the kind of passion I have for science. 'The difference between science and fooling around is writing it down.' Adam Savage's phrase inspired me to start putting ideas into reality, so I began to craft bows and arrows, wind turbines, hot air balloons. As I experimented with all my small inventions, I realized that anything can be turned into something extraordinary through the application of basic physics and this is exactly how I fell in love with engineering.`"
          height="1080"
          :src="require('@/assets/pexels-miguel-á-padriñán-3785927.jpg')"
          class="impact"
        ></ImpactText>
      </div>

      <div style="height: 300px" class="linearFade"></div>

      <!-- <div
        class="grid-container d-flex justify-center"
        style="height: 300px; background-color: red"
      ></div>
      <div
        class="grid-container d-flex justify-center"
        style="height: 500px; background-color: #000080"
      >
        <div class="grid-item"><HoverCard></HoverCard></div>
        <div class="grid-item"><HoverCard></HoverCard></div>
        <div class="grid-item"><HoverCard></HoverCard></div>
      </div> -->

      <!-- <div id="#AIESEC" class="impact">
        <ImpactText
          title1="Founded Owlnext Education"
          subtitle1="To teach young kids how to code through an exciting VR experience"
          :src="require('@/assets/Untitled-3.jpg')"
          height="1000"
        ></ImpactText>
      </div> -->
      <!-- 
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
      <div id="#pwc">
      <ImpactText
        title1="PwC Trust Builder 2019"
        subtitle1="Best Speaker Award"
        :src="require('@/assets/DSC013072.JPG')"
        height="1000"
        class="impact"
      ></ImpactText>
    </div>
      <div id="#USA" class="impact">
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
      </div>
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
      </div> -->
    </div>
  </v-app>
</template>

<script>
import VueScrollTo from "vue-scrollto";
export default {
  layout: "layout2",
  components: {
    Headertext: () => import("~/components/HeaderText.vue"),
    HoverCard: () => import("~/components/hoverCard.vue"),
    ImpactText: () => import("~/components/ImpactText.vue"),
  },
};
</script>

<style lang="scss">
.mainDiv {
  position: relative;
  display: flex;
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
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  top: 70%;
  filter: drop-shadow(0 0 0.75rem);
}
.linearFade {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.958420868347339) 56%,
    rgba(0, 0, 0, 0.5998774509803921) 80%,
    rgba(0, 0, 0, 0.31976540616246496) 94%,
    rgba(0, 7, 13, 0) 100%
  );

  margin-top: -100px;
}
</style>