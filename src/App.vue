<template>
  <v-app>
    <v-main>
      <MainTitle/>
    </v-main>
  </v-app>
</template>

<script>
import MainTitle from './components/parts/MainTitle.vue'

export default {
  name: 'App',

  components: {
    MainTitle,
  },

  data: () => ({
    //
  }),
}
</script>
