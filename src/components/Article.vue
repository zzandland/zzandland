<template>
  <b-container class="mx-auto my-5">
    <span v-html="html" />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { path2html } from '../data';

@Component
export default class Article extends Vue {
  @Prop() readonly title!: string;

  html: string = path2html[this.title];
}
</script>

<style>
@media (max-width: 576px) {
  h2 {
    font-size: 2rem;
  }
}

h2 {
  margin-top: 5rem;
}

hr {
  margin-top: 5rem;
  margin-bottom: 3rem;
  background: dimgrey;
}
</style>
