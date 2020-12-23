<template>
  <v-icon @click="deleteMember" class="mr-1"> mdi-account-remove </v-icon>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  props: {
    memberId: {
      type: Number,
      default: null,
    },
  },
  methods: {
    deleteMember() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/members",
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          data: {
            id: this.memberId,
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);

          this.$router.push("/signup");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>