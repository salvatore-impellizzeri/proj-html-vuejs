<script>

export default {
  data() {
    return {

    }
  },

  props:{
    red: String,
    bold: String,
    medium: String,
    smaller: String,
  },
}
</script>

<template>  
    <div class="container-titles">
        <p class="color-red fw-medium mb-1">
            {{ red }}
        </p>
        <span class="giant-text">
            <span class="fw-bold">{{ bold }}</span> {{ medium }}
        </span>
        <p class="w-25 m-auto fw-medium">
            {{ smaller }}
        </p>
    </div>
</template>

<style lang="scss">

.container-titles{
    margin: 0 auto 90px;
  p{
      font-size: 16px;
  }

  .giant-text{
      font-size: 50px;
      letter-spacing: -2px;
      font-family: 'Heebo', sans-serif;
    }
}


</style>

