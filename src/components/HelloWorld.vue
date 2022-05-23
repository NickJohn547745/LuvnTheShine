<template>
  <router-link to="/">
    <v-card to="/" class="logo" color="black">
      <v-img to="/" :src="image" alt="" />
    </v-card>
  </router-link>



  <v-app-bar class="topbar" color="black">
    <v-tabs slider-color="#ba00ff" class="topbar" grow v-model="tab">

      <v-tab to="/">
        <router-link style="text-decoration: none; color: inherit;" to="/">HOME</router-link>
      </v-tab>
      <v-tab to="/products">
        <router-link style="text-decoration: none; color: inherit;" to="/products">PRODUCTS</router-link>
      </v-tab>
      <v-tab disabled></v-tab>
      <v-tab to="/about">
        <router-link style="text-decoration: none; color: inherit;" to="/about">ABOUT US</router-link>
      </v-tab>
      <v-tab to="/contact">
        <router-link style="text-decoration: none; color: inherit;" to="/contact">CONTACT</router-link>
      </v-tab>

    </v-tabs>
  </v-app-bar>

  <v-parallax :src="background">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Vuetify
      </h1>

      <v-window v-model="tab">
        <v-window-item>
          <h4 class="subheading">
            Home Page 
          </h4>
        </v-window-item>
        <v-window-item>
          <h4 class="subheading">
            Product Page 
          </h4>
        </v-window-item>
        <v-window-item></v-window-item>
        <v-window-item>
          <h4 class="subheading">
            About Page 
          </h4>
        </v-window-item>
        <v-window-item>
          <h4 class="subheading">
            Contact Page 
          </h4>
        </v-window-item>
      </v-window>
    </div>
  </v-parallax>


</template>

<script>
import img from '@/assets/images/logo.png'
import bkg from '@/assets/images/background.png'

export default {
  name: "HelloWorld",
  data: () => ({
    image: img,
    background: bkg,
    tab: null
  })
};
</script>