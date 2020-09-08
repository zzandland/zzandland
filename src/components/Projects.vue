<template>
  <div>
    <b-jumbotron
      header="projects"
      header-level="5"
      lead="Here are some projects that I worked on free time."
    />
    <b-container>
      <b-row
        v-for="(row, index) in projectRows"
        :key="index"
      >
        <b-col
          v-for="(project, index) in row"
          :key="index"
          :project="project"
          md="4"
        >
          <Project :project="project" />
        </b-col>
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
  projectRows: ProjectType[][] = projects.reduce((rows, project, index) => {
    if (index % 3 === 0) {
      rows.push([project]);
    } else {
      rows[rows.length - 1].push(project);
    }
    return rows;
  }, [] as ProjectType[][]);
}
</script>

<style scoped>
.lead {
  margin-top: 2rem;
  color: rgb(255, 255, 255, 0.8);
  font-size: 0.9rem;
}
</style>
