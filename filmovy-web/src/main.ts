import { createApp } from 'vue'
import App from './App.vue'

// 1️⃣ Vuetify styly
import 'vuetify/styles'

// 2️⃣ Ikony
import '@mdi/font/css/materialdesignicons.css'

// 3️⃣ Vytvoření Vuetify instance
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

// 4️⃣ Router
import router from './router'

// 5️⃣ Vlastní styly (volitelné)
import './styles/settings.scss'

// 6️⃣ Aplikace
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')