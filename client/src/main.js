import { createApp } from 'vue'
import App from './App.vue'

import Routes from './Routes.js'

createApp(App)
.use(Routes)
.mount('#app')
