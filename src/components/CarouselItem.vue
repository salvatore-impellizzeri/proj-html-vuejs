<script>

export default {
  data() {
    return {
        works:[
            {
                img: '../../src/assets/img/8wa60okr-1-790x576.jpg',
                title: 'Basket of Flower on table',
                desc: 'Branding Strategy',
            },
            {
                img: '../../src/assets/img/DRY-1-790x576.jpg',
                title: 'Purinky Products',
                desc: 'Digital Experience',
            },
            {
                img: '../../src/assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Satisfy Poster',
                desc: 'Branding Strategy',
            },
            {
                img: '../../src/assets/img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
                title: 'Mock-up Template',
                desc: 'Ecommerce',
            },
            {
                img: '../../src/assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                title: 'Landing Page',
                desc: 'Digital Experience',
            },
        ]   
    }
  },

  components: {

  }
}
</script>

<template> 
  <div class="d-flex gap-5 conteiner-all-items">
    <div class="container-item" v-for="(work, i) in works" :key="i">
        <div class="img-container">
            <a href="">
                <img :src="work.img" alt="">
            </a>
        </div>
        <div class="text-box d-flex justify-content-between align-items-center">
            <a href="">
                <h2>
                    {{ work.title }}
                </h2>
            </a>
            <a href="">
                <p>
                    {{ work.desc }}
                </p>
            </a>
        </div>
    </div>
  </div>
</template>

<style lang="scss">

.conteiner-all-items{
    overflow-x: hidden;
    padding: 90px 0 40px;

    .container-item{
        cursor: grab;
        border-radius: 30px;
        box-shadow: 0px 10px 40px #bdbdbd77;
        transition: all 0.2s ease-in-out;
    
        .img-container{
            border-radius: 30px;
            
            img{
                border-radius: 30px;
                width: 520px;
            }
        }

        h2{
            color: black;
            font-size: 20px;
            font-weight: bold;
            padding: 25px 30px;
            transition: all 0.2s ease-in-out;
        }

        p{
            font-weight: 200;
            color: #AAAAAA;
            padding-right: 30px;
        }
    }

    .container-item:hover {
        background: linear-gradient(to left, #F8626B, #B5246E);
    }

    .container-item:hover h2{
        color: white;
    }

    .container-item:hover p{
        color: #E0E0E0;
    }
}
</style>

