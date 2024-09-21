<script>

export default {
  data() {
    return {
        cards:[
            {
                rating: '3',
                name: 'Michkel Anegl',
                role: 'Marketing Management',
                description: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
                image: '../../src/assets/img/firstperson.png',
            },
            {
                rating: '3',
                name: 'Michkel Anegl',
                role: 'Marketing Management',
                description: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
                image: '../../src/assets/img/secondperson.png',
            },
            {
                rating: '3',
                name: 'Michkel Anegl',
                role: 'Marketing Management',
                description: 'When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand.',
                image: '../../src/assets/img/thirdperson.png',
            },
        ]
    }
  },

  components: {

  }
}
</script>

<template> 
    <div class="container-all-cards row m-auto gap-5 justify-content-center">
        <div v-for="(card, i) in cards" :key="i" class="container-card col-3">

            <!-- BG QUOTE -->

            <div class="bg-quote text-center">
                <i class="fa-solid fa-quote-left m-0"></i>
            </div>
            
            <!-- IMAGE -->

            <div class="img-container m-auto">
                <img :src="card.image" alt="">
            </div>

            <!-- RATING -->

            <div class="text-center rating">
                <span v-for="(star, index) in 5" :key="index">
                    <i :class="index < card.rating ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                </span>
            </div>

            <!-- TEXT -->

            <div class="text-center container-text m-0">
                <p>
                    {{ card.description }}
                </p>
                <div class="fw-bold">
                    {{ card.name }}
                </div>
                <p>
                    {{ card.role }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-all-cards{
    width: 80%;
    margin-top: 170px !important;

    .container-card{
        padding: 110px 40px 20px;
        border-radius: 30px;
        position: relative;
        transition: all 0.2s ease-in-out;

        .bg-quote{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            transform: translate(15px, 40px);
            color: rgba(196, 196, 196, 0.267);
            font-size: 100px;
        }

        .img-container{
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            transform: translateY(-50%);
            width: 110px;
            height: 110px;
            border-radius: 100%;
            border: 5px solid #D6426D;

            img{
                max-width: 100%;
            }
        }

        .container-text{
            font-size: 16px;

            p:first-child{
                margin-bottom: 30px;
            }

            div{
                font-size: 16px;
                margin-bottom: 5px;
                font-family: 'Roboto';
            }
    
            p:last-child{
                font-weight: 500;
                font-size: 14px;
                letter-spacing: 1px;
            }
    
        }
        
        .rating{

            i{
                margin-right: 3px;
                color: #D6426D;
                margin-bottom: 35px;
            }
        }

        &:hover{
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.178);
        }
    }
}
</style>

