<template>
  <div class="player-wrapper">
    <div class="player-color" :class="color"></div>
    <div class="player-image"></div>
    <div class="player-name">
      <p>{{playerName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: ['playerName', 'color'],
  data () {
    return {
      socket: this.$parent.socket,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
