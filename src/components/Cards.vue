<template v-if="cardType">
  <div
    id="cards"
    class="text-center mx-4"
  >
    <b-row
      v-for="(row, index1) in cardRows"
      :key="index1"
    >
      <b-col
        v-for="(card, index2) in row"
        :key="index2"
        class="my-3"
        :card="card"
      >
        <div
          v-if="!card.hasOwnProperty('title')"
        />
        <ArticleCard
          v-else-if="cardType === 'ARTICLE'"
          :article="card"
          :on-click="onClick"
        />
        <ProjectCard
          v-else-if="cardType === 'PROJECT'"
          :project="card"
          :on-click="onClick"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ArticleCard from './ArticleCard.vue';
import ProjectCard from './ProjectCard.vue';

@Component({
  components: { ArticleCard, ProjectCard },
})
export default class Cards<T> extends Vue {
  numColumn = -1;

  @Prop() readonly cards!: T[]

  @Prop() readonly onClick!: Function

  @Prop() readonly cardType!: string

  cardRows = Array<Array<T>>(Array<T>());

  async created() {
    this.onResize();
    console.log(this.cards);
    window.addEventListener('resize', this.onResize);
  }

  destroyed() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const width = window.innerWidth;
    let tmp: number;

    if (width < 680) {
      tmp = 1;
    } else if (width >= 680 && width < 992) {
      tmp = 2;
    } else {
      tmp = 3;
    }

    if (tmp !== this.numColumn && this.cards) {
      this.numColumn = tmp;
      this.generateRows();
    }
  }

  generateRows() {
    const emptyCards = [];
    const mod = this.cards.length % this.numColumn;
    if (mod) {
      for (let i = 0; i < this.numColumn - mod; i += 1) {
        emptyCards.push({} as T);
      }
    }

    this.cardRows = this.cards.concat(emptyCards).reduce((rows: T[][], card: T, index: number) => {
      if (index % this.numColumn === 0) {
        rows.push([card]);
      } else {
        rows[rows.length - 1].push(card);
      }
      return rows;
    }, []);
  }
}
</script>

<style>
i {
  margin-left: 0.3rem;
  padding-bottom: 0.2rem;
}

img {
  height: 12rem;
  object-fit: cover;
}

.card {
  cursor: pointer;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title, .card-footer, .display-5 {
  font-family: 'Ubuntu', sans-serif;
}

@media (min-width: 1150px) {
  #cards {
    max-width: 1100px;
    margin: auto !important;
  }
}
</style>
