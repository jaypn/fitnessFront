<template>
  <v-form @submit.prevent="updateMembership">
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
          <v-btn type="submit" elevation="2" rounded>Update membership</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "UpdateMembership",
  props: {
    membershipObj: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      type: this.membershipObj.type,
      description: this.membershipObj.description,
    };
  },
  methods: {
    updateMembership() {
      axios
        .request({
          url: "https://jayfitness.ml/api/membership",
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          data: {
            type: this.type,

            description: this.description,
            id: this.membershipObj.id,
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