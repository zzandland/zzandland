<template>
  <div>
    <b-jumbotron
      header="projects"
      header-level="5"
      lead="Here are some projects that I worked on free time."
    />
    <b-container class="text-center">
      <b-row
        v-for="(row, index1) in projectRows"
        :key="index1"
      >
        <b-col
          v-for="(project, index2) in row"
          :key="index2"
          :project="project"
          md="4"
        >
          <ProjectComponent :project="project" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectComponent from './Project.vue';
import projects from '../data';

@Component({
  components: { ProjectComponent },
})
export default class Projects extends Vue {
  projectRows: Project[][] = projects.reduce((rows, project, index) => {
    if (index % 3 === 0) {
      rows.push([project]);
    } else {
      rows[rows.length - 1].push(project);
    }
    return rows;
  }, [] as Project[][]);
}
</script>

<style>
</style>
