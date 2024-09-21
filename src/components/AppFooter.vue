<script>
import UpperFooter from './UpperFooter.vue';
import LowerFooter from './LowerFooter.vue';

export default {
  data() {
    return {
      
    }
  },
  
  components: {
    UpperFooter,
    LowerFooter,
  },
}
</script>

<template>
  <div>
    <div class="footer-set">
      <UpperFooter />
    </div>
    <hr>
    <div class="footer-set">
      <LowerFooter />
    </div>
  </div>
</template>

<style scoped>

.footer-set{
    width: 65%;
    margin: auto;
}

hr{
    height: 1px;
    color: rgba(128, 128, 128, 0.479);
}
</style>
