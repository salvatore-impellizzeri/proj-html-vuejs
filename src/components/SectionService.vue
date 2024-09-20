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
      <button class="rose-button rose-button-45 justify-content-center">View All Services</button>
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
