<template>
  <component @nextComponent="changeComponent" :is="selectedComponent"></component>
</template>

<script>
import './css/general.css';
import './css/join.css';
import './css/room.css';
import Join from './components/templates/Join.vue'
import Room from './components/templates/Room.vue'
import Game from './components/templates/Game.vue'
import io from "socket.io-client";

export default {
  name: 'App',
  components: {
    Join,
    Room,
    Game
  },
  data () {
    return {
      socket: {},
      selectedComponent: "Join",
      roomData: {},
    }
  },
  created () {
    this.socket = io('http://192.168.2.104:3030/');
  },
  mounted() {
    this.socket.on("room", (room) => {
      this.roomData = room
      this.selectedComponent = "Room"
    })
  },
  methods: {
    changeComponent (component) {
      this.selectedComponent = component;
    }
  }
}
</script>

<style></style>
