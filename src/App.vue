<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';

@Component({
  components: { Navbar },
})
export default class App extends Vue {}
</script>

<style>
a {
  color: #ff9900;
}

a:hover, a:focus {
  color: #914c03;
}

body {
  min-height: 100vh;
}

html {
  font-size: 20px;
}

i {
  font-size: 1.3rem;
  vertical-align: middle;
}

.lead {
  margin-top: 2rem;
  color: rgb(255, 255, 255, 0.8);
  font-size: 1rem;
}

#app {
  font-family: 'Nanum Gothic', sans-serif;
}

@media (min-width: 1200px) {
  .jumbotron {
    padding-left: 15% !important;
    padding-right: 15% !important;
  }
}
</style>
