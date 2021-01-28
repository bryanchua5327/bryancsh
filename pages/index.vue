<template>
  <div class="mainDiv">
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
        width="300"
        height="1"
        viewBox="0 0 300 1"
      >
        <line
          id="Line_14"
          data-name="Line 14"
          x2="300"
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
            <h4 class="main-color mt-4">Hey there, I'm</h4>
            <h1 data-aos="fade-up">Bryan Chua.</h1>
          </div>

          <Headertext
            class="mb-4 d-none d-xl-flex d-lg-flex"
            data-aos="zoom-left"
            data-aos-delay="1000"
          ></Headertext>
          <div class="lines d-none d-xl-flex d-lg-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="336"
              height="299"
              viewBox="0 0 336 299"
              data-aos="fade-up-left"
              data-aos-delay="1400"
            >
              <line
                id="Line_2"
                data-name="Line 2"
                y1="299"
                transform="translate(286)"
                fill="none"
                stroke="#707070"
                stroke-width="1"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M0,0H336"
                transform="translate(0 240)"
                fill="none"
                stroke="#707070"
                stroke-width="1"
              />
            </svg>
          </div>

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
              data-aos="fade-down"
              data-aos-delay="600"
              ><v-icon x-large color="white"> mdi-linkedin</v-icon></v-btn
            >
            <v-btn
              icon
              href="https://github.com/bryanchua5327"
              target="_blank"
              data-aos="fade-up"
              data-aos-delay="700"
              ><v-icon x-large color="white">mdi-github</v-icon></v-btn
            >
            <v-btn
              icon
              href="https://www.instagram.com/bryanchua777/"
              target="_blank"
              x-large
              data-aos="fade-up"
              data-aos-delay="800"
              ><v-icon x-large color="white">mdi-instagram</v-icon></v-btn
            >
          </div>

          <h5
            style="width: 60%; margin-bottom: 50px"
            :style="`width: ${$vuetify.breakpoint.mdAndDown ? '100%' : '80%'}`"
            data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="1000"
          >
            I'm a software engineer currently based in Malaysia, working in a
            R&amp;D team responsible for digitalizing tunneling works in Gamuda.
          </h5>
          <a href="#about"
            ><button class="button main-color h3">
              <h3 class="main-color">Find out more</h3>
            </button></a
          >
        </v-col>
      </v-row>
    </div>

    <div
      id="about"
      style="height: 100vh"
      class="d-flex justify-center align-center"
      data-aos="fade"
    >
      <v-row justify="center">
        <v-col
          offset-lg="1"
          offset-xl="1"
          xs="10"
          sm="10"
          md="10"
          lg="5"
          xl="5"
        >
          <div class="ma-auto pa-5">
            <div class="d-flex align-center justify-center mb-10">
              <div class="d-flex align-center heading">
                <v-icon id="diamond" color="#00eaf2">mdi-cards-diamond</v-icon>
                <h2 class="mx-10">About me</h2>
              </div>
              <svg
                class="d-none d-xl-flex d-md-none"
                data-aos="fade-left"
                data-aos-delay="400"
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="1"
                viewBox="0 0 351 1"
              >
                <line
                  id="Line_12"
                  data-name="Line 12"
                  x2="400"
                  transform="translate(0 0.5)"
                  fill="none"
                  stroke="#707070"
                  stroke-width="1"
                />
              </svg>
            </div>
            <div
              :class="$vuetify.breakpoint.mdAndDown ? 'text-center ' : 'ml-16 '"
              class="mt-3"
            >
              <h5>
                Hello, my name is Bryan Chua and I'm a self-taught software
                engineer based in
                <span class="main-color">KL, Malaysia</span>. I graduated from
                the
                <span class="main-color"
                  >University of Technology Malaysia</span
                >
                in 2019. <br />
                <br />

                I started off my career by working as a
                <span class="main-color">tunnel engineer</span>, building
                Malaysia's MRT SSP line for about a year
                <br />
                <br />

                With my experience in tunneling, I got the opportunity to join
                the<span class="main-color"> R&D team</span> and work on
                projects focused on
                <span class="main-color"
                  >digitalizing tunneling works in Malaysia</span
                >
                <br />
                <br />

                It is thanks to this opportunity that I found passion in
                software engineering. Moving forward, I'll continually strive to
                be a better
                <span class="main-color">full-stack developer</span>.
                <br />
                <br />
                <br />
              </h5>
              <h4>Technology I know and love:</h4>
            </div>
          </div>
        </v-col>
        <v-col lg="4" xl="4" align-self="center" class="d-none d-lg-flex">
          <div>
            <v-img
              aspect-ratio="1"
              width="400px"
              class="image-blur"
              src="IMG-20190318-WA0013-01.jpeg"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="12">
          <div style="width: 100%; background-color: #cbcbcb">
            <div class="tech-container" style="width: 100%; height: 100%">
              <div>
                <v-img
                  width="40px"
                  class="tech"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-offset="-300px"
                  src="tech/vue.svg"
                ></v-img>
              </div>
              <div>
                <v-img
                  width="40px"
                  class="tech"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-offset="-300px"
                  src="tech/html.png"
                ></v-img>
              </div>
              <div>
                <v-img
                  width="40px"
                  class="tech"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-offset="-300px"
                  src="tech/css-3.png"
                ></v-img>
              </div>
              <div>
                <v-img
                  width="150px"
                  class="tech"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-offset="-400px"
                  src="tech/fastapi.png"
                ></v-img>
              </div>
              <div>
                <v-img
                  width="150px"
                  class="tech"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-offset="-500px"
                  src="tech/plotly.png"
                ></v-img>
              </div>
              <div>
                <v-img
                  width="100px"
                  class="tech"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-offset="-600px"
                  src="tech/keras.png"
                ></v-img>
              </div>
              <div>
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
        </v-col>
      </v-row>
      <div id="next" class="d-none d-lg-flex">
        <v-btn icon href="#work"
          ><v-icon color="#707070" x-large>mdi-chevron-down</v-icon></v-btn
        >
      </div>
    </div>
    <div style="position: relative; margin-bottom: 300px">
      <div
        id="work"
        class="d-flex justify-center align-center"
        style="height: 100vh"
      >
        <div
          :style="
            $vuetify.breakpoint.mdAndDown
              ? `style='width: 100%'`
              : `style='width: 60%'`
          "
          data-aos="fade"
          :class="$vuetify.breakpoint.mdAndDown ? 'text-center' : ''"
        >
          <v-card color="work-card" tile flat height="450px">
            <div class="d-flex align-center justify-center mb-10">
              <div class="d-flex align-center">
                <v-icon id="diamond" color="#00eaf2">mdi-cards-diamond</v-icon>
                <h2 class="mx-10">Work Experiences</h2>
              </div>
              <svg
                class="d-none d-xl-flex d-md-none"
                data-aos="fade-left"
                data-aos-delay="400"
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="1"
                viewBox="0 0 300 1"
              >
                <line
                  id="Line_12"
                  data-name="Line 12"
                  x2="400"
                  transform="translate(0 0.5)"
                  fill="none"
                  stroke="#707070"
                  stroke-width="1"
                />
              </svg>
            </div>

            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="#00eaf2 "
              :vertical="$vuetify.breakpoint.mdAndDown ? false : true"
              dark
              :grow="$vuetify.breakpoint.mdAndDown ? true : false"
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
                    class="ma-2"
                    min-width="300px"
                    max-width="600px"
                  >
                    <h4 class="grey-light mb-10">{{ item.title }}</h4>
                    <h4 class="grey-light mb-10">{{ item.duration }}</h4>
                    <h5
                      class="mb-4"
                      v-for="(description, k) in item.descriptions"
                      :key="k"
                    >
                      {{ description }}
                    </h5>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-card>
        </div>
      </div>
      <div id="next">
        <v-btn icon href="#project"
          ><v-icon color="#707070" x-large>mdi-chevron-down</v-icon></v-btn
        >
      </div>
    </div>
    <div id="project" class="d-flex justify-center align-center py-10 px-5">
      <div>
        <v-card color="work-card" tile flat class="">
          <div class="d-flex align-center justify-center mb-10">
            <div class="d-flex align-center">
              <v-icon id="diamond" color="#00eaf2">mdi-cards-diamond</v-icon>
              <h2 class="mx-10">Notable Projects</h2>
            </div>
            <svg
              class="d-none d-xl-flex d-md-none"
              data-aos="fade-left"
              data-aos-delay="400"
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="1"
              viewBox="0 0 351 1"
            >
              <line
                id="Line_12"
                data-name="Line 12"
                x2="400"
                transform="translate(0 0.5)"
                fill="none"
                stroke="#707070"
                stroke-width="1"
              />
            </svg>
          </div>
          <div v-for="(item, n) in projects" :key="n">
            <ProjectCard
              :pos="n % 2 == 0 ? 'right' : 'left'"
              :item="projects[n]"
            ></ProjectCard>
            <div style="height: 100px"></div>
          </div>
        </v-card>
      </div>
    </div>
    <div style="height: 30vh">
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
      <div class="ma-auto text-center">
        <h3 class="main-color mb-4">Feel free to</h3>
        <h1 class="mb-4">Drop me a DM</h1>
        <h4 style="margin-bottom: 100px">I look forward to hearing from you</h4>
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
export default {
  layout: "layout3",
  components: {
    Headertext: () => import("~/components/HeaderText.vue"),
    HoverCard: () => import("~/components/hoverCard.vue"),
    ImpactText: () => import("~/components/ImpactText.vue"),
    ProjectCard: () => import("~/components/ProjectCard.vue"),
  },

  data() {
    return {
      isLoading: true,
      tab: null,
      items: [
        {
          company: "Gamuda ",
          title: "Software Engineer (R&D)",
          duration: " Nov 2019 - Now",
          descriptions: [
            "Joined the R&D Department of Gamuda",
            "Created the Plant Inventory Management Systems - PIMS website using Python, Dash and Firebase",
            "Currently working on the Tunnel-Insight website using Vue.js, FastAPI and GCP",
            "Tunnel-Insight is poised provide more visual and comprehensive data, analysis on mining activies and reporting capabilities ",
          ],
        },
        {
          company: "Gamuda ",
          title: "Tunnel Engineer - KVMRT Line2 SSP Line",
          duration: " Nov 2019 - Nov 2020",
          descriptions: [
            "Hired by Gamuda as a Tunnel Engineer for the Malaysian KVMRT Line2 SSP Project",
            "Ensured the timely delivery of the MRT Tunnel from TRX - Conlay - Ampang Park stations",
            "Awarded the Best Quality Tunnel Award in 2020",
          ],
        },

        {
          company: "Gamuda",
          title: "Design & Technical intern",
          duration: " June 2018 - Sept 2019",
          descriptions: [
            "Hired by Gamuda as a technical Intern for the Mechanical& Electrical Department",
            "Reviewed shop drawings pertaining Cold Water, Fire Fighting ,Sanitary and HVAC systems.",
          ],
        },

        {
          company: "Owlnext",
          title: "Co-Founder",
          duration: "Apr 2018-Dec 2018",
          descriptions: [
            "Started an initiative to teach young kids to code through block programming.",
            "We made the courses super interactive by allowing kids to create their own world using shapes and physics.",
            "The final product is a viewable VR experience which kids would share and explain their creations",
          ],
        },
      ],
      projects: [
        {
          title: "Tunnel-Insight",
          description:
            " Currently working on the Tunnel-Insight website using Vue.js, FastAPI and GCP. Tunnel-Insight is poised provide more visual and comprehensive data, analysis on mining activies and reporting capabilities",
          techs: ["Python", "Keras", "Matplotlib", "SUMO"],
          src: "tunnel-insight.jpg",
        },
        {
          title: "Personal Portfolio",
          description:
            "First personal portoflio created to test my skills in general web design in Adobe XD, responsive web and Nuxt.js.",
          techs: ["Nuxt.js", "Vue.js", "Vuetify", "Adobe XD"],
          src: "Personal Site.jpg",
        },
        {
          title: "Deep Learning Traffic Lights",
          description:
            "Created a simulated traffic light junction controlled by a deep reinforcement learning agent to optimize the duration of the signals dynamically based on traffic heaviness levels",
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

  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(1fr, 150px));
  justify-self: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
</style>