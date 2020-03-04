import axios from "axios";

export default {
  getSalonList (callback) {
    axios.get("salon.json")
      .then(response => {
        let data = typeof response.data !== "undefined" ? response.data : null
        callback(data)
      })
      .catch((error) => {
        console.log(error)
      });
  },
  getTimeList (callback) {
    axios.get("gettimetable.json")
      .then(response => {
        let data = typeof response.data !== "undefined" ? response.data : null
        callback(data)
      })
      .catch((error) => {
        console.log(error)
      });
  },
  getWorkersList (salonId, callback) {
    axios.get("workers.json", {
      params: {
        idsalon: '1'
      }
    })
      .then(response => {
        console.warn(response.data, salonId)
        let data = typeof response.data !== "undefined" ? response.data : null
        callback(data)
      })
      .catch((error) => {
        console.log(error)
      });
  },
  saveClient (dataClient, callback) {
    axios.post('/api/systemSetting', dataClient)
    callback(true)
    // .then((response) => {
    //   let status = typeof response.data.data !== 'undefined' ? response.data.status : 'Ошибка записи'
    //   callback(status)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
  }
};
