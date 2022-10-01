<template>
  <v-app>
    <AppHeader />
      <v-main>
        <router-view />
      </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from "./components/parts/AppFooter.vue";
import AppHeader from "./components/parts/AppHeader.vue";
import MainTitle from "./components/parts/MainTitle.vue";
import SelectMovie from "./components/parts/SelectMovie.vue";
import UserPassField from "./components/parts/UserPassField.vue";
import UserTextField from "./components/parts/UserTextField.vue";
import SelectCountry from "./components/parts/SelectCountry.vue";
import SelectLanguage from "./components/parts/SelectLanguage.vue";
import SubmitButton from "./components/parts/SubmitButton.vue";

export default {
  name: "App",

  components: {
    AppFooter,
    AppHeader,
    MainTitle,
    SelectMovie,
    UserTextField,
    UserPassField,
    SelectCountry,
    SelectLanguage,
    SubmitButton,
  },

  data: () => ({}),
};
</script>
