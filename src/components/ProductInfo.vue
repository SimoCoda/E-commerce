<template>
    <div v-if="this.product" class="w-[390px] xl:w-[1920px] md:w-[834px]">
        <img :src=product.image class="w-64 m-auto h-64 mb-9 border-2 border-black xl:w-80 xl:h-80 xl:mb-16 md:h-96 md:w-96" />
        <div class="ml-5 mr-5">
            <h1 class="text-4xl text-center font-bold mb-7 xl:text-6xl xl:text-center xl:mb-10 md:text-6xl md:mb-16 md:text-center">{{product.name}}</h1>
            <h1 class="text-center mb-8 xl:text-2xl xl:text-center xl:mb-10 md:text-2xl md:mb-16 md:text-center">{{product.description}}</h1>
            <h1 class="text-3xl text-center font-bold xl:text-center xl:text-5xl md:text-5xl md:text-center">{{product.price}} €</h1>
        </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 h-16 z-50 md:mb-10 xl:mb-8">
        <BaseButtons title="Add to cart" @click="cartStore.addItemToCart(product)" />
    </div>
</template>

<script>
import axios from "axios"
import BaseButtons from "./BaseButtons.vue";
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router'
import { useCartStore } from '../stores/cartStore';

export default {
    name : "ProductInfo",
    components: {
        BaseButtons
    },
    setup(){
        const product = ref([])
        const route = useRoute()
        const cartStore = useCartStore()

        onMounted(async () => {
            let res = await axios.get(`https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json`)
            const meatName = route.params.name
            let meatFilter = res.data.filter(product => product.name === meatName)
            product.value = meatFilter[0]
        })

        return {product,cartStore}
    },
}
</script>