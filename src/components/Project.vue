<template>
  <b-card
    class="my-3"
    :title="project.title"
    :img-src="project.imgUrl"
    :img-alt="project.title"
    img-top
  >
    <b-card-text>{{ project.description }}</b-card-text>
    <b-button
      :href="project.ghUrl"
      target="_blank"
      variant="primary"
    >
      <i class="fab fa-github" /> View code
    </b-button>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Project extends Vue {
  @Prop() readonly project!: Project;
}
</script>

<style scoped>
img {
  height: 12rem;
  object-fit: cover;
};
</style>
