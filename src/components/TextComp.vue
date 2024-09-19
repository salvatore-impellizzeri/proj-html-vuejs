<script>
import TwoButtons from './TwoButtons.vue';


export default {
  data() {
    return {

    }
  },
  components:{
    TwoButtons,
  },

  props:{
    firstTitle: String,
    secondTitle: String,
    thirdTitle: String,
    par: String,
  },
}
</script>

<template> 
  <div>

    <div class="text-white">
        <div class="big-titles">
            <h3 class="fw-bold">{{ firstTitle }}</h3> 
            <div class="left-title">{{ secondTitle }}</div> 
            <h3 class="fw-bold">{{ thirdTitle }}</h3>
        </div>
        <p class="blue-p">{{ par }}</p>

        <!-- BUTTONS -->

        <div>
            <TwoButtons />
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.rose-button, .blue-button{
  padding: 12px 40px;
  border-radius: 30px;
}

</style>
