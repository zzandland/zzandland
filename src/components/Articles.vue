<template>
  <div>
    <b-jumbotron
      header="si yong kim"
      header-level="5"
      lead="The best time to plant a tree is twenty years ago. The second best time is now."
    />
    <Cards
      class="text-center mx-4"
      :card-type="type"
      :cards="articles"
      :on-click="changeRoute"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import Cards from './Cards.vue';

@Component({
  components: { Cards },
  computed: mapGetters([
    'articles',
  ]),
  methods: mapActions([
    'fetchArticles',
  ]),
})
export default class Articles extends Mixins(Cards) {
  articles!: Article[]

  fetchArticles!: () => void

  type = 'ARTICLE';

  async created() {
    if (!this.articles.length) this.fetchArticles();
  }

  destroyed() {
    window.removeEventListener('resize', this.onResize);
  }

  changeRoute(path: string) {
    this.$router.push({ path: `/articles/${path}` });
  }
}
</script>

<style>
p.lead {
  margin-bottom: 0;
}

.jumbotron {
  padding: 3rem 2rem;
}
</style>
