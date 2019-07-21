<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      width=200
    >
      <v-list dense>
        <v-list-tile @click="routeTo('')">
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cole Hollant</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="switchPage('main')">
          <v-list-tile-action>
            <v-icon>mdi-bus-clock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bus App</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="switchPage('landing')">
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title id="appBar">Big Bard Shuttle</v-toolbar-title>
    </v-toolbar>

    <main id="mainContent">
    <section id="landingPage">
    <v-content v-if="page=='landing'">
      <v-container fluid fill-height d-flex>
          <v-layout id="containerLayout">
          <v-carousel 
              hide-delimiters
              :style="{'max-width': '40vh'}"
              height="auto"
          >
            <v-carousel-item
                v-for="(item,i) in imageList"
                :key="i"
                :src="item.src"
            ></v-carousel-item>
        </v-carousel>        
            <div id="cardDiv">
                <v-layout column justify-center id="mainLayout">
                    <v-card class="py-2 px-3" tile> 
                        <h3>Coming Soon?</h3>
                        <p :style="{'color': '#bbb'}">
                            Big Bard Shuttle is a mobile app developed in Flutter by me! <br>
                            I saw the old Bard Transport App on iOS (and iOS only...), and I thought that it was high time that it gets updated. That being said, I know not how the shuttle works, and there isn't anyone else on the project, so it has some issues. <br>
                            I guess I want to make this a web app for it too.
                        </p>
                        <h4 :style="{'font-size': '1.2em', 'color':'#ddd', 'margin':0}">Known Issues</h4>
                        <ul>
                            <li :style="{'color': '#aaa'}">There's no distinction between northbound and southbound routes</li>
                            <li :style="{'color': '#aaa'}">There's no weekend schedule</li>
                            <li :style="{'color': '#aaa'}">There's no way to adjust for shuttle updates (weather, holiday, etc)</li>
                        </ul>
                    </v-card>
                    <v-card class="mt-3 py-2 px-3" tile> 
                        <h3>Help Me!</h3>
                        <p :style="{'color': '#bbb'}">
                            Please super-subscribe on my Patreon to get all the benefits. Make sure to like, share, and subscribe to make sure that I keep working on this.
                        </p>
                    </v-card>
                    <v-card class="mt-3 py-2 px-3" tile> 
                        <h3>Please.</h3>
                        <p :style="{'color': '#bbb'}">
                            I just don't know how long I can do this. I have taken the shuttle maybe ten times? Is it illegal to do wifi/bluetooth sniffing to try and peep how many people are aound? Do I get in trouble if I throw one of those Tiles on the bus to track its location?? I need to figure these things out and reformat the JSON.    
                        </p>
                    </v-card>
                </v-layout>
            </div>
          </v-layout>
      </v-container>
    </v-content>
    </section>

    <section id="mainPage">
    <v-content v-if="page=='main'">
      <img src="./assets/ShuttlePic.jpg" id="mainBackground">
      <div id="mainBackgroundFilter"></div>
      <v-container fluid fill-height style="z-index: 2; padding: 8px;">
          <v-layout column id="containerLayout">        
            <section>
                <v-card id="clock"><h1 style="font-weight: bolder; color: #21a028; margin: 0;">{{convertTime(now.getHours(), now.getMinutes())}}</h1></v-card>
                <v-layout d-flex wrap justify-center align-content-center id="mainLayout">
                    <div @click="showModal(item)" v-for="(item,i) in shuttleStops"
                      :key="i" style="margin: auto;">
                    <v-card id="shuttleStopTile" style="cursor: pointer" tile>
                      <h3>{{ item.stop }}</h3>
                      <h4 id="cardH4" v-if="item.times_weekday_north && item.times_weekday">N: {{convertTime2(nextTimeNorth(item))}}<br>S: {{convertTime2(nextTimeSouth(item))}}</h4>
                      <h4 id="cardH4" v-else-if="item.times_weekday">S: {{convertTime2(nextTimeSouth(item))}}</h4>
                      <h4 id="cardH4" v-else>N: {{convertTime2(nextTimeNorth(item))}}</h4>
                    </v-card>
                    </div>
                </v-layout>
            </section>
          </v-layout>
      </v-container>
    </v-content>
    </section>
    </main>

    <div v-if="modalUp" id="modalContainer">
      <div id="modalBlur" @click="hideModal()"></div>
      <v-container fluid fill-height align-center justify-center>
      <v-card id="modalBody" class="pa-0">
        <h1 style="color: #000; padding: 0.3em 0 0.2em; background-color: #fcfcfc; margin: 0">{{selectedStop.stop}}</h1>
          <v-layout row v-if="selectedStop.times_weekday_north && selectedStop.times_weekday">
            <v-layout column style="margin: 0">
              <h4 id="modalSubHead">North</h4>
              <p v-for="(item,i) in selectedStop.times_weekday_north" :key="i">
                {{convertTime2(item)}}
              </p>
            </v-layout>
            <v-layout column style="margin: 0">
              <h4 id="modalSubHead">South</h4>
              <p v-for="(item,i) in selectedStop.times_weekday" :key="i">
                {{convertTime2(item)}}
              </p>
            </v-layout>
          </v-layout>
          <v-layout v-else-if="selectedStop.times_weekday_north" column style="margin: 0">
            <h4 id="modalSubHead">North</h4>
            <p v-for="(item,i) in selectedStop.times_weekday_north" :key="i">
                {{convertTime2(item)}}
              </p>
          </v-layout>
          <v-layout v-else column style="margin: 0">
            <h4 id="modalSubHead">South</h4>
            <p v-for="(item,i) in selectedStop.times_weekday" :key="i">
                {{convertTime2(item)}}
              </p>
          </v-layout>
      </v-card>
      </v-container>
    </div>
   
  </v-app>
