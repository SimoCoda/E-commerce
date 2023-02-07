<template>
    <div class="z-20 static left-0 top-0 flex">
        <IconBar class="pt-3" /> 
    </div>
    <div class="mt-24">
        <ProductInfo class="z-10" />
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