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
    <div :class="i === 0 ? 'col-4 row' : 'col-2'"
      class="text-white container-card bg-blue-315"
      v-for="(card, i) in cards"
      :key="i"
      :style="i === 0 ? { backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}" >
        <div :class="i === 0 ? 'col-6' : ''">
            <p>
                {{ card.date }} <span class="mx-2">&bull;</span> by {{ card.person }}
            </p>
            <h2 class="fw-bold fs-5 mb-4">
                {{ card.title }}
            </h2>
            <p>
                {{ card.description }}
            </p>
        </div>
        <div>
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

        p:first-child{
            margin-bottom: 40px;
        }

        p:last-child{
            margin-bottom: 60px;
        }
    }
}

</style>

