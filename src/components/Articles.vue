<template>
  <div>
    <b-jumbotron
      header="si yong kim"
      header-level="5"
      lead="The best time to plant a tree is twenty years ago. The second best time is now."
    />
    <VueShowdown :markdown="test" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import showdown from 'showdown';
import test from '../assets/articles/2020-09-07.md';

showdown.setFlavor('github');

@Component
export default class Articles extends Vue {
  data: string[] = [];

  created() {
    this.convert();
  }

  convert() {
    const converter = new showdown.Converter();
    this.data.push(converter.makeHtml(test));
  }
}
</script>

<style scoped>
.lead {
  margin-top: 2rem;
  color: rgb(255, 255, 255, 0.8);
  font-size: 0.9rem;
}
</style>
