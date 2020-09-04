<template>
  <div>
    <b-jumbotron
      header="projects"
      header-level="5"
      lead="Here are some projects that I worked on freetime."
    >
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col>
          <b-card
            title="Sort Visualizer"
            img-src="../assets/pyqt_sort_preview.gif"
            img-alt="Sort Visualizer"
            img-top
          >
            <b-card-text>
              Built using PyQt5, the program visualizes 9 different sorting algorithms.
            </b-card-text>
            <b-button
              href="https://github.com/zzandland/pyqt-sort"
              target="_blank"
              variant="primary"
            >
              <i class="fab fa-github"></i> View source code
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Projects extends Vue {}

</script>
