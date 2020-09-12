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

i {
  font-size: 1.3rem;
  vertical-align: middle;
}

#app {
  font-family: "Courier New";
}

.lead {
  margin-top: 2rem;
  color: rgb(255, 255, 255, 0.8);
  font-size: 1rem;
}
</style>
