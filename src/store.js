import { reactive } from "vue";

export const store = reactive({
    textImg:[
        {
            header:{
                text:[
                    {
                        firstBigText: "Business Planning",
                        secondBigText: "Digital Technology",
                        thirdBigText:"Modern Solution !",
                        paragraph: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .",
                    }
                ],
    
                button:[
                    {
                        firstButton: "Try It Now",
                        secondButton: "Explore More",
                    }
                ],

                img: "../../src/assets/img/header.png",
            },

            strategy:{
                text:[
                    {
                        firstBigText: "Grow Your Business",
                        secondBigText: "With Our Strategy",
                        thirdBigText:"",
                        paragraph: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface .of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,",
                    }
                ],
    
                button:[
                    {
                        firstButton: "Try It Now",
                        secondButton: "Explore More",
                    }
                ],

                img:[
                    {
                        firstImg: "../../src/assets/img/men-data.png",
                        secondImg: "../../src/assets/img/nemoodar.png",
                    }
                ] 
            }
        },
    ]
});