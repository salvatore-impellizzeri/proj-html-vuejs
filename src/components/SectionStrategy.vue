<script>
import { store } from '../store.js';
import TextComp from './TextComp.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components:{
    TextComp,
  }
}
</script>

<template> 
  <div class="container-strategy m-auto">
    <div class="row px-0">

      <!-- IMG -->
       
      <div class="col-6">
        <div class=" d-flex justify-content-center">
          <div class="img-container">
              <img class="top-img" src="../assets/img/men-data.png" alt="">
              <img class="bg-img" src="../assets/img/nemoodar.png" alt="">
          </div>
        </div>
      </div>

      <!-- TEXT -->

      <div class="col-6 text-white ps-5">
        <p class="fw-semibold mb-4">Start Your Project</p>
        <TextComp 
          :firstTitle="store.textImg[0].strategy.text[0].firstBigText"
          :secondTitle="store.textImg[0].strategy.text[0].secondBigText"
          :thirdTitle="store.textImg[0].strategy.text[0].thirdBigText"
          :par="store.textImg[0].strategy.text[0].paragraph"
          />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container-strategy{
  width: 70%;
  padding: 180px 0 105px;
}

.img-container{
  width: 50%;
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
