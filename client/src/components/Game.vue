<template>
  <div></div>
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
    this.socket = io("http://192.168.0.104:3030/");
  },
  mounted () {
    // receive players from the server.js
    this.socket.on("players", data => {
      this.players = data
    });
  },
  methods: {
    // add player to the players object
    addPlayer(playerObject) {
      // emit the playerObject to the server.js
      this.socket.emit("addPlayer", playerObject);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
