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
  <div>
    <div class="my-container-lower row m-auto">

        <!-- LEFT SIDE -->

        <div class="col-5 text-white left-side">
            <div class="big-titles">
                <h3 class="fw-bold">Business Planning</h3> 
                <div class="left-title">Digital Technology</div> 
                <h3 class="fw-bold">Modern Solution !</h3>
            </div>
            <p class="blue-p">When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .</p>


            <!-- BUTTONS LEFT-SIDE -->

            <div>
                <TwoButtons />
            </div>

        </div>

        <!-- RIGHT SIDE -->

        <div class="col-7">
            <div>
                <img src="../../src/assets/img/header.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.my-container-lower{
    width: 65%;
    padding-bottom: 180px;

    .left-side{
        padding-top: 160px;
    }

.rose-button, .blue-button{
    padding: 12px 40px;
    border-radius: 30px;
}

}
</style>
