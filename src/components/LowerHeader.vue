<script>

export default {
  data() {
    return {
      
    }
  }
}
</script>

<template> 
  <div>
    <div class="my-container-lower row m-auto">

        <!-- LEFT SIDE -->

        <div class="col-5 text-white left-side">
            <h3 class="fw-bold">Business Planning</h3> 
            <div class="left-title">Digital Technology</div> 
            <h3 class="fw-bold">Modern Solution !</h3>
            <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .</p>


            <!-- BUTTONS LEFT-SIDE -->

            <div class="d-flex gap-3">
                <button class="rose-button">Try It Now</button>
                <button class="blue-button">Explore More</button>
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

        h3, .left-title{
            letter-spacing: -1px;
            font-size: 60px;
            font-family: 'Heebo', sans-serif !important;
        }

        p{
            font-family: 'Raleway', sans-serif !important;
            color: #03A7D3E6;
            font-size: 17px;
            width: 70%;
            margin: 45px 0 55px;
        }
    }

.rose-button, .blue-button{
    padding: 12px 40px;
    border-radius: 30px;
}

}
</style>
