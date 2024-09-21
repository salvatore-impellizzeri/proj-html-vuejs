<script>
import TitlesSection from './TitlesSection.vue';
import TestimonialCards from './TestimonialCards.vue';
import { store } from '../store.js';

export default {
  data() {
    return {
       store,
       clients: [
        {
          img:'../../src/assets/img/client-1-1.png',
          label:'Golden',
        },
        {
          img:'../../src/assets/img/clienty-2.png',
          label:'Sweety Cafeteria',
        },
        {
          img:'../../src/assets/img/clienty-4.png',
          label:'Fastlane',
        },
        {
          img:'../../src/assets/img/client-5.png',
          label:'Mighty Furnitures',
        },
        {
          img:'../../src/assets/img/clienty-3.png',
          label:'Jack Roller',
        },
       ]
    }
  },

  components: {
    TitlesSection,
    TestimonialCards,
  }
}
</script>

<template> 
  <div class="container-section">
    <!-- TITLES -->
    
    <div>
      <TitlesSection class="text-center"
          :red="store.titles[4].red"
          :bold="store.titles[4].bigger.bold"
          :medium="store.titles[4].bigger.medium"
          :smaller="store.titles[4].smaller" />
    </div>
  
    <!-- CARDS -->
  
    <div class="cards">
      <TestimonialCards />
    </div>
  
    <!-- CLIENTS -->
  
    <div class="clients row m-auto align-items-center justify-content-center gap-2">
      <div class="col-2 d-flex justify-content-center" v-for="(client, i) in clients" :key="i">
        <img :src="client.img" :alt="client.label">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container-section{
  padding-bottom: 200px;
}

.clients{
  width: 80%;
}

.cards{
  margin-bottom: 150px;
}

</style>

