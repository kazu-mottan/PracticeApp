<template>
  <div>
    <v-app-bar color="pink light-4" dark app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-icon white large style="margin: 5px">mdi-youtube</v-icon>
      <v-toolbar-title @click="$router.push('/')" style="cursor: pointer"
        ><strong>DeeTube</strong></v-toolbar-title
      >
      <div class="flex-grow-1"></div>
      <v-btn icon @Click.stop="loginCheck">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-earth</v-icon>
      </v-btn>
      <v-menu left bottom>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
            <v-list-item>
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>LOGIN</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
  <LoginPage :loginDialogflg="loginflg" />
</template>

<script>
import LoginPage from "../views/LoginPage.vue";
export default {
  name: "AppHeader",
  components: {
    LoginPage
  },
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    drawer: false,
    loginflg:false
  }),
  methods:{
    loginCheck: function(){
      this.loginflg = true;
      console.log('hoge')
    }
  }

};
</script>
