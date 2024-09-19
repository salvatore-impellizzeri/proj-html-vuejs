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

    <div class="row w-75 m-auto">
        <SectionCards />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container-service{
    padding: 80px 0;

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
