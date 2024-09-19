<script>
import SectionPortfolio from './SectionPortfolio.vue';
import SectionService from './SectionService.vue';
import SectionStrategy from './SectionStrategy.vue';

export default {
  data() {
    return {
      message: ''
    }
  },

  components:{
    SectionService,
    SectionStrategy,
    SectionPortfolio,
  }
}
</script>

<template> 
  <div>
    <div class="my-bg-white">
      <SectionService />
    </div>
    <div class="bg-blue">
      <SectionStrategy />
    </div>
    <div class="my-bg-white">
      <SectionPortfolio />
    </div>
  </div>
</template>

<style scoped>


</style>
