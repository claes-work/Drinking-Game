<template>
  <div class="section wooden">
    <div class="container flex">
      <div class="poster bc-atts">
        <div class="knop left bc-atts"></div>
        <div class="knop right bc-atts"></div>

      <div class="button-wrapper-join" v-if="buttonWrapper">
        <button @click="showCreateForm" class="button join big">Spiel erstellen</button>
        <button @click="showJoinForm" class="button join big">Spiel beitreten</button>
      </div>

      <CreateForm v-if="createForm"></CreateForm>
      <JoinForm v-if="joinForm"></JoinForm>

      </div>
    </div>
  </div>
</template>

<script>
import CreateForm from '../partials/CreateForm.vue'
import JoinForm from '../partials/JoinForm.vue'
export default {
  name: 'Join',
  components: {
    CreateForm,
    JoinForm,
  },
  data () {
    return {
      socket: this.$parent.socket,
      buttonWrapper: true,
      createForm: false,
      joinForm: false,
    }
  },
  methods: {
    changeComponent () {
      this.$emit("nextComponent", "Join");
    },
    showCreateForm() {
      this.createForm = true
      this.buttonWrapper = false
    },
    showJoinForm() {
      this.joinForm = true
      this.buttonWrapper = false
    },
    showButtonWrapper() {
      this.createForm = false
      this.joinForm = false
      this.buttonWrapper = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
