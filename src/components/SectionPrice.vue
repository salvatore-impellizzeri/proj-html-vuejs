<script>
import TitlesSection from './TitlesSection.vue';
import PriceCards from './PriceCards.vue';
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  components:{
    TitlesSection,
    PriceCards
  }
}
</script>

<template> 
  <div class="container-price">

    <!-- TITLES -->

    <div>
      <TitlesSection class="text-center text-white"
      :red="store.titles[2].red"
      :medium="store.titles[2].bigger.medium"
      :smaller="store.titles[2].smaller" />
    </div>

    <!-- CARDS -->
    <div>
        <PriceCards />
    </div>

  </div>
</template>

<style lang="scss" scoped>

.rose-button{
  padding: 15px 50px;
}


</style>
