<template>
  <b-col>
    <b-card
      :title="project.title"
      :img-src="project.imgUrl"
      :img-alt="project.title"
      img-top
      style="max-width: 20rem;"
    >
      <b-card-text>{{ project.description }}</b-card-text>
      <b-button
        :href="project.ghUrl"
        target="_blank"
        variant="primary"
      >
        <i class="fab fa-github" /> View source code
      </b-button>
    </b-card>
  </b-col>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Project as ProjectType } from '../type';

@Component
export default class Project extends Vue {
  @Prop() readonly project!: ProjectType;
}

</script>

<style scoped>
img {
  height: 10rem;
};
</style>
