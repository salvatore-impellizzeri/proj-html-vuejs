<script>
import TitlesSection from './TitlesSection.vue';
import TestimonialCards from './TestimonialCards.vue';
import { store } from '../store.js';

export default {
  data() {
    return {
       store
    }
  },

  components: {
    TitlesSection,
    TestimonialCards,
  }
}
</script>

<template> 

  <!-- TITLES -->
  
  <div>
    <TitlesSection class="text-center"
        :red="store.titles[4].red"
        :bold="store.titles[4].bigger.bold"
        :medium="store.titles[4].bigger.medium"
        :smaller="store.titles[4].smaller" />
  </div>

  <!-- CARDS -->

  <div>
    <TestimonialCards />
  </div>

</template>

<style lang="scss" scoped>

</style>

