<template>
  <div class="form-wrapper">
    <button @click="showMainMenu">Hauptmenü</button>
    <div class="input-wrapper">
      <div class="input-icon home bc-atts"></div>
      <input type="text" v-model="roomCode" id="room-code" class="room-code-input" placeholder="RAUM CODE" />
    </div>
    <div class="input-wrapper">
      <div class="input-icon user bc-atts"></div>
      <input type="text" v-model="username" id="username" class="username-input" placeholder="DEIN NAME" />
    </div>
    <span class="error-message" v-if="errorMessage !== ''">{{errorMessage}}</span>
    <button @click="joinRoom" class="button join">Raum Beitreten</button>
  </div>
</template>

<script>
export default {
  name: 'JoinForm',
  data () {
    return {
      socket: this.$parent.socket,
      roomCode: '',
      username: '',
      errorMessage: '',
    }
  },
  mounted () {
    this.socket.on("error", (message) => {
      this.errorMessage = message;
    })
  },
  methods: {
    showMainMenu () {
      this.$parent.showButtonWrapper ();
    },
    joinRoom () {
      this.socket.emit("joinRoom", {
        "roomCode": this.roomCode.toUpperCase(),
        "username": this.username.toUpperCase(),
      })
      this.roomCode = ''
      this.username = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
