<template>
  <div class="player-wrapper">
    <div class="player-color"></div>
    <div class="player-image"></div>
    <div class="player-name">
      <p>Sebastian</p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'Player',
  data () {
    return {
      socket: {},
    }
  },
  created () {
    this.socket = io(this.$hostname);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
