<template>
  <div class="help-graphingcalc base-primary min-h-screen">
    <Navbar/>
    <div class="background"></div>

    <div class="content">

      <div class="m-auto">
        <div id="sketchborder">
          <div id="sketch"></div>
        </div>
      </div>

      <div class="controls">
        <div class="control-wrapper">
          <label for="expression" class="control-label">Formula</label>
          <input type="text" name="expression" id="expression" class="control">
        </div>
        <div class="range-wrapper">
          <div class="control-wrapper">
            <label for="xMin" class="control-label">X-Min</label>
            <input type="text" name="xMin" id="xMin" class="control" value="-10">
          </div>
          <div class="control-wrapper">
            <label for="xMax" class="control-label">X-Max</label>
            <input type="text" name="xMax" id="xMax" class="control" value="10">
          </div>
          <div class="control-wrapper">
            <label for="yMin" class="control-label">Y-Min</label>
            <input type="text" name="yMin" id="yMin" class="control" value="-10">
          </div>
          <div class="control-wrapper">
            <label for="yMax" class="control-label">Y-Max</label>
            <input type="text" name="yMax" id="yMax" class="control" value="10">
          </div>
        </div>
        <div class="control-wrapper">
          <label for="samplerate" class="control-label">Sample Rate</label>
          <input type="text" name="samplerate" id="samplerate" class="control">
        </div>
        <p class="w-full my-4 mx-auto text-pink-200 text-lg">
          Quick note: the ranges don't totally work properly, but it's close enough and I have to study
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import p5 from 'p5'
import graphingcalc from '@/views/HelpingFolks/GraphingCalc/graphingcalc.js'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
  data: () => {
    return {
      myp5: null
    }
  },
  mounted() {
    this.myp5 = new p5(graphingcalc, document.getElementById('sketch'));
  }
}
</script>


<style scoped lang='postcss'>
.content {
  @apply text-center w-full m-auto flex flex-col items-center justify-center;
}
#sketchborder, #sketch {
  @apply rounded;
}
#sketchborder{
  @apply p-2 mt-4 mx-0 mb-2;
  background: linear-gradient(155deg, rgb(117, 42, 81) 30%, rgb(88, 33, 87) 70%);
}
#sketch{
  min-width: calc(300px - 3rem);
  min-height: calc(300px - 3rem);
  width:  calc(100vw - 6rem);
  height: calc(100vw - 6rem);
  max-width: 700px;
  max-height: 700px;
}
.controls {
  width: 300px;
  @apply m-auto max-w-full;
}
.range-wrapper{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 0.5rem));
  grid-column-gap: 1rem;
}
.control{
  box-shadow: rgba(104, 0, 95, 0.2) 4px 4px 10px -1px;
  color: #ffb9ef;
  background-color: rgba(59, 12, 33, 0.6);
  font-family: 'Courier New', Courier, monospace;
  @apply p-3 text-center rounded;
}
.control-wrapper {
  @apply flex flex-col;
}
.control-label{
  color: rgb(222, 196, 240);
  @apply text-lg text-left font-bold mt-2 mb-1;
}
/**************************************************
***
***     Media Query 1200px
***
***
***
***
**********************************************
**********************************************/
@media only screen and (min-width: 1200px) {
.content {
  max-width: 1200px;
  @apply m-auto w-full flex flex-row items-center justify-center;
}
#sketch{
  width: 700px;
  height: 700px;
  margin: auto;
}
}
</style>
