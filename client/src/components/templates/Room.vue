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
