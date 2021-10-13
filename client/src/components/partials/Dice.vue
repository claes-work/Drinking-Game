<template>
  <div class="player-wrapper">

  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'Dice',
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
