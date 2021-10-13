<template>
  <div class="section room">
    <div class="container"></div>
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'Room',
  data () {
    return {
      socket: {},
    }
  },
  created () {
    this.socket = io("http://192.168.0.104:3030/");
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
