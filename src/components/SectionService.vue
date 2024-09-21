<script>
import SectionCards from './SectionCards.vue';
import TitlesSection from './TitlesSection.vue';
import { store } from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  components:{
    SectionCards,
    TitlesSection,
  }
}
</script>

<template> 
  <div class="container-service">

    <!-- TITLES -->

    <div>
      <TitlesSection class="text-center"
      :red="store.titles[0].red"
      :bold="store.titles[0].bigger.bold"
      :medium="store.titles[0].bigger.medium"
      :smaller="store.titles[0].smaller" />
    </div>

    <!-- CARDS -->

    <div class="w-75 m-auto">
        <SectionCards />
    </div>

    <!-- BUTTON -->

    <div class="w-100 d-flex justify-content-center mb-4">
      <button class="rose-button rose-button-315 justify-content-center">
        <span>
          View All Services
        </span>
      </button>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

.rose-button{
  padding: 15px 50px;
}

</style>
