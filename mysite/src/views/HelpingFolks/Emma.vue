<template>
<div class="help-latex">
    <Navbar/>
    <div class="background"></div>

    <div class="content">
        <h1 class="text-2xl font-bold my-2 text-indigo-200">Emma!</h1>
        <div>
            <div class="instruction">
                I love u!
            </div>
            <div class="instruction">
                Every day
            </div>
        </div>
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
.help-latex {
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
    @apply mt-6 mb-12 mx-auto max-w-5xl text-xl text-left px-4 flex flex-col items-center justify-center;
}
a {
    @apply text-pink-500;
}
ul {
    color: #fdcff2;
    border-left: 2px solid rgb(58, 160, 58);
    @apply pl-4 ml-2 leading-loose;
}
.instruction {
  width: max-content;
    @apply my-1 mx-auto text-indigo-400;
}
</style>
