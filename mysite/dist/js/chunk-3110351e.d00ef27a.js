(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3110351e"],{"0f93":function(t,s,a){},2396:function(t,s,a){},5975:function(t,s,a){"use strict";var e=a("0f93"),n=a.n(e);n.a},d178:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"header"},[e("div",{staticClass:"menu-button",attrs:{id:"hidden-block"}}),e("router-link",{staticClass:"header-text",attrs:{to:"/",replace:""}},[t._v("Cole Hollant")]),e("img",{staticClass:"menu-button cursor-pointer",attrs:{src:a("eab1"),id:"hamburger-menu"},on:{click:t.menuClick}})],1),e("transition",{attrs:{name:"slide"}},[t.open?e("nav",{staticClass:"nav-drawer"},[e("h1",{staticClass:"nav-title"},[t._v("Projects")]),e("div",{attrs:{id:"line"}}),e("ul",{staticClass:"side-nav"},[e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"/",exact:""},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Home")])],1),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"https://sproj.colehollant.com"},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Sproj")])]),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"https://www.colehollant.com/SciComFinal"},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Sci Com Final")])]),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"/TransportApp/TransportAppLanding",exact:""},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Shuttle App")])],1),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"https://oop.colehollant.com"},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("OOP Labs")])]),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"https://www.colehollant.com/Stefan"},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Stefan")])]),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"/GamersPorners/home",exact:""},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("WrHr Final")])],1),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"/MasterMethod",exact:""},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Master Method")])],1),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"/GraphingCalc",exact:""},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Graphing Calc")])],1),e("li",[e("a",{staticClass:"nav-link",attrs:{href:"https://www.colehollant.com/TPP"},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Twitch/Twitter")])]),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:"/help/InstallLatex",exact:""},nativeOn:{click:function(s){return t.dismissMenu(s)}}},[t._v("Install Latex")])],1)])]):t._e()]),e("transition",{attrs:{name:"fade"}},[t.open?e("div",[e("div",{staticClass:"filter",on:{click:t.dismissMenu}})]):t._e()])],1)},n=[],i={data:function(){return{open:!1}},methods:{dismissMenu:function(){this.open=!1},menuClick:function(){this.open=!this.open}}},r=i,l=(a("dd4c"),a("2877")),c=Object(l["a"])(r,e,n,!1,null,"ef673b9a",null);s["a"]=c.exports},d8df:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"help-mastermethod base-primary min-h-screen"},[a("Navbar"),a("div",{staticClass:"background"}),a("div",{staticClass:"content"},[a("h1",{staticClass:"text-3xl text-pink-400 my-8"},[t._v("Master Method Solver")]),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"form-wrapper"},[a("div",[t._v("Input Format:")]),t._m(0),a("form",{attrs:{name:"form",onsubmit:"return false"}},[t._m(1),t._m(2),t._m(3),a("div",{staticClass:"flex justify-center"},[a("button",{attrs:{type:"button"},on:{click:t.solveRecurrence}},[t._v("Submit")]),a("button",{attrs:{type:"reset"},on:{click:t.clearRecurrence}},[t._v("Clear")])])]),a("p",{staticStyle:{"margin-bottom":"0.25rem"}},[t._v("Output:")]),a("div",[a("div",{ref:"lgba",staticClass:"wide",attrs:{id:"lgba"}}),a("p",{staticClass:"mt-2 mb-1"},[t._v("Recurrence is:")]),a("div",{ref:"recurrence",staticClass:"wide",attrs:{id:"recurrence"}}),a("p",{staticClass:"mt-2 mb-1"},[t._v("Solution is:")]),a("div",{ref:"solution",staticClass:"wide",attrs:{id:"solution"}})])])]),t._m(4)])],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"wide"},[t._v("T(n) = aT(n/b) + Θ(n"),a("sup",[t._v("d")]),t._v(")")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-field-wrapper"},[a("label",{staticClass:"form-label",attrs:{for:"a"}},[t._v("a:")]),a("input",{staticClass:"form-field",attrs:{type:"text",name:"a",id:""}}),a("label",{staticClass:"form-label opacity-0"},[t._v("a:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-field-wrapper"},[a("label",{staticClass:"form-label",attrs:{for:"b"}},[t._v("b:")]),a("input",{staticClass:"form-field",attrs:{type:"text",name:"b",id:""}}),a("label",{staticClass:"form-label opacity-0"},[t._v("b:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-field-wrapper"},[a("label",{staticClass:"form-label",attrs:{for:"d"}},[t._v("d:")]),a("input",{staticClass:"form-field",attrs:{type:"text",name:"d",id:""}}),a("label",{staticClass:"form-label opacity-0"},[t._v("d:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"mt-6 pt-4 pb-8"},[a("div",{staticClass:"block--text",staticStyle:{margin:"0 auto","max-width":"800px"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v("Just input your things and you're good to go!")]),a("p",{staticStyle:{"text-align":"center"}},[t._v("There's no support for funky business with polynomial recurrences or whatnot... sorry about that!")]),a("div",{staticStyle:{"margin-top":"5rem","font-size":"2rem",color:"#d39090","text-align":"center","font-family":"'Comic Sans MS', cursive"}},[a("i",[t._v("<3 Cole")])])])])}],i=a("d178"),r={components:{Navbar:i["a"]},data:function(){return{recurrence:"",solution:"",lgba:""}},methods:{solveRecurrence:function(){var t,s=parseFloat(document.forms["form"]["a"].value),a=parseFloat(document.forms["form"]["b"].value),e=parseFloat(document.forms["form"]["d"].value),n=this.baseLog(a,s),i=n.toPrecision(4);return t=n<e?"&Theta;(n<sup>".concat(e,"</sup>)"):n>e?"&Theta;(n<sup>".concat(i,"</sup>)"):"&Theta;(n<sup>".concat(e,"</sup> * log n)"),n===1/0&&(t="&Theta;(n<sup>&infin;</sup> * log n)",i="&infin;"),this.$refs.lgba.innerHTML="log<sub>b</sub>a = ".concat(i),this.$refs.recurrence.innerHTML="T(n) = ".concat(s,"T(n/").concat(a,") + &Theta;(n<sup>").concat(e,"</sup>)"),this.$refs.solution.innerHTML=t,!1},clearRecurrence:function(){this.$refs.lgba.innerHTML="",this.$refs.recurrence.innerHTML="",this.$refs.solution.innerHTML=""},baseLog:function(t,s){return Math.log(s)/Math.log(t)}}},l=r,c=(a("5975"),a("2877")),o=Object(c["a"])(l,e,n,!1,null,"64c431ae",null);s["default"]=o.exports},dd4c:function(t,s,a){"use strict";var e=a("2396"),n=a.n(e);n.a},eab1:function(t,s,a){t.exports=a.p+"img/hamburger.7202daf2.svg"}}]);
//# sourceMappingURL=chunk-3110351e.d00ef27a.js.map