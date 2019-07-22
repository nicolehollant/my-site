<template>
    <div class="navbar">
        <div class="header">
            <div id="hidden-block" class="menu-button"></div>
            <router-link to="/" replace class="header-text">Cole Hollant</router-link>
            <img src="@/assets/hamburger.svg" id="hamburger-menu" class="menu-button cursor-pointer" v-on:click="menuClick">
        </div>
        <transition name="slide">
        <nav class="nav-drawer" v-if="open">
          <h1 class="nav-title">Projects</h1>
          <div id="line"></div>
          <ul class="side-nav">
            <li><router-link to="/" exact class="nav-link" v-on:click.native="dismissMenu">Home</router-link></li>
            <li><router-link to="/TransportApp/TransportAppLanding" exact class="nav-link" v-on:click.native="dismissMenu">Shuttle App</router-link></li>
            <li><a class="nav-link" v-on:click.native="dismissMenu" href="https://www.colehollant.com/SciComFinal">Sci Com Final</a></li>
            <li><a class="nav-link" v-on:click.native="dismissMenu" href="https://www.colehollant.com/OOP">OOP Labs</a></li>
            <li><a class="nav-link" v-on:click.native="dismissMenu" href="https://www.colehollant.com/Stefan">Stefan</a></li>
            <li><router-link to="/GamersPorners/home" exact class="nav-link" v-on:click.native="dismissMenu">WrHr Final</router-link></li>
            <li><a class="nav-link" v-on:click.native="dismissMenu" href="https://www.colehollant.com/MasterMethod">Master Method</a></li>
            <li><a class="nav-link" v-on:click.native="dismissMenu" href="https://www.colehollant.com/graph">Graph Calc</a></li>
            <li><a class="nav-link" v-on:click.native="dismissMenu" href="https://www.colehollant.com/TPP">Twitch/Twitter</a></li>
            <li><a class="nav-link" v-on:click.native="dismissMenu" href="https://www.colehollant.com/ForBrianna">For Brianna</a></li>
            <li><router-link to="/ForPhil/InstructionsForPhil" exact class="nav-link" v-on:click.native="dismissMenu">For Phil</router-link></li>
          </ul>
        </nav>  
        </transition>
        <transition name="fade">
        <div v-if="open">
            <div class="filter" @click="dismissMenu"></div>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
data() {
    return {
        open: false
    }
},
methods: {
    dismissMenu() {
        this.open = false;
    },
    menuClick() {
        this.open = !this.open;
    }
},
}
</script>

<style lang="postcss" scoped>
.navbar {
    --divider-color: rgba(209, 164, 223, 0.75);
    font-family:'Quicksand', sans-serif;
    color: #fcdff5;
    height: 100px;
    background-color: transparent;
    @apply relative w-full;
}
.header, .nav-title {
    font-family: 'Annie Use Your Telescope', cursive;
}
.header {
    border-bottom: 1px solid var(--divider-color);
    width: 72rem;
    max-width: 90%;
    @apply flex flex-row items-center justify-between m-auto pt-6 pb-4;
}
.header-text {
    color: rgb(237, 174, 255);
    font-weight: 600;
    @apply text-4xl inline-block;
}

.menu-button{
    @apply w-10 h-10;
}

.nav-drawer {
    z-index: 10;
    width: 20%;
    min-width: max-content;
    left: 0;
    background-color: #2c1e2cdd;
    box-shadow: 4px 4px 10px -1px  #00000034;
    transition: all 4s cubic-bezier(.25,.8,.25,1) 0.03s;
    @apply fixed top-0 bottom-0 left-0 h-full text-base;
}
.nav-title {
    border-bottom: 1px solid var(--divider-color);
    @apply text-4xl font-bold m-auto pt-6 pb-4 w-2/3;
}
.side-nav {
    background-color: rgba(25, 7, 29, 0.2);
    @apply mt-6 w-full text-left;
}
.nav-link {
    overflow: hidden;
    @apply px-8 py-4 block uppercase;
}
.nav-link:hover {
    background-color: rgba(94, 75, 99, 0.2);
}

.nav-link.router-link-exact-active {
  background-color: #d1b3db50;
}

.filter {
    background-color: rgba(63, 47, 58, 0.55);
    z-index: 1;
    @apply fixed top-0 left-0 w-full h-full;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.slide-enter, .slide-leave-to {
  left: -30%;
}
</style>
