<template>
  <div>
    <b-jumbotron
      header="Projects"
      lead="Personal projects that I found interesting"
    >
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col>
          <b-card
            title="Sort Visualizer"
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
