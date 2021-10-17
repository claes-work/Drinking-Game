<template>
  <div class="section game">
    <div class="container">

    </div>
  </div>
</template>

<script>

export default {
  name: 'Game',
  data () {
    return {
      socket: this.$parent.socket,
    }
  },
  methods: {
    changeComponent () {
      this.$emit("nextComponent", "Game");
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
