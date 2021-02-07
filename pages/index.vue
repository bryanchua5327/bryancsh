<template>
  <div class="mainDiv" :class="$vuetify.breakpoint.mdAndDown ? 'pa-5 ' : ''">
    <div
      class="pa-5"
      data-aos="zoom-right"
      data-aos-duration="500"
      v-if="!$vuetify.breakpoint.mdAndDown"
    >
      <v-img
        aspect-ratio="1"
        class="cutterheadImg"
        src="cutterhead-min2.png"
      ></v-img>
    </div>
    <div
      id="email"
      class="d-flex align-center email"
      v-if="!$vuetify.breakpoint.mdAndDown"
    >
      <a href="mailto:bryanchua5327@gmail.com"
        ><h5>bryanchua5327@gmail.com</h5></a
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="1"
        viewBox="0 0 800 1"
      >
        <line
          id="Line_14"
          data-name="Line 14"
          x2="800"
          transform="translate(0 0.5)"
          fill="none"
          stroke="#707070"
          stroke-width="1"
          class="email-line"
        />
      </svg>
    </div>

    <div id="home">
      <v-row
        justify="center"
        :class="$vuetify.breakpoint.mdAndDown ? 'text-center ' : ''"
      >
        <v-col md="10" sm="10" xs="10" xl="6" lg="10" class="landing">
          <div>
            <h3 class="mt-4 main-color" data-aos="fade-up">Hey there, I'm</h3>
            <h1 data-aos="fade-up" data-aos-delay="400">Bryan Chua.</h1>
          </div>

          <Headertext
            class="mb-4 d-none d-xl-flex d-lg-flex"
            data-aos="zoom-left"
            data-aos-delay="600"
          ></Headertext>

          <div
            class="d-flex justify-space-between align-center"
            :class="$vuetify.breakpoint.mdAndDown ? 'mx-auto' : ''"
            style="
              min-width: 300px;
              max-width: 400px;
              margin: 10px 0px 20px 0px;
              padding: 0px 00px;
            "
          >
            <v-btn
              icon
              href="https://www.linkedin.com/in/bryan-chua-423788ab/"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="800"
              ><v-icon x-large color="white"> mdi-linkedin</v-icon></v-btn
            >
            <v-btn
              icon
              href="https://github.com/bryanchua5327"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="1000"
              ><v-icon x-large color="white">mdi-github</v-icon></v-btn
            >
            <v-btn
              icon
              href="https://www.instagram.com/bryanchua777/"
              target="_blank"
              x-large
              data-aos="fade-up"
              data-aos-delay="1200"
              ><v-icon x-large color="white">mdi-instagram</v-icon></v-btn
            >
          </div>

          <h4
            style="margin-bottom: 50px"
            :style="
              $vuetify.breakpoint.mdAndDown
                ? 'width:100%; padding:10px'
                : 'width:80%'
            "
            data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="1400"
          >
            I'm a software engineer currently based in Malaysia, working in a
            Reasearch and Development team responsible for digitalizing
            tunneling works in Gamuda.
          </h4>
          <div data-aos="fade-up" data-aos-offset="-300" data-aos-delay="1600">
            <a href="#about"
              ><button class="button main-color h3">
                <h3 class="main-color">Find out more</h3>
              </button></a
            >
          </div>
        </v-col>
      </v-row>
    </div>

    <div
      id="about"
      style="min-height: 100%; height: 100vh"
      data-aos="fade"
      class="d-flex flex-column justify-center align-center"
    >
      <v-card color="#182c50" width="100vw" style="z-index: -100" class="pa-2">
        <v-row justify="center">
          <v-col lg="5" xl="5" v-if="!$vuetify.breakpoint.mdAndDown">
            <v-img
              aspect-ratio="1"
              width="80%"
              class="image-blur image-project tech justify-self-center"
              src="IMG_20200926_175017-01.jpg"
              style="
                transform: scale(1.08);
                box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 20px;
              "
            ></v-img>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="5" xl="5" align-self="center">
            <div>
              <div
                class="d-flex heading"
                :class="
                  $vuetify.breakpoint.mdAndDown ? 'justify-center  ' : ' '
                "
              >
                <h2 class="mx-10">About me</h2>
              </div>
              <div
                class="mt-5"
                :class="
                  $vuetify.breakpoint.mdAndDown ? 'text-center ' : 'mx-10 '
                "
              >
                <h4
                  :style="
                    $vuetify.breakpoint.mdAndDown
                      ? 'text-align-last:center '
                      : ' '
                  "
                >
                  Hello, my name is Bryan Chua and I'm a self-taught software
                  engineer based in
                  <span class="main-color">KL, Malaysia</span>. I'm a proud
                  graduate of the
                  <span class="main-color"
                    >University of Technology Malaysia</span
                  >
                  of class 2019. <br />
                  <br />

                  I started my career as a
                  <span class="main-color">tunnel engineer</span>, and had an
                  opportunity to work in a Variable Density Tunnel Boring
                  Machine, tunneling through the Karstic Limestone ground profiles of Kuala Lumpur.

                  <br />
                  <br />

                  After a year in the tunnels, I wanted to help improve the
                  tunneling processes and subsequently joined the<span
                    class="main-color"
                  >
                    R&D team</span
                  >
                  and work on projects focused on
                  <span class="main-color"
                    >digitalizing tunneling works in Malaysia.</span
                  >
                  <br />
                  <br />

                  The projects my team and I embark on has exposed me to the
                  wonderful and exciting world
                  <span class="main-color"
                    >software engineering and web development</span
                  >, coding to meet industry standards while utilizing new age web
                  technologies such as
                  <span class="main-color">Vue.JS, GCP, FastAPI</span> etc.
                  <br />
                  <br />
                </h4>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>

      <div class="my-10 justify-center">
        <v-btn icon href="#work"
          ><v-icon color="#707070" x-large>mdi-chevron-down</v-icon></v-btn
        >
      </div>
    </div>
    <div>
      <div
        id="work"
        class="d-flex flex-column justify-center align-center mt-10"
        style="min-height: 100%; height: 100vh; position: relative"
      >
        <div
          :style="$vuetify.breakpoint.mdAndDown ? 'width: 100%' : 'width: 50%'"
          data-aos="fade"
          :class="$vuetify.breakpoint.mdAndDown ? 'text-center' : ''"
        >
          <v-card color="work-card" tile flat height="700px">
            <div
              class="d-flex align-center mb-10"
              :class="$vuetify.breakpoint.mdAndDown ? 'justify-center' : ''"
            >
              <div class="d-flex align-center">
                <v-icon id="diamond" color="#00eaf2">mdi-cards-diamond</v-icon>
                <h2 class="mx-10">Work Experiences</h2>
              </div>
            </div>

            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="#00eaf2 "
              :vertical="$vuetify.breakpoint.mdAndDown ? false : true"
              dark
              :grow="$vuetify.breakpoint.mdAndDown ? true : false"
              :show-arrows="$vuetify.breakpoint.mdAndDown ? true : true"
            >
              <v-tab v-for="(item, n) in items" :key="n">
                <h4 class="main-color" style="text-transform: capitalize">
                  {{ item.company }}
                </h4>
              </v-tab>

              <v-tabs-items
                v-model="tab"
                :class="$vuetify.breakpoint.mdAndDown ? 'my-10 ' : 'ml-4'"
                style="background: transparent !important"
              >
                <v-tab-item v-for="(item, n) in items" :key="n">
                  <v-card
                    color="work-card"
                    flat
                    tile
                    class="py-2"
                    min-width="300px"
                    max-width="900px"
                  >
                    <h3 class="grey-light mb-10">{{ item.title }}</h3>
                    <h3 class="grey-light mb-10">{{ item.duration }}</h3>
                    <h4
                      class="mb-4"
                      v-for="(description, k) in item.descriptions"
                      :key="k"
                    >
                      {{ description }}
                    </h4>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-card>
        </div>
        <div>
          <v-btn icon href="#project"
            ><v-icon color="#707070" x-large>mdi-chevron-down</v-icon></v-btn
          >
        </div>
      </div>
    </div>
    <div
      id="project"
      class="d-flex justify-center align-center py-10 px-0 mt-10"
    >
      <div>
        <v-card color="work-card" tile flat class="">
          <div class="d-flex align-center justify-center mb-10">
            <div class="d-flex align-center">
              <v-icon id="diamond" color="#00eaf2">mdi-cards-diamond</v-icon>
              <h2
                class="ma-10"
                :class="$vuetify.breakpoint.mdAndDown ? 'text-center' : ''"
              >
                Notable Projects
              </h2>
            </div>
          </div>
          <div v-for="(item, n) in projects" :key="n">
            <Projectcard
              :pos="n % 2 == 0 ? 'right' : 'left'"
              :item="projects[n]"
            ></Projectcard>
            <div style="height: 100px"></div>
          </div>
        </v-card>
      </div>
    </div>
    <div style="width: 100%; background-color: #cbcbcb" class="mt-10">
      <div class="tech-container" style="width: 100%; padding: 20px">
        <div class="image-wrapper">
          <v-img
            width="40px"
            class="tech"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="-300px"
            src="tech/vue.svg"
          ></v-img>
        </div>
        <div class="image-wrapper">
          <v-img
            width="40px"
            class="tech"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="-300px"
            src="tech/html.png"
          ></v-img>
        </div>
        <div class="image-wrapper">
          <v-img
            width="40px"
            class="tech"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="-300px"
            src="tech/css-3.png"
          ></v-img>
        </div>
        <div class="image-wrapper">
          <v-img
            width="150px"
            class="tech"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="-400px"
            src="tech/fastapi.png"
          ></v-img>
        </div>
        <div class="image-wrapper">
          <v-img
            width="150px"
            class="tech"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="-500px"
            src="tech/plotly.png"
          ></v-img>
        </div>
        <div class="image-wrapper">
          <v-img
            width="100px"
            class="tech"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="-600px"
            src="tech/keras.png"
          ></v-img>
        </div>
        <div class="image-wrapper">
          <v-img
            width="100px"
            class="tech"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="-700px"
            src="tech/nodejs.png"
          ></v-img>
        </div>
      </div>
    </div>
    <div style="height: 30vh; margin: 30px">
      <div class="d-none d-lg-flex d-flex justify-center">
        <v-btn icon href="#contact"
          ><v-icon color="#707070" x-large>mdi-chevron-down</v-icon></v-btn
        >
      </div>
    </div>
    <!-- <div id="other-project">
      <h2 class="mb-10 text-center">Other projects</h2>

      <div class="other-project-container">
        <div class="other-project-item">
          <h4 class="main-color mt-4">Project</h4>
          <h5 class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </h5>
        </div>
        <div class="other-project-item"></div>
        <div class="other-project-item"></div>
        <div class="other-project-item"></div>
        <div class="other-project-item"></div>
        <div class="other-project-item"></div>
      </div>
    </div> -->

    <div id="contact" class="d-flex justify-center align-center">
      <div class="ma-auto text-center pa-4">
        <h3 class="main-color mb-4">Feel free to</h3>
        <h1 class="mb-4">Drop me a DM</h1>
        <h3 style="margin-bottom: 50px">I look forward to hearing from you</h3>

        <a href="mailto:bryanchua5327@gmail.com" target="_blank"
          ><button class="button main-color">
            <h3 class="main-color">Email me</h3>
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Projectcard from "~/components/Projectcard.vue";
import Headertext from "~/components/Headertext.vue";
export default {
  layout: "layout3",
  components: {
    Projectcard,
    Headertext,
  },

  data() {
    return {
      isLoading: true,
      tab: null,
      items: [
        {
          company: "Gamuda ",
          title: "Software Engineer (R&D)",
          duration: " Nov 2020 - Present",
          descriptions: [
            "Joined the Research and Development Team of Gamuda",
            "Created the Plant Inventory Management Systems - PIMS website using Python, Dash and Firebase",
            "Currently working on the Tunnel-Insight website using Vue.js, FastAPI and GCP",
            "Tunnel-Insight is poised provide more visual and comprehensive data, analysis on mining activies and enhanced reporting capabilities ",
          ],
        },
        {
          company: "Gamuda ",
          title: "Tunnel Engineer - KVMRT Line2 SSP Line",
          duration: " Nov 2019 - Nov 2020",
          descriptions: [
            "Hired by Gamuda as a Tunnel Engineer for the Malaysian KVMRT Line2 SSP Project",
            "Ensured the timely delivery of the MRT Tunnel from TRX - Conlay - Ampang Park station",
            "Awarded the Best Quality Tunnel Award in 2019",
          ],
        },

        {
          company: "Gamuda",
          title: "Design & Technical intern",
          duration: " June 2018 - Sept 2019",
          descriptions: [
            "Hired by Gamuda as a technical Intern for the Mechanical& Electrical Department",
            "Reviewed shop drawings pertaining Cold Water, Fire Fighting ,Sanitary and HVAC systems for station buildings in SSP Line 2",
          ],
        },

        {
          company: "Owlnext",
          title: "Co-Founder",
          duration: "Apr 2018-Dec 2018",
          descriptions: [
            "Started an initiative to teach young kids to code through block programming.",
            "We crafted interactive courses that allow kids to unleash their creativity by creating their own world using 3D shapes and apply physics to objects.",
            "The final product is a VR world in which kids can view and play with.",
          ],
        },
      ],
      projects: [
        {
          title: "Tunnel-Insight",
          description:
            " Creating the Tunnel-Insight website using Vue.js, FastAPI and GCP. Tunnel-Insight is poised provide more visual and comprehensive data, analysis on mining activies and enhanced reporting capabilities.",
          techs: ["Python", "Keras", "Matplotlib", "SUMO"],
          src: "tunnel-insight.jpg",
        },
        {
          title: "Personal Portfolio",
          description:
            "First personal portoflio created to test my skills in general web design in Adobe XD, responsive web design and Nuxt.js.",
          techs: ["Nuxt.js", "Vue.js", "Vuetify", "Adobe XD"],
          src: "Personal Site.jpg",
        },
        {
          title: "Deep Learning Traffic Lights",
          description:
            "Created a simulated traffic light junction controlled by a deep reinforcement learning agent to reduce waiting time at junctions. The agent is capable of controlling the duration of the signals dynamically based on traffic heaviness levels.",
          techs: ["Python", "Keras", "Matplotlib", "SUMO"],
          src: "FYP.jpg",
        },
        {
          title: "Owlnext",
          description:
            "Co-founded a startup aimed to teach young kids aged 9-15 the fundamentals of code through block programming and then visualizing their creations in VR.",
          techs: ["VR", "Block Programming"],
          src: "Owlnext.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.mainDiv {
  background-color: #000f2a;
}
.other-project-container {
  display: grid;
  column-gap: 20px;
  margin: auto;
  row-gap: 20px;
  width: 50%;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}
.other-project-item {
  height: 300px;
  background-color: #182c50;
  padding: 10px 30px;
}
#other-project {
  height: 100vh;
}
.tech-container {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
  grid-template-rows: repeat(auto-fit, 100px);

  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  div {
    align-self: center;
    justify-self: center;
    display: grid;
  }
}

.image-wrapper {
  height: 70px;
}
</style>