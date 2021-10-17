<template>
  <div class="section wooden">
    <div class="container flex">
      <div class="poster bc-atts">
        <div class="knop left bc-atts"></div>
        <div class="knop right bc-atts"></div>
        <h3>RAUM CODE</h3>
        <h2>{{roomCode}}</h2>
        <div class="divider"></div>
        <h3>SPIELER INFORMATIONEN</h3>
        <div class="player-container">
          <Player v-for="(player, index) in players" :key="index" :playerName="player.username" :color="player.color"/>
        </div>
        <div class="button-wrapper">
          <div class="button green">SPIEL STARTEN</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Player from "../partials/Player";

export default {
  name: 'Room',
  components: {
    Player
  },
  data () {
    return {
      socket: this.$parent.socket,
      roomObject: {},
      roomCode: '',
      players: []
    }
  },
  mounted() {
    this.roomObject = this.$parent.roomData
    this.roomCode = this.$parent.roomData.roomCode
    this.players = this.$parent.roomData.playersArray
  },
  methods: {
    changeComponent (){
      this.$emit("nextComponent", "Room");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
