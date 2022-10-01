<template>
  <div>
    <v-app-bar color="pink light-4" dark app>
      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
      <v-icon white large style="margin: 5px">mdi-youtube</v-icon>
      <v-toolbar-title @click="$router.push('/')" style="cursor: pointer"
        ><strong>DeeTube</strong></v-toolbar-title
      >
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>
