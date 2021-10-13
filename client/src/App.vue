<template>
  <component @nextComponent="changeComponent" :is="selectedComponent"></component>
</template>

<script>
import './css/general.css';
import Join from './components/Join.vue'
import Room from './components/Room.vue'
import Game from './components/Game.vue'
import io from "socket.io-client";

export default {
  name: 'App',
  components: {
    Join,
    Room,
    Game,
  },
  data () {
    return {
      selectedComponent: "Room"
    }
  },
  created () {
    this.socket = io("http://192.168.0.104:3030/");
  },
  methods: {
    changeComponent (component){
      this.selectedComponent = component;
    }
  }
}
</script>

<style></style>
