<template>
  <div class="home">
    <Navbar/>
    <div class="sketch background-cover" id="sketch"></div>
    <div class="sketch background-cover" id="sketch2"></div>
    <div class="filter background-cover"></div>
    <main class="flex flex-col items-center justify-center max-w-3xl mx-auto w-full h-full">
      <div class="blurb">
        <p>I'm a senior Computer Science and Maths major at <a href="http://www.bard.edu/" target="_blank" rel="noopener noreferrer">Bard College</a></p>
        <p>I love proofs, programming, and playing tunes.</p>
        <p>These days I'm rather busy, but I try to find time for a fun ideas!</p>
      </div>
      <div class="blurb-foot">
        <p><i> Here are some things that I've been working on.</i></p>
        <p><i>Checkout my <a href="https://github.com/colehollant" target="_blank" rel="noopener noreferrer">GitHub</a> for more! </i></p>
        
      </div>
      <div class="grid">
        <a href="http://sproj.colehollant.com"><div class="grid-item"><div class="grid-item-text">Senior Project</div></div></a>
        <a href="https://github.com/colehollant"><div class="grid-item"><div class="grid-item-text">GitHub</div></div></a>
        <router-link to="/MasterMethod"><div class="grid-item"><div class="grid-item-text">Master Method</div></div></router-link>
        <router-link to="/SuperShapes"><div class="grid-item"><div class="grid-item-text">Super Shapes</div></div></router-link>
        <router-link to="/GraphingCalc"><div class="grid-item"><div class="grid-item-text">Graphing Calc</div></div></router-link>
        <router-link to="/help/InstallLatex"><div class="grid-item"><div class="grid-item-text">Install LaTeX</div></div></router-link>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import snow from '@/components/snow.js'
import trees from '@/components/trees.js'
import p5 from 'p5'
export default {
  name: 'home',
  components: {
    Navbar,
  },
  data () {
    return {
      myp5: null,
      myp52: null,
    }
  },
  mounted() {
    this.myp5 = new p5(snow, document.getElementById('sketch'));
    this.myp52 = new p5(trees, document.getElementById('sketch2'));
  },
  beforeDestroy(){
    this.myp5.remove();
    this.myp52.remove();
    this.myp5 = null;
    this.myp52 = null;
  },

}
</script>

<style lang="postcss" scoped>
.home {
  color: #fdcff2;
  font-family:'Quicksand', sans-serif;
  @apply w-full min-h-screen flex flex-col;
}

.background-cover{
  position: fixed;
  left: -5px;
  top: -5px;
  right: -5px;
  bottom: -5px;
}
.sketch {
  filter: blur(2px) saturate(150%);
}

#sketch{
  z-index: -2;
  
}
#sketch2{
  z-index: -3;
  background-color: #352538;
}
.filter{
  z-index: -1;
  background-color: #2f2a30e8;
}

.blurb {
  @apply my-3 text-xl mx-4;
}
.blurb-foot {
  @apply text-2xl leading-tight mb-5 mx-4;
}
a{
  color: rgb(237, 174, 255);
  font-size: 1.05em;
}

.grid {
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 0.75rem;
}
.grid-item {
  color: #ffb9ef;
  border-radius: 12px;
  /* background-color: rgba(13, 54, 73, 0.75); */
  background-color: rgba(59, 12, 51, 0.6);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  @apply flex items-center justify-center w-full h-full cursor-pointer px-4 pt-3 pb-5 text-lg shadow-lg;
}
.grid-item:hover{
  background-color: rgba(63, 24, 56, 0.6);
  box-shadow: 0 10px 15px -3px rgba(65, 3, 59, 0.1), 0 4px 6px -2px rgba(85, 5, 78, 0.1);
}
.grid-item .grid-item-text{
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.grid-item:hover .grid-item-text{
  transform: scale(0.8);
}

@media only screen and (min-width: 800px) {

.grid-item {
  @apply px-8 pt-6 pb-10;
}

.grid {
  grid-auto-rows: minmax(135px, auto);
  grid-gap: 1rem;
}

.blurb {
  @apply my-6 text-2xl mx-0;
}

.blurb-foot {
  @apply text-3xl leading-tight mb-10 mx-0;
}

.filter{
  background-color: #2f2a30d5;
}

}
</style>
