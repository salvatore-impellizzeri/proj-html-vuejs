<script>
import TitlesSection from './TitlesSection.vue';
import BlogCards from './BlogCards.vue';
import { store } from '../store.js';

export default {
  data() {
    return {
      store
    }
  },

  components: {
    TitlesSection,
    BlogCards,
  }
}
</script>

<template> 
  <div class="container-blog">

    <!-- TITLES -->

    <div>
        <TitlesSection class="text-center text-black"
        :red="store.titles[3].red"
        :bold="store.titles[3].bigger.bold"
        :medium="store.titles[3].bigger.medium"
        :smaller="store.titles[3].smaller" />
    </div>

    <!-- CARDS -->

    <div>
        <BlogCards />
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

.container-blog{
    transform: translate(0, 400px);
}

</style>

