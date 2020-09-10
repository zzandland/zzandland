<template>
  <b-container class="mx-auto my-5">
    <span
      class="article"
      v-html="html"
    />
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

<style scoped>
  @media (min-width: 768px) {
    .container {
      width: 65%;
    }
  }

  .article >>> hr {
    background-color: #ff9900;
    margin-bottom: 3rem;
  }

  .article >>> h2, .article >>> h3 {
    margin-bottom: 1.5rem;
  }

  .article >>> p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .article >>> blockquote {
    margin-left: 1rem;
    border-left: 3px solid #ff9900;
    padding-left: 1rem;
  }

  .article >>> blockquote p {
    font-size: 0.9rem;
  }
</style>
