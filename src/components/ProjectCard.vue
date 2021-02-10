<template>
  <b-card
    :title="project.title"
    :img-src="project.imgUrl"
    :img-alt="project.title"
    @click="onClick(project.path)"
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
export default class ProjectCard extends Vue {
  @Prop() readonly project!: Project

  @Prop() readonly onClick!: Function
}
</script>

<style>
</style>
