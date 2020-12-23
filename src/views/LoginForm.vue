<template>
  <v-form @submit.prevent="login">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="username"
            label="username"
            required
            autocomplete="false"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            label="password"
            type="password"
            required
            autocomplete="false"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col>
          <v-btn type="submit" elevation="2" rounded>Login</v-btn>
        </v-col>
        <v-col>
          <v-btn to="/signup" type="submit" elevation="2" rounded
            >Create Account</v-btn
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
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/login",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response.data);
          cookies.set("user", response.data);

          cookies.set("session", response.data.token);
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