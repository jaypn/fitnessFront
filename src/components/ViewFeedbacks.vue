<template>
  <div id="vidCont">
    <v-card
      v-for="feedback in feedbacks"
      :key="feedback.id"
      class="mx-auto mb-8"
      color="#26c6da"
      dark
      max-width="400"
    >
      <v-card-title>
        <!-- <v-icon large left> mdi-twitter </v-icon> -->
        <!-- <span class="title font-weight-light">{{ member.username }}</span> -->
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        {{ feedback.content }} <br />
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
              >{{ feedback.username }} <br />{{ feedback.created_at }}
            </v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <!-- <span class="subheading mr-2">256</span> -->
            <span class="mr-1"> </span>
            <delete-feedback :feedbackId="feedback.id" />
            <!-- <span class="subheading">45</span> -->
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import DeleteFeedback from "./DeleteFeedback.vue";

export default {
  components: { DeleteFeedback },
  name: "ViewFeedback",
  data() {
    return {
      feedbacks: [],
    };
  },
  methods: {
    viewFeedback() {
      // axios
      axios
        .request({
          url: "https://jayfitness.ml/api/feedback",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          params: {
            token: cookies.get("session"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.feedbacks = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.viewFeedback();
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
