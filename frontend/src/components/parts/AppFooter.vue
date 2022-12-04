<template>
  <div>
    <v-footer color="pink light-4" padless>
      <v-row justify="center">
        <!-- <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn> -->
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>
            {{ new Date().getFullYear() }} — Project
            <v-icon white large style="margin: 5px">mdi-youtube</v-icon>
            DeeTube</strong
          >
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
