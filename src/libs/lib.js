import Axios from 'axios'

export default {
  // Vue.ues(...)
  install (Vue) {
    Vue.prototype['$http'] = Axios
  }
}
