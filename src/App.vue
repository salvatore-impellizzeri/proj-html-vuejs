<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template> 
  <div>
    <AppHeader />
  </div>
  <div>
    <AppMain />
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";

.bg-blue{
  background: linear-gradient(#0B1953, #01012F);
  min-height: 600px;
}

.my-bg-white{
  background-color: white;
  padding: 80px 0;
}


</style>

