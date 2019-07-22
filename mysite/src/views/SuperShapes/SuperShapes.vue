<template>
<div class="supershapes base-primary">
    <Navbar class="z-10"/>
    <div class="background"></div>
    <div id="sketch"></div>
    <div class="content">
        <div id="mode-selector">change mode</div>
        <div class="overlay">
            <p class="text">Super Shapes</p>
        </div>
    </div>
</div>
</template>

<script>
import supershape from '@/views/SuperShapes/supershapes'
import p5 from 'p5'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Navbar,
    },
    data() {
        return {
            sketch: null,
            key: 0
        }
    },
    mounted(){
        this.sketch = new p5(supershape, document.getElementById('sketch'));
    },
    beforeDestroy(){
        this.sketch.remove();
        this.sketch = null;
    },

}
</script>

<style lang="postcss" scoped>
    .supershapes{
        max-height: 100vh;
        height: 100vh;
        width: 100%;
        overflow-x: hidden;
    }
    .overlay {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .text{
        padding: 1rem;
        text-align: center; 
        color: #aaa; 
        font-size: 2rem;
    }
    .bottom{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    a{
        display: block;
        font-size: 1.3rem; 
        color: rgb(115, 132, 168);
        text-decoration: none;
        transition: 0.5s;
    }
    a:hover{
        font-size: 1.3rem; 
        color: rgb(125, 149, 197);
        transform: scale(1.25);
    }
    #sketch{
        z-index: 0;
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }
    #mode-selector{
        z-index: 20;
        cursor: pointer;
        position: fixed;
        right: 1rem;
        top: 50%;
        bottom: 0;
        width: fit-content;
        height: fit-content;
        padding: 0.5rem 1rem;
        color: rgb(158, 252, 255);
        background-color: rgba(30, 128, 95, 0.7);
        border-radius: 8px;
        transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    #mode-selector:hover{
        background-color: rgba(30, 128, 95, 0.4);
    }
</style>

