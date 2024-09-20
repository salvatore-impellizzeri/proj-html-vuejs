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
  border-radius: 30px;
  padding: 15px 50px;
  box-shadow: 0 0 45px #b6246d91;
}

.rose-button:hover{
  box-shadow: 0 0 45px #1caed791;
}

</style>
