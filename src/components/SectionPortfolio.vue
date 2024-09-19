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
    <div class="w-75 m-auto container-titles">
        <p class="color-red fw-medium mb-1">
            Portfolio
        </p>
        <span class="giant-text">
            <span class="fw-bold">latest</span> work
        </span>
    </div>
    
    <div>
      <CarouselItem />
    </div>
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

</style>

