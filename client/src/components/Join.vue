<template>
  <div>

  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'Join',
  data () {
    return {
      socket: {},
    }
  },
  created () {
    this.socket = io("http://192.168.0.104:3030/");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
