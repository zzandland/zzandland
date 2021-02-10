<template>
  <b-card
    :title="article.title"
    :sub-title="article.subtitle"
    :img-src="'https://s3-us-west-1.amazonaws.com/zzandland.io/assets/previews/' + article.date +'.jpg'"
    :img-alt="article.title"
    @click="onClick(article.path)"
  >
    <template #footer>
      <small>{{ article.date }}</small>
    </template>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ArticleCard extends Vue {
  @Prop() readonly article!: Article

  @Prop() readonly onClick!: Function
}
</script>

<style>
</style>
