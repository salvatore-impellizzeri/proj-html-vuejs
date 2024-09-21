<script>
import SubscribeFooter from './SubscribeFooter.vue';

export default {
  data() {
    return {
        company: {
            img: '../../src/assets/img/white-logo-2.png',
            slogan: 'When, while lovely valley teems vapour around me and meridian sun strikes the upper impenetrable',
        },
      quickLinks: [
        'Services',
        'Contact',
        'Blog'
      ],
      resources: [
        'Art Design',
        'Computer',
        'IT News',
        'Networking',
        'Web Security'
      ],
      contact: {
        address: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051',
        phone: '+99 (0) 101 0000 888',
        email: 'Info@yourdomain.com'
      }
    }
  },
  
  components: {
    SubscribeFooter,
  },
}
</script>

<template>
    <div class="container-upper-footer">
        <div>
            <SubscribeFooter class="sub-box"/>
        </div>
        <div class="row">

            <!-- COMPANY INFO -->

            <div class="col-3 company-info">
                <div class="mb-5">
                    <img :src="company.img" alt="">
                </div>
                <p>
                    {{ company.slogan }}
                </p>
            </div>

            <!-- QUICK LINK AND RESOURCES -->

            <div class="col-6 row justify-content-between">

                <!-- QUICK LINKS -->
                <div class="col-6">
                    <h5 class="text-white fw-bold mb-4">
                        Quick Links
                    </h5>
                    <ul class="p-0">
                        <a href="">
                            <li v-for="(quickLink, i) in quickLinks" :key="i">
                                {{ quickLink }}
                            </li>
                        </a>
                    </ul>
                </div>
    
                <!-- RESOURCES -->

                <div class="col-6">
                    <h5 class="text-white fw-bold mb-5">
                        Resources
                    </h5>
                    <ul class="p-0">
                        <a href="">
                            <li v-for="(resource, i) in resources" :key="i">
                                {{ resource }}
                            </li>
                        </a>
                    </ul>
                </div>
            </div>


            <!-- CONTACT INFO -->

            <div class="col-3">
                <h5 class="text-white fw-bold mb-5">
                    Contact Us
                </h5>
                <p class="mb-4">
                    <span class="text-white">
                        Address:
                    </span>
                    {{ contact.address }}
                </p>
                <p class="mb-1">
                    <span class="text-white">
                        Phone:
                    </span>
                    {{ contact.phone }}
                </p>
                <p>
                    <span class="text-white">
                        Email:
                    </span>
                    {{ contact.email }}
                </p>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.container-upper-footer{
    padding: 250px 0 100px;
    position: relative;

    .sub-box{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        transform: translateY(-50%)
    }

    .company-info{
        p{
            width: 80%;
        }
    }

    ul{
        list-style: none;

        li{
            margin-bottom: 20px;
            transition: color 0.2s ease-in-out;
        }
    }

    p,
    li{
        font-family: 'Roboto';
        color: rgba(255, 255, 255, 0.479);
    }

    li:hover{
        color: #B6246E;
    }
}

</style>
