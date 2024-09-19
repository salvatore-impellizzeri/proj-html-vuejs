<script>
import TwoButtons from './TwoButtons.vue';

export default {
  data() {
    return {
      
    }
  },
  components:{
    TwoButtons,
  }
}
</script>

<template> 
  <div class="container-strategy m-auto">
    <div class="row px-0">

      <!-- LEFT SIDE -->

      <div class="col-6 pe-5 d-flex justify-content-center">
          <div class="img-container">
              <img class="top-img" src="../../src/assets/img/men-data.png" alt="">
              <img class="bg-img" src="../../src/assets/img/nemoodar.png" alt="">
          </div>
      </div>

      <!-- RIGHT SIDE -->

      <div class="col-6 ps-5 text-white">
        <p class="fw-semibold mb-4">Start Your Project</p>
        <div class="big-titles">
          <h3 class="fw-bolder">Grow Your Business</h3>
          <h3 class="fw-normal">With Our Strategy</h3>
        </div>

        <p class="blue-p">When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
        
        <!-- BUTTONS RIGHT SIDE -->

        <div>
          <TwoButtons />
        </div>
      </div>


    </div>
  </div>
</template>

<style lang="scss" scoped>

.container-strategy{
  width: 65%;
  padding: 180px 0 105px;
}

.img-container{
  width: 55%;
  position: relative;
}

.top-img{
  z-index: 1;
  position: relative;
}

.bg-img{
  z-index: 0;
  position: absolute;
  top: -50px;
  left: -50px;
}

</style>
