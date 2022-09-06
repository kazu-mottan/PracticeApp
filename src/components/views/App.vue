<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainTitle from '../parts/MainTitle.vue'
import MovieSelect from '../parts/MovieSelect.vue'
import UserPass from '../parts/UserPass.vue'
import UserText from '../parts/UserText.vue'
import selectCountry from '../parts/selectCountry.vue'
import selectLanguage from '../parts/selectLanguage.vue'
import Submit from '../parts/Submit.vue'

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
