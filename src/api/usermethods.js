export default {
  sendregisterform: function () {
    let data = {
      state: state_v,
      city: city_v,
      airport: airport_v
    };
    this.$http.post("http://localhost:3000/todos", data).then(
      response => {
        console.log("success");
      },
      error => {
        console.log("failed");
      }
    );
  }
};
