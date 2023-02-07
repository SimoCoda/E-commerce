<template>
  <div class="w-full">
    <button class="bg-slate-200 h-12 w-80">{{title}}</button>
  </div>
</template>

<script>
export default {
    name: 'BaseButtons',
    props: ['title'],
}
</script>