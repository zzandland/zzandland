<template>
  <div>
    <b-jumbotron
      header="si yong kim"
      header-level="5"
      lead="The best time to plant a tree is twenty years ago. The second best time is now."
    />
    <b-container class="text-center">
      <b-row
        v-for="(row, index1) in articleRows"
        :key="index1"
      >
        <b-col
          v-for="(article, index2) in row"
          :key="index2"
          :article="article"
          md="4"
        >
          <b-card
            class="my-3 h-100"
            :title="article.title"
            :sub-title="article.subtitle"
            :img-src="'https://s3-us-west-1.amazonaws.com/zzandland.io/assets/previews/' + article.date +'.jpg'"
          >
            <b-link @click="changeRoute(article.path)">
              Read More
            </b-link>
            <template #footer>
              <small>{{ article.date }}</small>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { articles } from '../data';

@Component
export default class Articles extends Vue {
  articleRows: Article[][] = articles.reduce((rows, article, index) => {
    if (index % 3 === 0) {
      rows.push([article]);
    } else {
      rows[rows.length - 1].push(article);
    }
    return rows;
  }, [] as Article[][]);

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

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
