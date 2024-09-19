<script>
import SectionService from './SectionService.vue';

export default {
  data() {
    return {
      message: ''
    }
  },

  components:{
    SectionService,
  }
}
</script>

<template> 
  <div>
    <div class="bg-service">
      <SectionService />
    </div>
  </div>
</template>

<style scoped>
.bg-service{
  background-color: white;
}
</style>
