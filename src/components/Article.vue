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

<style module src="../assets/styles/retro.css">
</style>
