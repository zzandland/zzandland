<template>
  <div>
    <b-jumbotron
      header="projects"
      header-level="5"
      lead="Here are some projects that I worked on freetime."
    />
    <b-container>
      <b-row>
        <Project
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Project from './Project.vue';
import { Project as ProjectType } from '../type';
import { projects } from '../data';

@Component({
  components: { Project },
})
export default class Projects extends Vue {
  projects: ProjectType[] = projects;
}

</script>
