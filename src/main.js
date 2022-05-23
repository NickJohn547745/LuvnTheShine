import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/styles'

import { loadFonts } from './plugins/webfontloader'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

loadFonts();

const Home = { template: '<div>Home</div>' }
const Products = { template: '<div>Products</div>' }
const About = { template: '<div>About</div>' }
const Contact = { template: '<div>Contact</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
  })

app.use(router)
app.use(vuetify)

app.mount('#app')
