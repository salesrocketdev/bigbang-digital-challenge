import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faBell,
  faPlus,
  faBars,
  faStore,
  faBasketShopping,
  faFileInvoice,
  faChartLine
} from '@fortawesome/free-solid-svg-icons'

library.add(faBell, faPlus, faBars, faStore, faBasketShopping, faFileInvoice, faChartLine)

const app = createApp(App)

app.use(createPinia())
app.use(router).component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
