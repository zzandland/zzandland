<template>
  <div>
    <b-jumbotron
      header="si yong kim"
      header-level="5"
      lead="The best time to plant a tree is twenty years ago. The second best time is now."
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Articles extends Vue {}
</script>

<style scoped>
.lead {
  margin-top: 2rem;
  color: rgb(255, 255, 255, 0.8);
  font-size: 0.9rem;
}
</style>
