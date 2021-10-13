<template>
  <div class="section join">
    <div class="container">

      <div class="button-wrapper" v-if="buttonWrapper">
        <button @click="showCreateForm">Spiel erstellen</button>
        <button @click="showJoinForm">Spiel beitreten</button>
      </div>

      <CreateForm v-if="createForm"></CreateForm>
      <JoinForm v-if="joinForm"></JoinForm>

    </div>
  </div>
</template>

<script>
import CreateForm from '../partials/CreateForm.vue'
import JoinForm from '../partials/JoinForm.vue'
import io from "socket.io-client"
export default {
  name: 'Join',
  components: {
    CreateForm,
    JoinForm,
  },
  data () {
    return {
      socket: {},
      buttonWrapper: true,
      createForm: false,
      joinForm: false,
    }
  },
  created () {
    this.socket = io(this.$hostname);
  },
  methods: {
    changeComponent (){
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
