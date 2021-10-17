<template>
  <div class="player-wrapper">

  </div>
</template>

<script>
export default {
  name: 'Dice',
  data () {
    return {
      socket: this.$parent.socket,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
