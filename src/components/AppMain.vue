<script>
import SectionBlog from './SectionBlog.vue';
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
    SectionBlog,
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
    <div class="bg-blue-right pb-0">
      <SectionPrice />
    </div>
    <div>
      <SectionBlog />
    </div>
  </div>
</template>

<style scoped>

</style>
