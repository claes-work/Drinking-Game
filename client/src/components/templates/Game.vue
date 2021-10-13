<template>
  <div class="section game">
    <div class="container">
      <p>{{players}}</p>
      <button @click="addPlayer">Push Player</button>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'Game',
  data () {
    return {
      socket: {},
      players: {},
    }
  },
  created () {
    this.socket = io(this.$hostname);
  },
  mounted () {
    // receive players from the server.js
    this.socket.on("players", data => {
      this.players = data
    });
  },
  methods: {
    // add player to the players object
    addPlayer() {
        let playerObject = {
          "name": "Tom",
          "color": "orange",
        }
        // emit the playerObject to the server.js
        this.socket.emit("addPlayer", playerObject)
    }
  },
  changeComponent (){
    this.$emit("nextComponent", "Game");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
