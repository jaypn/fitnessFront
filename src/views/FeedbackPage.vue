<template>
  <v-container>
    <v-textarea
      v-model="content"
      color="black"
      label="feedback message"
    ></v-textarea>
    <v-btn @click="sendFeedback" depressed color="primary">
      Send Feedback
    </v-btn>
    <view-feedback />
  </v-container>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import ViewFeedback from "../components/ViewFeedbacks.vue";
export default {
  components: {
    ViewFeedback,
  },
  name: "FeedbackPage",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    sendFeedback() {
      axios
        .request({
          url: "https://jayfitness.ml/api/feedback",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            content: this.content,
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);

          this.$router.go();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (cookies.get("session") == null) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
</style>