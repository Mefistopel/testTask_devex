<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Выберите, пожалуйста, удобный для вас фитнес-зал для последующей процедуры записи к мастеру
    </p>

    <h3>Адреса фитнес-залов</h3>
    <ul>
      <li
        v-for="(item, index) in salonList"
        :key="index"
        class="row clickElement text-center"
        @click="setCurrentSalon(item)"
      >
        <img
          width="50"
          height="50"
          :src="item.img"
          alt="2"
        >
        <div>
          <div>{{item.address}}</div>
          <div class="description">{{item.time}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['salonList'])
  },
  methods: {
    setCurrentSalon (val) {
      this.$store.commit('setCurrentSalon', val)
    }
  }
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
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.description {
  font-size: 12px;
  text-align: left;
}
.text-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  align-content: right;
  justify-content: left;
}
.clickElement {
  outline: 0;
  border: 0;
  vertical-align: middle;
  cursor: pointer;
  padding: 4px 16px;
  font-size: 14px;
  text-decoration: none;
  color: inherit;
  background: transparent;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  min-height: 2.572em;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2),
    0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  font-weight: 500;
  text-transform: uppercase;
}
</style>
