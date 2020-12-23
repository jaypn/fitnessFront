<template>
  <div>
    <div v-for="member in members" :key="member.id">
      <v-card
        id="vidCont"
        class="mx-auto mb-8"
        color="#26c6da"
        dark
        max-width="400"
      >
        <v-card-title>
          <!-- <v-icon large left> mdi-twitter </v-icon> -->
          <span class="title font-weight-light">{{ member.username }}</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
          Membership Type: {{ member.type }} <br />
          Member since: {{ member.created_at }}
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{ member.first_name }} {{ member.last_name }}
              </v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-btn class="mx-4" icon to="/updatemember">
                <v-icon size="24px"> mdi-account-edit </v-icon>
              </v-btn>

              <!-- <span class="subheading mr-2">256</span> -->
              <span class="mr-1"> </span>
              <delete-member v-bind:memberId="member.id" />
              <!-- <span class="subheading">45</span> -->
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import DeleteMember from "../components/DeleteMember.vue";

//import DeleteFeedback from "./DeleteFeedback.vue";

export default {
  components: { DeleteMember },
  //components: { DeleteFeedback },
  name: "ViewMembers",
  data() {
    return {
      members: [],
    };
  },
  methods: {
    viewMember() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/members",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          params: {
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.members = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.viewMember();
    if (cookies.get("session") == null) {
      this.$router.push("/login");
    }
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