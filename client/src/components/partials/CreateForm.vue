<template>

  <div class="form-wrapper">
    <button @click="showMainMenu">Hauptmenü</button>
    <div class="input-wrapper">
      <div class="input-icon user bc-atts"></div>
      <input type="text" v-model="username" id="username" class="username-input" placeholder="DEIN NAME" />
    </div>
    <span class="error-message" v-if="errorMessage !== ''">{{errorMessage}}</span>
    <button @click="createRoom" class="button join">Raum Erstellen</button>
  </div>

</template>

<script>
export default {
  name: 'CreateForm',
  data () {
    return {
      socket: this.$parent.socket,
      roomCode: '',
      username: '',
      errorMessage: ''
    }
  },
  methods: {
    showMainMenu() {
      this.$parent.showButtonWrapper();
    },
    createRoom() {
      this.socket.emit("createRoom", this.username)
      this.username = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
