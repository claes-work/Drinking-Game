<template>
  <div class="section room">
    <div class="container">
      <Player></Player>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"
import Player from "../partials/Player";

export default {
  name: 'Room',
  components: {
    Player,
  },
  data () {
    return {
      socket: {},
    }
  },
  created () {
    this.socket = io(this.$hostname);
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
