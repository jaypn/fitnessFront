<template>
  <div>
    <v-footer fixed class="px-0">
      <v-card flat tile width="100%" class="blue lighten-1 text-center">
        <v-card-text class="py-1">
          <v-btn class="mx-12" icon to="/members">
            <v-icon size="24px"> mdi-account </v-icon>
          </v-btn>
          <v-btn class="mx-12" icon to="/feedback">
            <v-icon size="24px"> mdi-comment-account </v-icon>
          </v-btn>
          <v-btn class="mx-12" icon to="/">
            <v-icon size="24px"> mdi-home </v-icon>
          </v-btn>
          <v-btn class="mx-12" icon to="/memberships">
            <v-icon size="24px"> mdi-credit-card-multiple </v-icon>
          </v-btn>
          <v-btn class="mx-12" icon to="/logout">
            <v-icon size="24px"> mdi-logout </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text py-1">
          {{ new Date().getFullYear() }} — <strong>JayFitness</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>


<style>
</style>