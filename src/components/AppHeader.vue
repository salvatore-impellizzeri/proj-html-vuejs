<script>
import UpperHeader from './UpperHeader.vue';
import LowerHeader from './LowerHeader.vue';

export default {
  data() {
    return {
      
    }
  },
  
  components: {
    UpperHeader,
    LowerHeader,
  },
}
</script>

<template>
  <div class="bg-color">
    <div>
      <UpperHeader />
    </div>
    <div>
      <LowerHeader />
    </div>
  </div>
</template>

<style scoped>

.bg-color{
  background: linear-gradient(#0B1953, #01012F);
  min-height: 600px;
}

</style>
