<template>
  <div class="form-wrapper join">
    <button @click="showMainMenu">Hauptmenü</button>
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'JoinForm',
  data () {
    return {
      socket: {},
    }
  },
  created () {
    this.socket = io(this.$hostname);
  },
  methods: {
    showMainMenu() {
      this.$parent.showButtonWrapper();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
