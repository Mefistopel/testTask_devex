<template>
  <div>
    <h1>Ваши контакты</h1>
    <p>
      Для успешной записи оставье, пожалуйста, ваши контакты
    </p>

    <div>
      <h3>Имя</h3>
      <input
        v-model="currentClient.clientName"
        type="text"
        class="input"
      >

      <h3>Номер телефона</h3>
      <input
        v-model="currentClient.phoneNumber"
        type="text"
        class="input"
      >
      <div class="sendButton">
        <button
          type="button"
          @click="sendServer"
        >
          ЗАПИСАТЬСЯ
        </button>
      </div>

    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ClientPage',
  data () {
    return {
      currentClient: {
        clientName: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    sendServer () {
      if (this.currentClient.clientName.length == 0) return null
      if (this.currentClient.phoneNumber.length == 0) return null
      this.$store.dispatch('postClient', this.currentClient)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
div {
  display: block;
}
.input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  width: 70%;
  text-align: center;
  -webkit-appearance: textfield;
  background-color: -internal-light-dark-color(white, black);
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 10px;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
.sendButton {
  display: block;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
}
</style>
