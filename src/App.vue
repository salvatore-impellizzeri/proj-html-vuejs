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

<style lang="scss" scoped>
@use 'assets/scss/main.scss' as *;
@import "bootstrap/scss/bootstrap";



</style>

