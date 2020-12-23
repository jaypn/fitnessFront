<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logojy.jpg"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <span class="mr-2">JayFitness</span>
    </v-app-bar>

    <v-main>
      <v-container style="margin-bottom: 100px"> <router-view /> </v-container>
    </v-main>
    <footer-page />
  </v-app>
</template>

<script>
import FooterPage from "./components/FooterPage.vue";
export default {
  name: "App",

  components: { FooterPage },

  data: () => ({
    //
  }),
};
</script>
