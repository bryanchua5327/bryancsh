<template>
  <v-card
    class="d-flex align-center ma-10 project-card"
    color="rgba(255,255,255,0)"
    flat
    tile
    data-aos="fade-up"
    data-aos-offset="300px"
    width="50vw"
  >
    <div class="d-flex align-center flex-column" v-if="pos == 'right'">
      <div style="height: 333px">
        <v-img
          class="image-project"
          aspect-ratio="1.5"
          min-width="300px"
          width="100vw"
          max-width="500px"
          :src="item.src"
        ></v-img>
      </div>
      <v-card
        color="transparent"
        :style="
          $vuetify.breakpoint.mdAndDown ? '' : 'position: absolute; right: 0px'
        "
        flat
        tile
      >
        <v-row>
          <v-col
            :style="
              $vuetify.breakpoint.mdAndDown
                ? 'text-align:center; background-color:#000f2a;'
                : 'text-align:right'
            "
          >
            <h4 class="main-color mt-4">Project</h4>
            <h4 class="mb-4 grey-light">
              {{ item.title }}
            </h4>
            <v-card
              color="rgba(15,38,81,0.7)"
              style="min-width: 300px; max-width: 600px; overflow: hidden"
              class="glassCard pa-4 mb-4"
            >
              <h5 style="color: white" class="ma-5">
                {{ item.description }}
              </h5>
            </v-card>
            <div
              class="d-flex"
              :class="
                $vuetify.breakpoint.mdAndDown ? 'justify-center' : 'justify-end'
              "
            >
              <h5 class="ml-4" v-for="(tech, n) in item.techs" :key="n">
                {{ tech }}
              </h5>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div
      class="d-flex align-center"
      :class="$vuetify.breakpoint.mdAndDown ? 'flex-column-reverse' : ''"
      v-if="pos == 'left'"
    >
      <v-card color="transparent" flat tile style="z-index: 1">
        <v-row>
          <v-col
            :style="
              $vuetify.breakpoint.mdAndDown
                ? 'text-align:center'
                : 'text-align:left'
            "
            ><h4 class="main-color mt-4">Project</h4>
            <h4 class="mb-4 grey-light">
              {{ item.title }}
            </h4>
            <v-card
              color="rgba(24,44,80,0.7)"
              style="min-width: 300px; max-width: 600px; overflow: hidden"
              class="glassCard pa-4 mb-4"
            >
              <h5 style="color: white" class="ma-5">
                {{ item.description }}
              </h5>
            </v-card>
            <div
              class="d-flex"
              :class="
                $vuetify.breakpoint.mdAndDown
                  ? 'justify-center'
                  : 'justify-start'
              "
            >
              <h5 class="ml-4" v-for="(tech, n) in item.techs" :key="n">
                {{ tech }}
              </h5>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <div style="height: 333px">
        <v-img
          class="image-project left"
          :style="
            $vuetify.breakpoint.mdAndDown
              ? ''
              : 'position: absolute; right: 0px'
          "
          aspect-ratio="1.5"
          min-width="300px"
          width="100vw"
          max-width="500px"
          :src="item.src"
        ></v-img>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    pos: {
      type: String,
      default: false,
    },
    item: {
      type: Object,
    },
  },
};
</script>

<style>
</style>