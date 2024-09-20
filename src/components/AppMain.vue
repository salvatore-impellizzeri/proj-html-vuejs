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
    <div class="bg-blue">
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

.bg-blue{
  background: linear-gradient(#0B1953, #01012F);
  min-height: 600px;
}

.bg-blue-right{
  padding: 80px 0 60px;
  background: linear-gradient(to right, #0B1953, #01012F);
  min-height: 600px;
}

.my-bg-white{
  background-color: white;
  padding: 80px 0 60px;
}

</style>
