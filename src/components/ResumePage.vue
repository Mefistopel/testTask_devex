<template>
  <div>
    <h1>Ваша запись</h1>
    <p>
      Поздравляем!
      <br>
      Вы успешно записаны в фитнес-зал по адресу: <b>{{ getNameCurrentSalon }}</b>
      <br>
      к мастеру <b>{{ getNameCurrentWorker }}</b>
      <br>
      на время <b>{{ getNameCurrentTime }}</b>
    </p>
  </div>
</template>

<script>

export default {
  name: 'ResumePage',
  computed: {
    getNameCurrentSalon () {
      return this.$store.state.currentSalon.address
    },
    getNameCurrentWorker () {
      return this.$store.state.currentWorker.fio
    },
    getNameCurrentTime () {
      return this.$store.state.currentTime.time
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
