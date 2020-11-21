<template>
  <div>
    <b-jumbotron
      header="si yong kim"
      header-level="5"
      lead="The best time to plant a tree is twenty years ago. The second best time is now."
    />
    <div class="text-center mx-3">
      <b-row
        v-for="(row, index1) in articleRows"
        :key="index1"
      >
        <b-col
          v-for="(article, index2) in row"
          :key="index2"
          class="my-3"
          :article="article"
        >
          <b-card
            class="h-100"
            :title="article.title"
            :sub-title="article.subtitle"
            :img-src="'https://s3-us-west-1.amazonaws.com/zzandland.io/assets/previews/' + article.date +'.jpg'"
            :img-alt="article.title"
            @click="changeRoute(article.path)"
          >
            <template #footer>
              <small>{{ article.date }}</small>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Articles extends Vue {
  numColumn = 1;

  articles = Array<Article>();

  articleRows = Array<Array<Article>>(Array<Article>());

  async created() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    if (!this.$store.getters.articles.length) await this.$store.dispatch('fetchArticles');
    this.articles = this.$store.getters.articles;
    this.generateRows();
  }

  destroyed() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const width = window.innerWidth;
    let tmp: number;

    if (width < 650) {
      tmp = 1;
    } else if (width >= 650 && width < 992) {
      tmp = 2;
    } else {
      tmp = 3;
    }

    if (tmp !== this.numColumn) {
      this.numColumn = tmp;
      this.generateRows();
    }
  }

  generateRows() {
    this.articleRows = this.articles.reduce((rows, article, index) => {
      if (index % this.numColumn === 0) {
        rows.push([article]);
      } else {
        rows[rows.length - 1].push(article);
      }
      return rows;
    }, [] as Article[][]);
  }

  changeRoute(path: string) {
    this.$router.push({ path: `/articles/${path}` });
  }
}
</script>

<style>
img {
  height: 12rem;
  object-fit: cover;
}

.card {
  cursor: pointer;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title, .card-footer, .display-5 {
  font-family: 'Ubuntu', sans-serif;
}

.jumbotron {
  padding: 3rem 2rem;
}

p.lead {
  margin-bottom: 0;
}
</style>
