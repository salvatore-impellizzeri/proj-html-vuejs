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
  <div class="container-footer">
    <div>
      <UpperFooter />
    </div>
    <div>
      <LowerFooter />
    </div>
  </div>
</template>

<style scoped>

.container-footer{
    width: 65%;
    margin: auto;
}

</style>
