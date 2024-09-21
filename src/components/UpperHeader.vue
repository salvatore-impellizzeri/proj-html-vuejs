<script>

export default {
  data() {
    return {
        links: [
        {
          label:"Home",
          href:"#",
        },
        {
          label:"About",
          href:"#",
        },
        {
          label:"Services",
          href:"#",
        },
        {
          label:"Blog",
          href:"#",
        },
        {
          label:"Contact",
          href:"#",
        },
        {
          label:"Portfolio",
          href:"#",
        },
      ],
      active: 0,
    }
  }
}
</script>

<template> 
  <div>
    <div class="my-upper-container row m-auto py-4 align-items-center">

        <!-- LOGO IMAGE -->

        <div class="col-6">
            <div>
                <img src="../../src/assets/img/white-logo-2.png" alt="">
            </div>
        </div>

        <!-- LINKS -->

        <div class="col-6 d-flex justify-content-end align-items-center">
            <ul class="d-flex gap-5 m-0 p-0">
                <li v-for="(link, i) in links" :key="i">
                    <a href="#" class="text-white" :class="{ active: i === active }">
                      {{ link.label }}
                    </a>
                </li>
            </ul>

            <!-- SIGN IN BUTTON -->
              <button class="blue-button ms-5">
                <span>
                  Sign In
                </span>
              </button>
              
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.my-upper-container{
    width: 65%;

    .col-6{

        ul{
            font-size: 17px;
            font-weight: 400;
            list-style: none;
            font-family: 'Roboto';
        }
    }
}

.active{
  font-weight: bold;
  color: #F9636B !important;
}


</style>
