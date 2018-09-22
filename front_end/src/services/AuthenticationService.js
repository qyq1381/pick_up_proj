import Api from './Api'

export default {
  register: function(credentials) {
    return Api().post('register', credentials)
  }
}