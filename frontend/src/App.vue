<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainTitle from './components/parts/MainTitle.vue'
import MovieSelect from './components/parts/MovieSelect.vue'
import UserPass from './components/parts/UserPass.vue'
import UserText from './components/parts/UserText.vue'
import selectCountry from './components/parts/selectCountry.vue'
import selectLanguage from './components/parts/selectLanguage.vue'
import Submit from './components/parts/Submit.vue'

export default {
  name: 'App',

  components: {
    MainTitle,
    MovieSelect,
    UserText,
    UserPass,
    selectCountry,
    selectLanguage,
    Submit
  },

  data: () => ({
    
  }),
}
</script>
