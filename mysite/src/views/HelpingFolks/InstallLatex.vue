<template>
<div class="help-latex">
    <Navbar/>
    <div class="background"></div>

    <div class="content">
        <h1 class="text-2xl font-bold my-2 text-indigo-200">Latex on Windows</h1>
        <div>
            <div class="instruction">
                Install VS Code: <a href="https://code.visualstudio.com/" target="_blank">here</a>
            </div>
            <div class="instruction">
                Install LaTeX Workshop:
                <ul><li>Run <code class="text-green-300">ext install latex-workshop</code> in VS Code Quick Open (ctrl/cmd + P)</li></ul>  
            </div>
            <div class="instruction">
                Download Ethan's stuff: <a href="http://faculty.bard.edu/bloch/bardtex_files.zip" target="_blank">here</a>
            </div>
            <div class="instruction">
                Regretably install MiKTeK: <a href="https://miktex.org/download">here</a>
                <ul><li>Install that boy--preferably for all users</li></ul>
                <ul><li>Install missing packages on the fly? ask me first</li></ul>
            </div>
            <div class="instruction">
                Aaaand Strawberry Perl: <a href="http://strawberryperl.com/" target="_blank">prob the 64 bit version</a>
                <ul><li>Definitely wanna install that boy</li></ul>
            </div>
            <div class="instruction">
                Install "latexmk" from Packages from MiKTeX
                <ul><li>I then set "installed on-the-fly" to "Never install missing packages on the fly" under MiKTeX settings. </li></ul>
            </div>
            <div class="instruction">
                Then, hopefully just build/view from the "TeX" tab on VS Code!!
                <ul>Build latex project</ul>
                <ul>View latex PDF</ul>
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
    @apply mt-6 mb-12 mx-auto max-w-5xl text-xl text-left px-4;
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
    @apply my-1 text-indigo-400;
}
</style>
