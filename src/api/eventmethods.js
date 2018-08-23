export default {
  sendeventform: function (obj) {
    let data = obj;
    this.$http.post("http://localhost:3000/order", data).then(
      response => {
        console.log("success");
      },
      error => {
        console.log("failed");
      }
    );
    this.$http.post("http://localhost:3000/user", data).then(
      response => {
        console.log("success");
      },
      error => {
        console.log("failed");
      }
    );
    alert(JSON.stringify(obj, null, 4))
  }
};
