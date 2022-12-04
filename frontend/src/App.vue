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

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },

  data: () => ({
    CookieValue: ''
  }),
  methods: {
    // サンプルコード
    getCookie:function(){
      return "【Get Cookie Value】 "+this.$cookies.get('CookieValue');
    },
    setCookie:function(){
      this.$cookies.config(60 * 60 * 24 * 30,'');
      this.$cookies.set('CookieValue', this.CookieValue);
      location.reload();
    }
  }
};
</script>
