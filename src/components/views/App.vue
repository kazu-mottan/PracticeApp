<template>
  <v-app>
    <MainTitle/>
    <v-main>
      <v-container class="grey lighten-5">
        <v-row class="mb-6" no-gutters>
        <v-col>
          <!-- v-imgはコンポーネント化する -->
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
        </v-col>
        <v-col>
          <v-app>
            <v-card>
              <v-card-text>
              <v-form>
                <UserText/>
                <UserPass/>
                <MovieSelect/>
                </v-form>
              </v-card-text>
            </v-card>
          </v-app>
        </v-col>
        </v-row>
      </v-container>

    </v-main>
    
  </v-app>
</template>

<script>
import MainTitle from '../parts/MainTitle.vue'
import MovieSelect from '../parts/MovieSelect.vue'
import UserPass from '../parts/UserPass.vue'
import UserText from '../parts/UserText.vue'

export default {
  name: 'App',

  components: {
    MainTitle,
    MovieSelect,
    UserText,
    UserPass
  },

  data: () => ({
    //
  }),
}
</script>
