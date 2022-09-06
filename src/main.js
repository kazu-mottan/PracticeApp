import { createApp } from 'vue'
import App from './components/views/App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// YouTube
import Video from './components/views/Video.vue'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

createApp(Video)
  .use(vuetify)
  .mount('#app')