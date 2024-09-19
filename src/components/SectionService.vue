<script>
import SectionCards from './SectionCards.vue';

export default {
  data() {
    return {
      
    }
  },
  components:{
    SectionCards,
  }
}
</script>

<template> 
  <div class="container-service">

    <!-- TITLES -->

    <div class="w-25 m-auto container-titles text-center">
        <p class="color-red fw-medium mb-1">
            Our Services
        </p>
        <span class="giant-text">
            <span class="fw-bold">What</span> We Do
        </span>
        <p>
            When, while the lovely valley teems with vapour around meand the
        </p>
    </div>

    <!-- CARDS -->

    <div class="w-75 m-auto">
        <SectionCards />
    </div>

    <!-- BUTTON -->

    <div class="w-100 d-flex justify-content-center">
      <button class="rose-button rose-button-45 justify-content-center">View All Services</button>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

.container-service{
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

.rose-button{
  border-radius: 30px;
  padding: 15px 50px;
  box-shadow: 0 0 45px #b6246d91;
}

.rose-button:hover{
  box-shadow: 0 0 45px #1caed791;
}

</style>
