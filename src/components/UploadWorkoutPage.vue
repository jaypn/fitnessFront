<template>
  <v-form @submit.prevent="addWorkout">
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
          <v-select
            v-model="selectedMembership"
            :items="memberships"
            item-text="type"
            item-value="id"
            label="Membership"
            return-object
            single-line
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-btn type="submit" elevation="2" rounded>Upload workout</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "UploadworkoutPage",
  data() {
    return {
      name: "",
      video: "",
      description: "",
      memberships: [],
      selectedMembership: null,
    };
  },
  methods: {
    addWorkout() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/workouts",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            name: this.name,
            video: this.video,
            description: this.description,
            token: cookies.get("session"),

            membership_id: this.selectedMembership.id,
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
    getAllMemberships() {
      axios
        .get("https://jayfitness.ml/api/membership")
        .then((response) => {
          console.log(response.data);
          this.memberships = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllMemberships();
  },
};
</script>

<style>
</style>