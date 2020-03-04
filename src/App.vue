<template>
  <div id="app">
    <MainPage
      v-if="!currentSalon"
      msg="Добро пожаловать!"
    />
    <MasterPage v-else-if="currentSalon && !currentWorker" />
    <TimePage v-else-if="currentSalon && currentWorker && !currentTime" />
    <ClientPage v-else-if="currentSalon && currentWorker && currentTime && !isSuccessSendServer" />
    <ResumePage v-else-if="currentSalon && currentWorker && currentTime && isSuccessSendServer" />
  </div>
</template>

<script>

import { mapActions } from 'vuex'

import MainPage from './components/MainPage.vue'
import MasterPage from './components/MasterPage.vue'
import TimePage from './components/TimePage.vue'
import ClientPage from './components/ClientPage.vue'
import ResumePage from './components/ResumePage.vue'


export default {
  name: 'App',
  components: {
    MainPage,
    MasterPage,
    TimePage,
    ClientPage,
    ResumePage
  },
  mounted () {
    this.getSalonList()
    this.getWorkersList()
    this.getTimeList()
  },
  computed: {
    currentSalon () {
      return this.$store.state.currentSalon
    },
    currentWorker () {
      return this.$store.state.currentWorker
    },
    currentTime () {
      return this.$store.state.currentTime
    },
    isSuccessSendServer () {
      return this.$store.state.isSuccessSendServer
    },
  },
  methods: {
    ...mapActions(['getSalonList', 'getWorkersList', 'getTimeList'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
