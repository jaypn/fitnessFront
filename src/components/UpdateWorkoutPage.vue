<template>
  <v-form @submit.prevent="updateWorkout">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="video" label="video" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="name" label="name" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="description"
            label="description"
            required
            autocomplete="false"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-btn color="success" type="submit" elevation="2" rounded
            >Save</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  props: {
    workoutObj: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      name: this.workoutObj.name,

      video: this.workoutObj.video,
      description: this.workoutObj.description,
    };
  },
  methods: {
    updateWorkout() {
      axios
        .request({
          url: "https://jayfitness.ml/api/workouts",
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          data: {
            name: this.name,
            video: this.video,
            description: this.description,

            id: this.workoutObj.id,
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);
          //token = cookies.get("session");
          this.$router.go();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>