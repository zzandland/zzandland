<template>
  <div>
    <b-jumbotron
      header="projects"
      header-level="5"
      lead="Here are some projects that I worked on free time."
    />
    <Cards
      :card-type="type"
      :cards="projects"
      :on-click="openTab"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cards from './Cards.vue';
import projects from '../data';

@Component({
  components: { Cards },
})
export default class Projects extends Vue {
  projects = projects;

  type = 'PROJECT';

  openTab(url: string) {
    window.open(url);
  }
}
</script>

<style>
</style>
