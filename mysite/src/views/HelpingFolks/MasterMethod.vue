<template>
 <div class="help-mastermethod base-primary min-h-screen">
    <Navbar/>
    <div class="background"></div>

    <div class="content">
        <h1 class="text-3xl text-pink-400 my-8">Master Method Solver</h1>
        <div class="wrapper">
            <div class="form-wrapper">
                <div>Input Format:</div>
                <p class="wide">T(n) = aT(n/b) + &Theta;(n<sup>d</sup>)</p>
                <form name="form" onsubmit="return false">
                    <div class="form-field-wrapper">
                        <label class="form-label" for="a">a:</label>
                        <input class="form-field" type="text" name="a" id="">
                        <label class="form-label opacity-0">a:</label>
                    </div>
                    <div class="form-field-wrapper">
                        <label class="form-label" for="b">b:</label>
                        <input class="form-field" type="text" name="b" id="">
                        <label class="form-label opacity-0">b:</label>
                    </div>
                    <div class="form-field-wrapper">
                        <label class="form-label" for="d">d:</label>
                        <input class="form-field" type="text" name="d" id="">
                        <label class="form-label opacity-0">d:</label>
                    </div>
                    <div class="flex justify-center">
                        <button type="button" @click="solveRecurrence">Submit</button>
                        <button type="reset" @click="clearRecurrence">Clear</button>                    
                    </div>
                </form>
                <p style="margin-bottom: 0.25rem;">Output:</p>
                <div>
                    <div class="wide" id="lgba" ref="lgba"></div>
                    <p class="mt-2 mb-1">Recurrence is:</p>
                    <div class="wide" id="recurrence" ref="recurrence"></div>
                    <p class="mt-2 mb-1">Solution is:</p>
                    <div class="wide" id="solution" ref="solution"></div>
                </div>
            </div>
        </div>

        <section class="mt-6 pt-4 pb-8">
            <div class="block--text" style="margin: 0 auto; max-width: 800px;">
                    <p style="text-align: center;">Just input your things and you're good to go!</p>
                    <p style="text-align: center;">There's no support for funky business with polynomial recurrences or whatnot... sorry about that!</p>

                    <div style="margin-top: 5rem; font-size: 2rem; color: #d39090; text-align: center; font-family: 'Comic Sans MS', cursive;">
                    <i >&lt;3 Cole</i></div>
                </div>
        </section>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            recurrence: "",
            solution: "",
            lgba: ""
        }
    },
    methods: {
        solveRecurrence(){
            var a = parseFloat(document.forms["form"]["a"].value);
            var b = parseFloat(document.forms["form"]["b"].value);
            var d = parseFloat(document.forms["form"]["d"].value);
            var lgba = this.baseLog(b, a);
            let lgbaRounded = lgba.toPrecision(4);
            var res;

            if(lgba < d){
                // result is O(n^d)
                res = `&Theta;(n<sup>${d}</sup>)`;
            } else if(lgba > d){
                // result is O(n ^ lgba)
                res = `&Theta;(n<sup>${lgbaRounded}</sup>)`;
            } else {
                // result is O(n^d * logn)
                res = `&Theta;(n<sup>${d}</sup> * log n)`;
            }

            if(lgba === Infinity) {
                res=`&Theta;(n<sup>&infin;</sup> * log n)`;
                lgbaRounded = "&infin;";
            }
            this.$refs.lgba.innerHTML = `log<sub>b</sub>a = ${lgbaRounded}`;
            this.$refs.recurrence.innerHTML = `T(n) = ${a}T(n/${b}) + &Theta;(n<sup>${d}</sup>)`;
            this.$refs.solution.innerHTML = res;
            return false;
        },

        clearRecurrence(){
            this.$refs.lgba.innerHTML = "";
            this.$refs.recurrence.innerHTML = "";
            this.$refs.solution.innerHTML = "";
        },

        baseLog(a, b){
            return Math.log(b)/Math.log(a);
        }
    },
}
</script>

<style scoped lang='postcss'>
    .wide{
        @apply my-2;
        letter-spacing: 3.3px;
        color: rgb(106, 212, 115);
    }
    body{
        width: 100%;
        overflow-x: hidden;
        background-color: #1b1b1b;
    }
    .text{
        text-align: center; 
        color: #aaa; 
        font-size: 2rem;
    }
    .block--text{
        color: #aaa; 
        font-size: 1.3rem;
        line-height: 1.5rem;
    }
    .wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 80%;
    }
    .form-field-wrapper {
        @apply flex justify-between items-center;
    }
    .form-wrapper{
        padding: 2rem;
        /* color: #fff;  */
        font-size: 1.5rem;
        background-color: rgb(29, 29, 44);
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
    }
    .form-label{
        display: block;
        width: 2ch;
        text-align: right;
    }
    .form-field{
        @apply border-none rounded text-center my-2 mx-4 p-2 text-lg text-teal-800 flex-1;

    }


    a{
        display: block;
        /* font-size: 1.3rem;  */
        font-weight: bold;
        color: rgb(138, 187, 199);
        text-decoration: none;
        transition: 0.5s;
        margin-bottom: 0.5rem;
    }
    a:hover{
        font-size: 1.3rem; 
        color: rgb(125, 149, 197);
        transform: scale(1.25);
    }
    button{
        background-color: #4d769c;
        border: none;
        padding: 0.5rem;
        width: 90px;
        margin: 0.5rem;
        font-weight: bold;
        border-radius: 8px;
        color: #000;
        font-size: 1rem;
    }
    nav{
        display: flex; 
        justify-content: center;
        padding: 1rem;
        background-color: rgb(26, 46, 42);
        box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
    }
</style>
