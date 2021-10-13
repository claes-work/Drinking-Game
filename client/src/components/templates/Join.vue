<template>
  <div class="section join">
    <div class="container"></div>
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
    this.socket = io(this.$hostname);
  },
  methods: {
    changeComponent (){
      this.$emit("nextComponent", "Join");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
