<template>
  <v-icon @click="deleteFeedback" class="mr-1"> mdi-account-remove</v-icon>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  props: {
    feedbackId: {
      type: Number,
      default: null,
    },
  },
  methods: {
    deleteFeedback() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/feedback",
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          data: {
            id: this.feedbackId,
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);

          this.$router.push("/feedback");
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