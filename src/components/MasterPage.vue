<template>
  <div class="hello">
    <h1>Фитнес-зал: {{ getNameCurrentSalon }}</h1>
    <p>
      Выберите, пожалуйста, мастера для занятий
    </p>

    <div v-if="isWorkersList">
      <h3>Свободных мастеров нет. Приносим извинения!</h3>
      <button
        type="button"
        class="sendButton"
        @click="backToSalonPage"
      >
        Назад к выбору салонов
      </button>
    </div>

    <h3 v-else>Свободные мастера</h3>
    <ul>
      <li
        v-for="(item, index) in workersList"
        :key="index"
        class="row clickElement"
        @click="setCurrentWorker(item)"
      >
        <span class="description"> {{item.description}}: </span>
        <span class="masterName"> {{item.fio}} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MasterPage',
  computed: {
    getNameCurrentSalon () {
      return this.$store.state.currentSalon.address
    },
    isWorkersList () {
      return this.workersList.length == 0
    },
    ...mapGetters(['workersList'])
  },
  methods: {
    setCurrentWorker (val) {
      this.$store.commit('setCurrentWorker', val)
    },
    backToSalonPage () {
      this.$store.state.currentSalon = null
    }
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.masterName {
  font-size: 14px;
  font-weight: 500;
}
.description {
  margin: 0 10px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
}
.clickElement {
  outline: 0;
  border: 0;
  vertical-align: middle;
  cursor: pointer;
  padding: 4px 16px;
  font-size: 14px;
  color: inherit;
  background: transparent;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  min-height: 2.572em;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
