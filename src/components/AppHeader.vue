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
  <div class="bg-blue">
    <div>
      <UpperHeader />
    </div>
    <div>
      <LowerHeader />
    </div>
  </div>
</template>

<style scoped>

</style>
