<template>
  <v-form @submit.prevent="signup">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            label="First name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="username"
            label="username"
            required
            autocomplete="false"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="DOB"
            label="date of birth"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
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
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
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
          <v-btn type="submit" elevation="2" rounded>Sign Up</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "SignupForm",
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
      DOB: "",
      memberships: [],
      selectedMembership: null,
    };
  },
  methods: {
    signup() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/members",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            username: this.username,
            password: this.password,
            last_name: this.lastname,
            first_name: this.firstname,
            membership_id: this.selectedMembership.id,
            DOB: this.DOB,
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