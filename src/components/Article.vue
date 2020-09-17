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
    if (!this.$store.getters.articles.length) await this.$store.dispatch('fetchHtmls');

    const { date, html } = this.$store.getters.html(this.path);
    this.date = date;
    this.html = html;
  }
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

  .btn {
    color: rgb(211, 211, 211);
  }

  span {
    color: lightgrey;
  }

  .article >>> blockquote {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-left: 2px solid #ff9900;
    padding-left: 1rem;
    font-size: 0.9rem !important;
    color: darkgrey !important;
  }

  .article >>> blockquote p {
    font-size: 0.9rem !important;
  }

  .article >>> hr {
    background-color: #ff9900;
    margin-bottom: 3rem;
    height: 1px;
  }

  .article >>> h1, .article >>> h3, .article >>> h4 {
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

  .article >>> ul {
    padding-left: 2rem;
  }
</style>
