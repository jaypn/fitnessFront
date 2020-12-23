<template>
  <v-btn @click="deleteWorkout" type="submit" elevation="2" rounded
    >Delete</v-btn
  >
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "DeleteWorkout",
  props: {
    workoutId: {
      type: Number,
      default: null,
    },
  },
  methods: {
    deleteWorkout() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/workouts",
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          data: {
            id: this.workoutId,
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);

          this.$router.push("/");
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