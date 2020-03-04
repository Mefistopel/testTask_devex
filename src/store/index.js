/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import server from './../server/server'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    salonList: null,
    workersList: null,
    timeList: null,
    currentSalon: null,
    currentWorker: null,
    currentTime: null,
    isSuccessSendServer: false
  },
  getters: {
    salonList (state, getters) {
      return state.salonList
    },
    workersList (state, getters) {
      let salonWorkersList = state.workersList.filter(function (obj) {
        return state.currentSalon.id == obj.idsalon
      })
      return salonWorkersList
    },
    timeList (state, getters) {
      return state.timeList
    }
  },
  mutations: {
    updateSalonList (state, list) {
      state.salonList = list
    },
    updateWorkersList (state, list) {
      state.workersList = list
    },
    updateTimeList (state, list) {
      state.timeList = list
    },
    updateSuccessSendServer (state, payload) {
      state.isSuccessSendServer = payload
    },

    setCurrentSalon (state, payload) {
      state.currentSalon = payload
    },
    setCurrentWorker (state, payload) {
      state.currentWorker = payload
    },
    setCurrentTime (state, payload) {
      state.currentTime = payload
    },
  },
  actions: {
    getSalonList ({ commit, state }) {
      server.getSalonList((data) => {
        commit('updateSalonList', data)
      })
    },
    getWorkersList ({ commit }, salonId) {
      server.getWorkersList(salonId, (data) => {
        commit('updateWorkersList', data)
      })
    },
    getTimeList ({ commit }) {
      server.getTimeList((data) => {
        commit('updateTimeList', data)
      })
    },
    postClient ({ commit, state }, { phoneNumber, clientName }) {
      let data = {
        salonId: state.currentSalon.id,
        workerId: state.currentWorker.id,
        timeWork: state.currentTime.id,
        phoneNumber,
        clientName
      }
      server.saveClient(data, () => {
        commit('updateSuccessSendServer', data)
      })
    }
  }
});
