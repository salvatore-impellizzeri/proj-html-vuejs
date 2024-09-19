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
    <div class="my-container-lower row m-auto">

        <!-- TEXT -->

        <div class="col-6 container-text">
            <TextComp 
            :firstTitle="store.textImg[0].header.text[0].firstBigText"
            :secondTitle="store.textImg[0].header.text[0].secondBigText"
            :thirdTitle="store.textImg[0].header.text[0].thirdBigText"
            :par="store.textImg[0].header.text[0].paragraph"
            />
        </div>

        <!-- IMG -->

        <div class="col-6">
            <div>
                <img src="../../src/assets/img/header.png" alt="">
            </div>
        </div>
</div> 
</template>

<style lang="scss" scoped>

.my-container-lower{
    width: 65%;
    padding-bottom: 180px;
    padding-top: 50px;

    .container-text{
        padding-top: 160px;
    }
}
</style>
