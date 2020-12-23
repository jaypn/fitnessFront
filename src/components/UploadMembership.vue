<template>
  <v-form @submit.prevent="addMembership">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="type" label="type" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="description"
            label="description"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-btn type="submit" elevation="2" rounded>Upload membership</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "UploadMembership",
  data() {
    return {
      type: "",
      description: "",
    };
  },
  methods: {
    addMembership() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/membership",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            type: this.type,

            description: this.description,
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
};
</script>

<style>
</style>