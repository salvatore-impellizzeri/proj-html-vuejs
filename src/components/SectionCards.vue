<script>

export default {
  data() {
    return {
      cards:[
        {
            title:"Data Analysis",
            description:"When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            img:"../../src/assets/img/Group-247.png",
        },
        {
            title:"SEO Optimization",
            description:"When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            img:"../../src/assets/img/Group-567.png",
        },
        {
            title:"Security Data",
            description:"When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            img:"../../src/assets/img/Group-538.png",
        },
        {
            title:"Branding Strategy",
            description:"When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            img:"../../src/assets/img/Group-566.png",
        },
      ]
    }
  },
}
</script>

<template> 
  <div class="text-center container-cards p-0 row">
    <div class="col-3 single-card p-0" v-for="(card, i) in cards" :key="i">

        <!-- IMAGE -->

        <div class="img-container m-auto mb-5">
            <img :src="card.img" alt="">
        </div>

        <!-- TEXT -->

        <div class="box-text-card">
            <h2 class="fw-bold fs-3 mb-4">
                {{ card.title }}
            </h2>
            <p class="m-auto desc">
                {{ card.description }}
            </p>
        </div>

        <!-- BUTTON -->

        <button class="arrow-button rose-button rose-button-normal">
            <span>
                <i class="fa-solid fa-arrow-right"></i>
            </span>
        </button>
        
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container-cards{
    margin: auto;
    width: 77%;

    .single-card{
        position: relative;

        .img-container{
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            border-radius: 30px;
            width: 238px;
            height: 238px;
            padding: 40px;
            transition: all 0.4s ease-in-out ;
        
            img{
                max-width: 100%;
            }
        }
        
        .box-text-card{
            position: relative;
            color: #000000D4;
            margin-top: calc(238px / 2);
            padding: 150px 0 70px;
            border-radius: 30px;
            transition: all 0.4s ease-in-out;
    
            .desc{
                width: 70%;
                background-color: transparent;
            }
        }

        .arrow-button{
            border: 0;
            opacity: 0;
            width: 60px;
            height: 60px;
            border-radius: 100%;
            padding: 10px;
            color: white;
            transform: translate(0, -50%);
            transition: all 0.4s ease-in-out;

            .fa-arrow-right{
                font-size: 20px;
            }
        }
    }
}

.single-card:hover .img-container{
    background-color: white;
    box-shadow: 0px 0px 40px rgba(111, 113, 141, 0.411);
}

.box-text-card::after,
.box-text-card::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    transition: opacity 0.4s ease-in-out;
}

.box-text-card::before{
    background: linear-gradient(#183271, #020231);
    color: white;
    opacity: 0;
}

.box-text-card::after{
    background-color: white;
    opacity: 1;
}

.single-card:hover .box-text-card::after{
    opacity: 0;
}

.single-card:hover .box-text-card::before{
    opacity: 1;
}

.box-text-card *{
    position: relative;
    z-index: 1;
}

.single-card:hover .box-text-card{
    color: white;
}

.single-card:hover .arrow-button{
    opacity: 1;
}

</style>
