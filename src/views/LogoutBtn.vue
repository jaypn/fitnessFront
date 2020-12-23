<template>
  <div></div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    logout() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/login",
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          data: {
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);

          cookies.remove("session");
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.logout();
  },
};
</script>

<style>
</style>