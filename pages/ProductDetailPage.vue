<template>
    <div class="z-20 left-0 top-0">
        <IconBar class="-mt-1 pt-3 z-50" /> 
    </div>
    <div class="mt-10 md:mt-12 xl:mt-12">
        <ProductInfo class="z-10"/>
    </div>

</template>
  
<script>
    import IconBar from "../src/components/IconBar.vue";
    import ProductInfo from "../src/components/ProductInfo.vue";

    export default {
        name: 'Info',
        components: {
            IconBar,
            ProductInfo,
        },
        
    }
</script>