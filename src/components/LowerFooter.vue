<script>

export default {
  data() {
    return {
        socials:[
            {
                label: 'Instagram',
                logo:'<i class="fa-brands fa-instagram"></i>',
                url:'#',
            },
            {
                label: 'Linkedin',
                logo:'<i class="fa-brands fa-linkedin-in"></i>',
                url:'#',
            },
            {
                label: 'Facebook',
                logo:'<i class="fa-brands fa-facebook-f"></i>',
                url:'#',
            },
            {
                label: 'Twitter',
                logo:'<i class="fa-brands fa-twitter"></i>',
                url:'#',
            },
        ]
    }
  },
  
  components: {

  },
}
</script>

<template>
  <div class="row m-auto container-lower">
    <div class="col-7">
        <p>
            © 2024 phlox. All rights reserved.
        </p>
    </div>
    <div class="col-5 row justify-content-end">
        <div class="col-1 d-flex justify-content-end p-0 logo" v-for="(social, i) in socials" :key="i">
            <a :href="socials" v-html="social.logo">
            </a>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container-lower{
    padding: 15px 0;
}

p{
    color: rgba(255, 255, 255, 0.479);
}

a{
    color: white !important;
}

a:hover{
    color: #B6246E !important;
}
</style>
