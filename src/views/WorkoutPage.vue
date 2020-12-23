<template>
  <div>
    <div>
      <h3 class="font-weight-bold ml-8 mb-2 text-center green--text">
        Workout
      </h3>
      <br />
      <br />
      <v-row v-if="user && user.role == 'admin'">
        <v-col cols="12" md="4">
          <v-btn @click="showUpload = true" type="submit" elevation="2" rounded
            >New Workout</v-btn
          >
        </v-col>
      </v-row>
      <upload-workout-page v-if="showUpload" />

      <div id="vidCont" v-if="!showUpdate">
        <v-card
          v-for="workout in workouts"
          v-bind:key="workout.id"
          class="mx-8 mb-8"
          min-width="400"
        >
          <v-card-title>{{ workout.name }}</v-card-title>
          <iframe
            class="white--text align-end"
            height="200px"
            width="100%"
            :src="workout.video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>

          <v-card-text class="text--primary">
            <div>{{ workout.description }}</div>
          </v-card-text>

          <v-row justify="center">
            <v-col cols="6" md="4">
              <v-btn
                v-if="user && user.role == 'admin'"
                @click="selectWorkout(workout)"
                type="submit"
                elevation="2"
                rounded
                >Update</v-btn
              >
            </v-col>
            <v-col v-if="user && user.role == 'admin'" cols="6" md="4">
              <delete-workout :workoutId="workout.id" />
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
    <update-workout-page
      v-if="showUpdate"
      v-bind:workoutObj="selectedWorkout"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import UpdateWorkoutPage from "../components/UpdateWorkoutPage.vue";

import UploadWorkoutPage from "../components/UploadWorkoutPage.vue";
import DeleteWorkout from "../components/DeleteWorkout.vue";

export default {
  components: {
    UpdateWorkoutPage,

    UploadWorkoutPage,
    DeleteWorkout,
  },
  name: "WorkoutPage",
  data() {
    return {
      workouts: [],
      showUpdate: false,
      showUpload: false,
      selectedWorkout: null,
      user: null,
    };
  },
  methods: {
    selectWorkout(workout) {
      this.showUpdate = true;
      this.selectedWorkout = workout;
    },
    seeWorkout() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/workouts",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          params: {
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.workouts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.seeWorkout();
    console.log(cookies.get("session"));
    if (cookies.get("session") == null) {
      this.$router.push("/login");
    }
    this.user = cookies.get("user");
  },
};
</script>

<style lang="scss" scoped>
#vidCont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>