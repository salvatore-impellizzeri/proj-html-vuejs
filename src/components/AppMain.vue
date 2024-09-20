<script>
import SectionPortfolio from './SectionPortfolio.vue';
import SectionPrice from './SectionPrice.vue';
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
    SectionPrice,
  }
}
</script>

<template> 
  <div>
    <div class="my-bg-white">
      <SectionService />
    </div>
    <div class="my-bg-blue">
      <SectionStrategy />
    </div>
    <div class="my-bg-white">
      <SectionPortfolio />
    </div>
    <div class="bg-blue-right">
      <SectionPrice />
    </div>
  </div>
</template>

<style scoped>


</style>
