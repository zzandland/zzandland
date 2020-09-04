<template>
  <div>
    <b-jumbotron
      header="projects"
      header-level="5"
      lead="Here are some projects that I worked on freetime."
    />
    <b-container>
      <b-row>
        <ProjectComponent
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :img-url="project.imgUrl"
          :description="project.description"
          :gh-url="project.ghUrl"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectComponent from './Project.vue';
import { Project } from '../type';
import { projects } from '../data';

@Component({
  components: { ProjectComponent },
})
export default class Projects extends Vue {
  projects: Project[] = projects;
}

</script>
