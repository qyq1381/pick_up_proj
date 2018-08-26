import Api from './Api'

export default {
  register(credentials) {
    return Api().post('register',credentials).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    });
  }
}