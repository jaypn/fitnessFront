<template>
  <div>
    <h3 class="font-weight-bold ml-8 mb-2 text-center green--text">
      Membership
    </h3>
    <v-row v-if="user && user.role == 'admin'">
      <v-col cols="12" md="4">
        <v-btn @click="showUpload = true" type="submit" elevation="2" rounded
          >New Membership</v-btn
        >
      </v-col>
    </v-row>
    <upload-membership v-if="showUpload" />
    <div id="vidCont" v-if="!showUpdate">
      <v-card
        v-for="membership in memberships"
        :key="membership.id"
        class="mx-auto mb-8"
        color="#26c6da"
        dark
        max-width="400"
      >
        <v-card-title>
          <!-- <v-icon large left> mdi-twitter </v-icon> -->
          <span class="title font-weight-light">{{ membership.type }}</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
          {{ membership.description }} <br />
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-row align="center" justify="end">
              <v-btn
                v-if="user && user.role == 'admin'"
                @click="selectMembership(membership)"
                type="submit"
                elevation="2"
                rounded
                >Update</v-btn
              >
              <!-- <span class="subheading mr-2">256</span> -->
              <span class="mr-1"> </span>
              <delete-membership
                v-if="user && user.role == 'admin'"
                :membershipId="membership.id"
              />
              <!-- <span class="subheading">45</span> -->
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
    <update-membership
      v-if="showUpdate"
      v-bind:membershipObj="selectedMembership"
    />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

import DeleteMembership from "../components/DeleteMembership.vue";
import UpdateMembership from "../components/UpdateMembership.vue";
import UploadMembership from "../components/UploadMembership.vue";

export default {
  components: {
    DeleteMembership,
    UpdateMembership,
    UploadMembership,
  },
  name: "ViewMembership",
  data() {
    return {
      memberships: [],
      showUpdate: false,
      showUpload: false,
      selectedMembership: null,
      user: null,
    };
  },
  methods: {
    selectMembership(membership) {
      this.showUpdate = true;
      this.selectedMembership = membership;
    },
    getAllMemberships() {
      axios
        .request({
          url: "https://jayfitness.ml/api/membership",
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
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
    this.user = cookies.get("user");
  },
};
</script>

<style scoped>
#vidCont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>