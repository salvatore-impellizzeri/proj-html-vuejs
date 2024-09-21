<script>

export default {
  data() {
    return {
      
    }
  },
  
  components: {
    
  },
}
</script>

<template>
  <div class="w-100 container-sub row">
    <div class="col-7">
        <h5 class="fw-bold text-white">
            We Offer Awesome Services
        </h5>
        <p class="text-white">
            When, while lovely valley teems with vapour around meand meridian sun strikes the upper surface . 
        </p>
    </div>
    <div class="col-5">
        <form class="input-group mb-3">
            <input type="email" name="email" class="form-control" placeholder="Enter Your Email Address" required aria-describedby="button-addon2">
            <button class="blue-button" type="submit">
                <span>
                    Subscribe
                </span>
            </button>
            </input>
        </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container-sub{
    border-radius: 30px;
    background: linear-gradient(to left, #F8626B, #B5246E);
    padding: 90px 30px;

    h5{
        font-size: 50px;
    }

    .input-group{
        position: relative;

        input{
            border-radius: 40px !important;
            padding: 20px 160px 20px 50px;
            position: relative;
            z-index: 0;
        }

        button{
            z-index: 3;
            padding: 15px 35px;
            position: absolute;
            top: 7px;
            bottom: 7px;
            right: 10px;
        }

        button:hover{
            box-shadow: none;
        }
    }

}

</style>
