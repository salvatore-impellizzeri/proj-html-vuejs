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
    <div class="row w-75 m-auto gap-2 justify-content-center">
        <div class="col-3 container-card text-center" v-for="(card, i) in cards" :key="i">
            <h2>{{ card.title }}</h2>
        </div>
    </div>
</template>

<style lang="scss">

.container-card{
    background-color: white;
    width: 100%;
    border-radius: 20px;
}

</style>

