<template>
  <b-col>
    <b-card
      :title="title"
      :img-src="imgUrl"
      :img-alt="title"
      img-top
      style="max-width: 20rem;"
    >
      <b-card-text>{{ description }}</b-card-text>
      <b-button
        href="ghUrl"
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

@Component
export default class Project extends Vue {
  @Prop() readonly title!: string;

  @Prop() readonly imgUrl!: string;

  @Prop() readonly description: string | undefined;

  @Prop() readonly ghUrl: string | undefined;
}

</script>
