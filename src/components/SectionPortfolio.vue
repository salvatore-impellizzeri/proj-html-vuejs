<script>
import CarouselItem from './CarouselItem.vue';


export default {
  data() {
    return {

    }
  },

  components: {
    CarouselItem
  }
}
</script>

<template> 
  <div class="w-100">
    <div class="d-flex">
      <div class="w-75 m-auto container-titles">
        <p class="color-red fw-medium mb-1">
            Portfolio
        </p>
        <div class="d-flex justify-content-between">
          <span class="giant-text">
            <span class="fw-bold">latest</span> work
          </span>
          <div class="gap-4 d-flex align-items-center">
            <button class="button-carousel-left">
              <span class="arrow">&LeftArrow;</span>
            </button>
            <button class="button-carousel-right">
              <span class="arrow">&RightArrow;</span>
            </button>
          </div>
        </div>
      </div>
    <div>
  </div>  
    </div>
      <CarouselItem />
    </div>
</template>

<style lang="scss">

.container-titles{
  p{
      font-size: 16px;
  }

  .giant-text{
      font-size: 50px;
      color: black;
      letter-spacing: -2px;
      font-family: 'Heebo', sans-serif;

    }
  }

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

