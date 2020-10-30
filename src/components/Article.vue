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

@Component
export default class Article extends Vue {
  @Prop() readonly path!: string;

  date = '';

  html = '';

  async created() {
    if (!this.$store.getters.articles.length) await this.$store.dispatch('fetchArticles');

    const { date, html } = this.$store.getters.html(this.path);
    this.date = date;
    this.html = html;
  }
}
</script>

<style scoped>
  .btn {
    color: rgb(211, 211, 211);
  }

  span {
    color: lightgrey;
  }

  .article {
    font-size: 1.1rem;
  }

  .article >>> blockquote {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-left: 3px solid #f36d33;
    padding-left: 1rem;
    font-size: 0.9rem !important;
    color: darkgrey !important;
  }

  .article >>> blockquote p {
    font-size: 0.9rem !important;
  }

  .article >>> hr {
    background-color: #f36d33;
    margin-bottom: 3rem;
    height: 1px;
  }

  .article >>> h1, .article >>> h3, .article >>> h4 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  .article >>> h1 {
    font-size: 2.7rem;
  }

  .article >>> h2 {
    font-size: 1.7rem;
    color: grey;
  }

  .article >>> h4 {
    font-size: 1.6rem;
  }

  .article >>> img {
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
  }

  .article >>> ol, .article >>> ul {
    padding-left: 2rem;
  }

  .article >>> ol p, .article >>> ul p {
    margin-bottom: 0;
  }

  .article >>> p {
    margin-bottom: 1.5rem;
  }

  .article >>> pre {
    border: 1px solid #2e2e2e;
    border-left: 3px solid #f36d33;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin: 0 0.5rem 1.6rem 0.5rem;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
  }

  @media (max-width: 768px) {
    .article >>> h1 {
      font-size: 2rem;
    }

    .article >>> h2 {
      font-size: 1.5rem !important;
    }

    .article >>> ul, .article >>> ul {
      padding-left: 1rem;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 65%;
    }
  }

</style>
