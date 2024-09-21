<script>
import BallCarousel from './BallCarousel.vue';
import CarouselItem from './CarouselItem.vue';
import TitlesSection from './TitlesSection.vue';
import { store } from '../store.js';

export default {
  data() {
    return {
      store
    }
  },

  components: {
    CarouselItem,
    BallCarousel,
    TitlesSection
  }
}
</script>

<template> 
  <div class="w-100">
    <div class="row w-75 m-auto">

      <!-- TITLES -->

      <div class="col-6">
        <TitlesSection class="text-left"
        :red="store.titles[1].red"
        :bold="store.titles[1].bigger.bold"
        :medium="store.titles[1].bigger.medium"
        :smaller="store.titles[1].smaller" />
      </div>

      <!-- BUTTONS CAROUSEL -->

      <div class="col-6 justify-content-end gap-4 d-flex align-items-center">
        <button class="button-carousel-left">
          <span class="arrow">&LeftArrow;</span>
        </button>
        <button class="button-carousel-right">
          <span class="arrow">&RightArrow;</span>
        </button>
      </div>
    </div>

    <!-- CAROUSEL -->

    <div>
      <CarouselItem />
    </div>
    <div>
      <BallCarousel />
    </div>

  </div>
</template>

<style lang="scss" scoped>

.button-carousel-left, .button-carousel-right{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #F9636B;
}

.arrow{
  font-size: 20px;
  color: #F9636B;
  transition: all 0.2s ease-in-out;
}

button:hover{
  border: 0;
  background: linear-gradient(to top, #F8626B, #B5246E);
}

button:hover .arrow{
  color: white;
}

</style>

