import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/reset.css'
import './assets/css/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .mount('#app')
