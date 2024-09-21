<script>

export default {
  data() {
    return {

    }
  },
  
  props: {
    currentIndex: Number,
    cardWidth: Number,
  },

  methods: {
    ballSelection(i) {
      if (i < 3) {
        this.$emit('updateIndex', i);
      }
      else{
        this.$emit('updateIndex', 3)
      }
    }
  }
}
</script>

<template>  
  <div class="d-flex gap-2 justify-content-center container-ball">
    <div v-for="(x, i) in 5" class="ball" @click="ballSelection(i)"></div>
  </div>
</template>

<style lang="scss">

.ball{
    cursor: pointer;
    width: 8px;
    height: 8px;
    background-color: rgba(128, 128, 128, 0.322);
    border-radius: 50%;
}

.container-ball{
    margin-top: 80px;
}

</style>

