<template>
  <div class="w-full xl:w-[1920px] md:w-[834px]">
    <button class="h-12 w-80 first-line xl:text-2xl md:text-2xl text-white bg-slate-400 hover:bg-slate-800">{{title}}</button>
  </div>
</template>

<script>
export default {
    name: 'BaseButtons',
    props: ['title'],
}
</script>