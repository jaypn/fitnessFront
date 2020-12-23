<template>
  <v-form @submit.prevent="updateMember">
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
          <v-btn type="submit" elevation="2" rounded>Update info</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
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
      memberId: null,
    };
  },
  methods: {
    updateMember() {
      console.log("Updating Member");
      axios
        .request({
          url: "https://jayfitness.ml/api/members",
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          data: {
            username: this.username,
            password: this.password,
            last_name: this.lastname,
            first_name: this.firstname,
            membership_id: this.selectedMembership.id,
            DOB: this.DOB,
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);
          //token = cookies.get("session");
          this.$router.push("/members");
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
    this.memberId = this.$route.params.memberId;
    console.log("params", this.memberId);
  },
};
</script>

<style lang="scss" scoped>
</style>