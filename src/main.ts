import 'normalize.css'
import './css/reset.css'
import './assets/fonts/nickelodeon/nickelodeon.css'
import './css/style.css'

import { createApp } from 'vue'

import App from './App.vue'
import { key, store } from './store'

createApp(App)
  .use(store, key)
  .mount('#app')
