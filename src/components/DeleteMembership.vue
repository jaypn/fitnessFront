<template>
  <v-btn @click="deleteMembership" type="submit" elevation="2" rounded
    >Delete</v-btn
  >
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "DeleteMembership",
  props: {
    membershipId: {
      type: Number,
      default: null,
    },
  },
  methods: {
    deleteMembership() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/membership",
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          data: {
            id: this.membershipId,
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);

          this.$router.push("/memberships");
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