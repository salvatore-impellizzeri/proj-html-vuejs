<script>

export default {
  data() {
    return {

    }
  },
}
</script>

<template>  
  <div class="d-flex gap-2 justify-content-center container-ball">
    <div v-for="(x, i) in 5" class="ball"></div>
  </div>
</template>

<style lang="scss">

.ball{
    width: 8px;
    height: 8px;
    background-color: rgba(128, 128, 128, 0.322);
    border-radius: 50%;
}

.container-ball{
    margin-top: 80px;
}

</style>

