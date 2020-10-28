<template>
  <b-navbar
    toggleable="sm"
    class="py-0"
  >
    <b-navbar-brand
      to="/"
      type="dark"
      class="mx-4"
    >
      <img
        class="brand"
        src="https://s3-us-west-1.amazonaws.com/zzandland.io/assets/logo.png"
        alt="zzandland"
      >
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav class="text-center">
        <b-nav-item to="/projects">
          projects
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav
        right
        class="ml-auto"
      >
        <div class="mx-4 d-flex flex-row justify-content-around align-items-center">
          <b-nav-item
            href="https://github.com/zzandland"
            target="_blank"
          >
            <i class="fab fa-github h4 my-auto" />
          </b-nav-item>
          <b-nav-item
            href="https://www.instagram.com/zzandland/"
            target="_blank"
          >
            <i class="fab fa-instagram h4 my-auto" />
          </b-nav-item>
          <b-nav-item
            href="https://www.youtube.com/user/zzandlnad"
            target="_blank"
          >
            <i class="fab fa-youtube h4 my-auto" />
          </b-nav-item>
          <b-nav-item
            href="https://medium.com/@zzandland"
            target="_blank"
          >
            <i class="fab fa-medium h4 my-auto" />
          </b-nav-item>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {}
</script>

<style scoped>
@media (max-width: 992px) {
  .navbar-brand {
    margin-left: 0 !important;
  }
}

.navbar {
  background: rgb(255, 255, 255, 0.5)
}

.navbar-brand img {
  height: 2.5rem;
}

.nav-item {
  font-size: 1rem;
}

.nav-link {
  font-size: 1.2rem;
}
</style>
