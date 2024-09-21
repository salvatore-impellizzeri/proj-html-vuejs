<script>

export default {
  data() {
    return {
      clickedBall: 0,
    }
  },
  
  props: {
    currentIndex: Number,
    cardWidth: Number,
  },

  watch:{
    currentIndex(newIndex) {
      this.clickedBall = newIndex;
    },
  },

  methods: {
    ballSelection(i) {
      if (i < 3) {
        this.clickedBall = i;
        this.$emit('updateIndex', i);
      }
      else{
        this.clickedBall = 2
        this.$emit('updateIndex', 2)
      }
    }
  }
}
</script>

<template>  
  <div class="d-flex gap-2 justify-content-center container-ball">
    <div v-for="(x, i) in 5" class="ball" @click="ballSelection(i)">
      <div class="ball-rose" :class="{ 'active': i <= 3 && i === clickedBall }"></div>
    </div>
  </div>
</template>

<style lang="scss">

.ball-rose{
  border-radius: 50%;
  background-color: #B6246E;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  transition: all 0.2s ease-in-out;
}

.active{
  transform: translateY(0);
}

.ball{
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 10px;
  height: 10px;
  background-color: rgba(128, 128, 128, 0.322);
  border-radius: 50%;
}

.container-ball{
    margin-top: 80px;
}

</style>

