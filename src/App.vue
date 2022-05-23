<template>
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
  <v-app>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<style>
  @import './assets/styles/main.css';
</style>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
  listeners: {},

  data: () => ({
    
  }),
}
</script>
