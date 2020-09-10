<template>
  <b-container class="mx-auto my-5">
    <div class="d-flex flex-row justify-content-between">
      <b-button
        to="/"
        variant="outline"
      >
        <i class="fas fa-long-arrow-alt-left" /> Go back
      </b-button>
      <span class="my-auto">{{ date }}</span>
    </div>
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

  date: string = path2html[this.title][0];

  html: string = path2html[this.title][1];
}
</script>

<style scoped>
  @media (max-width: 768px) {
    .article >>> h1 {
      font-size: 2rem;
    }

    .article >>> h2 {
      font-size: 1.5rem !important;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 65%;
    }
  }

  span {
    color: lightgrey;
  }

  .article >>> blockquote {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-left: 3px solid #ff9900;
    padding-left: 1rem;
  }

  .article >>> blockquote p {
    font-size: 0.9rem;
    color: lightgrey;
  }

  .article >>> hr {
    background-color: #ff9900;
    margin-bottom: 3rem;
  }

  .article >>> h1, .article >>> h3 {
    padding-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .article >>> h2 {
    font-size: 1.7rem;
    color: grey;
  }

  .article >>> img {
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
  }

  .article >>> p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
</style>