</template>

<script>

  export default {
    data: () => {
        return {
      drawer: null,
      page: null,
      now: new Date(),
      modalUp: false,
      selectedStop: null,
      times: require('./assets/ShuttleTimesDirection.json'),
      imageList: [
        {
          src: require('./static/Shuttle1.png')
        },
        {
          src: require('./static/Shuttle2.png')
        },
        {
          src: require('./static/Shuttle3.png')
        },
        {
          src: require('./static/Shuttle4.png')
        }
      ]
    
        }
    },
    computed: {
      shuttleStops: function(){
        var stops = this.times.master.shuttle_times;
        for (var i = 0; i < stops.length; i++) {
          var stop = stops[i].stop;
          if (stop == "Red Hook Northbound (MHV Credit RT 9)") {
            stops[i].stop = "Red Hook Northbound";
          }
          else if (stop == "Red Hook Southbound (Village Hall RT 9)") {
            stops[i].stop = "Red Hook Southbound";
          }
        }
        return stops;
      },
      now: function(){
        return Date.now();
      }
    },
    props: {
      source: String
    },
    mounted () {
      // this.page = "landing";
      this.page="main";
    },
    methods: {
        navigate(str){
        window.open(str, '_blank');
        },
        routeTo(str) {
        this.$router.replace({ path: `/${str}` });
        },
        switchPage(str){
          this.page = str;
        },
        nextTimeNorth(item){
          if(item.times_weekday_north != null){
            let today = item.times_weekday_north.find(function(e){
              let eTime = new Date();
              eTime.setTime(Date.now());
              eTime.setHours(e.slice(0,-3), e.slice(-2));
              // let eTime2 = new Date();
              // eTime2.setTime(Date.now());
              // eTime2.setHours(11);
              return eTime> Date.now();
            });
            if(today != null){
              return today;
            }
            else{
              return item.times_weekday_north[0];
            }
          }
          else{
            return -1;
          }
        },
        nextTimeSouth(item){
          if(item.times_weekday != null){
            let today = item.times_weekday.find(function(e){
              let eTime = new Date();
              eTime.setTime(Date.now());
              eTime.setHours(e.slice(0,-3), e.slice(-2));
              return eTime> Date.now();
            });
            if(today != null){
              return today;
            }
            else{
              return item.times_weekday[0];
            }
          }
          else{
            return -1;
          }
        },
        showModal(stop){
          this.modalUp = true;
          this.selectedStop = stop;
          document.querySelector("#mainContent").classList.add('blurry');
        },
        hideModal(){
          this.modalUp = false;
          document.querySelector("#mainContent").classList.remove('blurry');
        },
        convertTime(hour, minute, addZero){
          let hr = hour;
          let merid = 'am';
          let min = minute;
          if(hour == 0){
            hr = 12;
          }
          else if(hour > 12){
            hr = hour-12;
            merid = 'pm';
          }
          if(minute < 10 && addZero){
            min = `0${minute}`;
          }
          return `${hr}:${min} ${merid}`
        },
        convertTime2(time){
          if(time == null){
            return 'Tomorrow!';
          }
          let hour = time.slice(0,-3);
          let minute = time.slice(-2);
          return this.convertTime(hour, minute, false);
        }
    }
  }
</script>

