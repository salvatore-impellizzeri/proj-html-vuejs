<script>

export default {
  data() {
    return {
        cards:[
            {
                date: 'April 21, 2019',
                person: 'Paul',
                title: 'Amazon gets CCI nod to acquire 49% stake in',
                description: 'When, while the lovely valley teems with vapor around me, and the meridian sun s ...',
                image: '../../src/assets/img/headway-537308-unsplash-1380x703.jpg',
            },
            {
                date: 'April 21, 2019',
                person: 'Paul',
                title: 'Clearing Corporations get SEBI nod to invest in overnight funds',
                description: 'When, while the lovely valley teems with vapor around me, and the meridian sun s ...',
                image: '',
            },
            {
                date: 'April 21, 2019',
                person: 'Paul',
                title: 'Shabnam Dhillion, wife of RSSB chief Gurinder Dhillon, passes away in London',
                description: 'When, while the lovely valley teems with vapor around me, and the meridian sun s ...',
                image: '',
            },
        ]
    }
  },

  components: {

  }
}
</script>

<template> 
  <div class="row container-all-cards m-auto justify-content-center gap-5">
    <div :class="i === 0 ? 'col-4 row align-items-end ps-5 pe-3 bg-img-dark' : 'col-2 bg-blue-315'"
      class="text-white container-card"
      v-for="(card, i) in cards"
      :key="i">
        <div :class="i === 0 ? 'col-8' : ''">
            <p :class="i === 0 ? 'mb-3' : ''">
                {{ card.date }} <span class="mx-2">&bull;</span> by {{ card.person }}
            </p>
            <a href="">
                <h2 class="fw-bold fs-5 text-white" :class="i === 0 ? 'mb-3' : 'mb-4'">
                    {{ card.title }}
                </h2>
            </a>
            <p :class="i === 0 ? 'mb-0' : ''">
                {{ card.description }}
            </p>
        </div>
        <div :class="i === 0 ? 'col-4 d-flex justify-content-end' : ''">
            <button class="white-button-hover">
                <span>
                    Read More
                </span>
            </button>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-all-cards{
    width: 90%;

    .container-card{
        border-radius: 30px;
        padding: 70px 55px 30px;
        transition: all 0.4s ease-in-out;

        &:hover{
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.281);
        }

        p:first-child{
            margin-bottom: 40px;
        }

        p:last-child{
            margin-bottom: 60px;
        }
    }
}

.bg-img-dark{
    background: transparent;
}

.bg-img-dark{
    position: relative;
}

.bg-img-dark::before{
    z-index: -1;
    content: '';
    border-radius: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/headway-537308-unsplash-1380x703.jpg');
    background-size: cover;
    filter: brightness(0.7);
}

</style>

