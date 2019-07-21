<template>
<div class="not-found">
    <Navbar/>
    <div class="background"></div>

    <div class="content">
        <h1 class="text-3xl font-bold my-2 text-indigo-200">404</h1>
        <h2 class="text-2xl font-bold my-2 text-indigo-300">I hope you find what you're looking for</h2>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
components: {
    Navbar,
},
}
</script>

<style lang="postcss" scoped>
.not-found {
  color: #fdcff2;
  font-family:'Quicksand', sans-serif;
  @apply w-full min-h-screen flex flex-col;
}
.background {
    z-index: -1;
    background-color: #352538;
    @apply fixed top-0 left-0 w-full h-screen;
}
.content {
    @apply mt-6 mx-auto max-w-5xl text-center;
}
</style>
