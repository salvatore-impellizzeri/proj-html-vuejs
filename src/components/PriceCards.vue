<script>

export default {
  data() {
    return {
        cards:[
            {
                title: "Designing",
                desc: "process",
                price: "40",
                time: "Per Month",
                utilities: [
                    {
                        bold: "Creative",
                        normal: "Design Enabled",
                    },
                    {
                        bold: "Vibrant",
                        normal: "Color Usage",
                    },
                    {
                        bold: "Eye",
                        normal: "Catching Design",
                    },
                    {
                        bold: "Extreme",
                        normal: "Typography",
                    },
                    {
                        bold: "Exceptional",
                        normal: "Design",
                    },
                ]
            },
            {
                title: "Developing",
                desc: "prodcut",
                price: "60",
                time: "Per Month",
                utilities: [
                    {
                        bold: "Creative",
                        normal: "Design Enabled",
                    },
                    {
                        bold: "Vibrant",
                        normal: "Color Usage",
                    },
                    {
                        bold: "Eye",
                        normal: "Catching Design",
                    },
                    {
                        bold: "Extreme",
                        normal: "Typography",
                    },
                    {
                        bold: "Exceptional",
                        normal: "Design",
                    },
                ]
            },
            {
                title: "Supporting",
                desc: "clients",
                price: "80",
                time: "Per Month",
                utilities: [
                    {
                        bold: "Creative",
                        normal: "Design Enabled",
                    },
                    {
                        bold: "Vibrant",
                        normal: "Color Usage",
                    },
                    {
                        bold: "Eye",
                        normal: "Catching Design",
                    },
                    {
                        bold: "Extreme",
                        normal: "Typography",
                    },
                    {
                        bold: "Exceptional",
                        normal: "Design",
                    },
                ]
            },
        ],
    }
  },
}
</script>

<template>  
    <div class="row container-all-cards m-auto gap-3 justify-content-center">

        <!-- CARD -->

        <div class="col-3 container-card p-5 text-center text-black" :class="{'rose-315 text-white': i === 1}" v-for="(card, i) in cards" :key="i">

            <!-- BG PRICE -->

            <div class="bg-price">
                {{ card.price }}
            </div>

            <!-- TITLE -->

            <h2 :class="{'family': i === 1}">
                {{ card.title }}
            </h2>

            <!-- CARD DESCRIPTION -->

            <p class="mt-3 fw-medium">
                {{ card.desc }}
            </p>

            <!-- PRICE -->

            <div class="price-container">
                <span class="dollar fw-medium">$</span>
                <div class="price">
                    {{ card.price }}
                </div>
            </div>

            <!-- SUBSCRIPTION -->

            <div class="time fw-medium">
                {{ card.time }}
            </div>

            <!-- UTILITIES -->

            <div class="container-abilities mb-5">
                <div v-for="(utility, index) in card.utilities" :key="index" class="mb-3">
                    <span class="fw-bold">
                        {{ utility.bold }} 
                    </span>
                    <span>
                        {{ utility.normal }}
                    </span>
                </div>
            </div>

            <!-- BUTTON -->

            <button :class="{'white-button': i === 1, 'rose-button rose-button-top': i !== 1}">
                <span class="fw-bold">
                    Order Now
                    <i class="fas fa-long-arrow-alt-right" :class="i === 1 ? 'text-rose' : 'text-white'"></i> 
                </span>
            </button>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>

.rose-315{
  background: linear-gradient(315deg, #F8626B, #B5246E);
}

.container-all-cards{
    width: 82%;

    .container-card{
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        background-color: white;
        border-radius: 30px;
        position: relative;
        z-index: 0;
        overflow: hidden;
        transition: all 0.1s ease-in-out;
        
        .bg-price{
            color: rgba(151, 151, 151, 0.178);
            position: absolute;
            top: -160px;
            right: -40px;
            font-weight: bold;
            font-family: 'Open Sans';
            font-size: 350px;
            z-index: -1;
        }

        h2{
            font-weight: bold;
            letter-spacing: -2px;
            font-size: 50px
        }

        p{
            text-transform: uppercase;
            letter-spacing: 1px
        }

        .price-container{
            position: relative;
            width: 120px;
            margin: auto;

            .dollar{
                position: absolute;
                top: 0;
                left: 0;
            }

            .price{
                font-size: 90px;
                font-weight: bold;
                font-family: 'Montserrat';
            }
        }

        .container-abilities{
            span{
                margin-right: 5px;
            }
        }

        .time{
            font-size: 15px;
            font-family: 'Montserrat';
            margin-bottom: 55px;
        }

        button{
            padding: 13px 20px 13px 34px;

            &:hover{
                background-color: white;
            }

            span, i{
                font-size: 16px;
            }
            
            i{
                margin-left: 65px;
            }
        }
    
    }
}

.text-rose{
    color: #F8626B !important;
}

.family{
    font-family: 'Raleway' !important;
    letter-spacing: -4px !important;
}
</style>