<style scoped>
body, html, #app{
  font-size: 1.5em;
}
p, ul{
  color: #cfdfcf;
  font-size: 1.5em;
}
#cardDiv{
/* max-width: 100%; */
display: flex;
margin: 16px 0;
flex: 4 4 auto;
}
#mainLayout{
align-content: center;
}
#containerLayout{
flex-direction: column;
margin: auto;
}
.v-carousel{
margin: auto;
}
.carouselWrapper {
  width: 300px;
  height: 600px;
  padding: 50px;
  text-align: center;
}
#cardH4{
  font-size: 1.2em; 
  color:#ddd; 
  margin:0;
}
#clock{
  width: 98%;
  font-size: 0.8rem;
  font-weight: bolder;
  margin: 0 auto 0.25em;
  text-align: center;
  padding: 0.5em;
  background-color: rgba(9, 9, 14, 0.671);
}
#shuttleStopTile{
  text-align: center;
  background-color: rgba(29, 29, 36, 0.671);
  margin: 0.2rem;
  padding: 0.5rem;
  font-size: 0.8rem;
}

#modalContainer{
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#modalBlur{
  background-color: rgba(0, 0, 0, 0.74);
  position: absolute;
  top: -10px;
  left: -10px;
  width: 110%;
  height: 110%;
  z-index: 5;
  filter: blur(5px);
}
#modalBody{
  z-index: 6;
  margin-top: 1em;
  height: 80%;
  width: 75%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 2em;
  position:fixed;
  overflow-y:scroll;
  overflow-x:hidden;
}
.fixed-content {
    top: 0;
    bottom:0;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
}
.blurry{
  filter: blur(4px);
  width: 100%;
  height: 100%;
}
#modalSubHead{
  color: rgb(82, 82, 82);
  /* text-decoration: underline rgb(131, 131, 131); */
  margin: 0 0 0.25em;
  font-size: 1.7em;

  z-index: 6;
  /* margin-top: 1em; */
  /* height: 80%; */
  /* width: 30%; */
  text-align: center;
  background-color: rgb(244, 244, 244);
  width: 1fr;
  /* padding: 2em; */
  position:sticky;
  top: 0;
}
#mainBackground{
  z-index: 0;
  width: 100%;
  height: 100%;
  filter: blur(6px);
  position: fixed;
  left: 0;
  top: 0;
}
#mainBackgroundFilter{
  z-index: 0;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(2, 5, 15, 0.65);
}

#appBar{
  display: flex;
  justify-content: center;
}
/************************************************
**************************************************
***
***     Media Query 1000px
***
***
***
***
**********************************************
**********************************************/
@media only screen and (min-width: 350px) {
#clock{
  font-size: 1rem;
  margin: 0 auto 0.25em;
  padding: 0.5em;
}
#shuttleStopTile{
  margin: 0.2rem;
  padding: 0.5rem;
  font-size: 1rem;
}
}
@media only screen and (min-width: 400px) {
#clock{
  font-size: 1rem;
  margin: 0 auto 0.25em;
  padding: 0.5em;
}
#shuttleStopTile{
  margin: 0.4rem;
  padding: 0.75rem;
  font-size: 1rem;
}
}
@media only screen and (min-width: 1400px) {
  #cardDiv{
      max-width: calc(100% - 40vh);
      /* margin: 0px 0 0 16px; */
      margin-left: 1em;
  }

  #mainPage{
    margin: 0;
  }

  #mainLayout{
  align-content: left;
  }
  #containerLayout{
  flex-direction: row;
  }



  #modalSubHead{
  color: rgb(82, 82, 82);
  /* text-decoration: underline rgb(131, 131, 131); */
  margin: 0 0 0.25em;
  font-size: 1.7em;

  z-index: 6;
  /* margin-top: 1em; */
  /* height: 80%; */
  /* width: 30%; */
  text-align: center;
  background-color: rgb(244, 244, 244);
  width: 1fr;
  /* padding: 2em; */
  position:sticky;
  top: 0;
}

#cardH4{
  font-size: 1.2em; 
  color:#ddd; 
  margin:0;
}
#clock{
  width: 280px;
  font-weight: bolder;
  margin: 0 auto .75em;
  text-align: center;
  padding: 0.5em;
  background-color: rgba(9, 9, 14, 0.671);
  font-size: 2.5em;
}
#shuttleStopTile{
  text-align: center;
  background-color: rgba(29, 29, 36, 0.671);
  margin: 0.4em;
  padding: 1em 0.5em;
  font-size: 2.0em;
}
#modalContainer{
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#modalBlur{
  background-color: rgba(0, 0, 0, 0.74);
  position: absolute;
  top: -10px;
  left: -10px;
  width: 110%;
  height: 110%;
  z-index: 5;
  filter: blur(5px);
}
#modalBody{
  z-index: 6;
  margin-top: 1em;
  height: 80%;
  width: 30%;
  text-align: center;
  background-color: rgba(82, 85, 95, 0.9);
  padding: 2em;
  position:fixed;
  overflow-y:scroll;
  overflow-x:hidden;
}
}
</style>
