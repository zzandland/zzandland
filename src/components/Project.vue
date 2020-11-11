<template>
  <b-card
    class="my-3"
    :title="project.title"
    :img-src="project.imgUrl"
    :img-alt="project.title"
    img-top
    @click="openTab(project.ghUrl)"
  >
    <b-card-text>{{ project.description }}</b-card-text>
    <template #footer>
      <small>View code on <i class="fab fa-github" /></small>
    </template>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Project extends Vue {
  @Prop() readonly project!: Project;

  openTab(link: string) {
    window.open(link);
  }
}
</script>

<style scoped>
  img {
    height: 12rem;
    object-fit: cover;
  };

  i {
    margin-left: 0.3rem;
    padding-bottom: 0.2rem;
  }
</style>
