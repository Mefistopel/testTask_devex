<template>
  <div>
    <h1>Мастер: {{ getCurrentWorker }}</h1>
    <p>
      Выберите, пожалуйста, время для занятий
    </p>

    <h3>Утро</h3>
    <ul class="row">
      <li
        v-for="(item, index) in timeList.morning"
        :key="index"
        :class="{'opened':item.freely, 'disabled':!item.freely}"
      >
        <div
          class="text-center"
          @click="setCurrentTime(item)"
        > {{item.time}} </div>
      </li>
    </ul>

    <h3>День</h3>
    <ul class="row">
      <li
        v-for="(item, index) in timeList.day"
        :key="index"
        :class="{'opened':item.freely, 'disabled':!item.freely}"
      >
        <div
          class="text-center"
          @click="setCurrentTime(item)"
        > {{item.time}} </div>
      </li>
    </ul>

    <h3>Вечер</h3>
    <ul class="row">
      <li
        v-for="(item, index) in timeList.evening"
        :key="index"
        :class="{'opened':item.freely, 'disabled':!item.freely}"
      >
        <div
          class="text-center"
          @click="setCurrentTime(item)"
        > {{item.time}} </div>
      </li>
    </ul>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TimePage',
  computed: {
    getCurrentWorker () {
      return this.$store.state.currentWorker.fio
    },
    ...mapGetters(['timeList'])
  },
  methods: {
    setCurrentTime (val) {
      if (val.freely) this.$store.commit('setCurrentTime', val)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 10px 10px;
}
div {
  display: block;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.opened {
  cursor: pointer;
  outline: 0;
  margin: 4px 4px;
  border: 0;
  font-size: 14px;
  color: inherit;
  background: transparent;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  min-height: 2.572em;
  min-width: 50px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
.disabled {
  cursor: not-allowed !important;
  outline: 0;
  border: 0;
  font-size: 14px;
  color: inherit;
  background: grey;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  min-height: 2.572em;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
.text-center {
  margin: 10px;
}
</style>
