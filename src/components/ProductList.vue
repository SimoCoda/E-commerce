<template>
    <div class="columns-2 xl:columns-3 xl:h-98">
        <div v-for="product in products" :key="product.name" class="mb-8">
            <Product :product="product"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Product from './Product.vue';
import {ref, onMounted} from 'vue';

export default {
    name: "ProductList",
    components: {
        Product,
    },
    setup(){
        const products = ref([])

        onMounted(async () => {
            let res = await axios.get(`https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json`)
            products.value = res.data
        })
                
        return {products}
    }
}
</script>